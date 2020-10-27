import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BookInterface } from '../models/book';
import { clientesInterface } from '../models/clientes';
import { proveedoresInterface } from '../models/proveedores';
import { empleadosInterface } from '../models/empleados';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }
  private booksCollection: AngularFirestoreCollection<BookInterface>;
  private books: Observable<BookInterface[]>;
  private bookDoc: AngularFirestoreDocument<BookInterface>;
  private book: Observable<BookInterface>;
  public selectedBook: BookInterface = {
    id: null
  };

  private clientesCollection: AngularFirestoreCollection<clientesInterface>;
  private clientes: Observable<clientesInterface[]>;
  private clientesDoc: AngularFirestoreDocument<clientesInterface>;
  private cliente: Observable<clientesInterface>;
  public selectedclientes: clientesInterface = {
    id: null
  };

  private proveedoresCollection: AngularFirestoreCollection<proveedoresInterface>;
  private proveedores: Observable<proveedoresInterface[]>;
  private proveedoresDoc: AngularFirestoreDocument<proveedoresInterface>;
  private proveedor: Observable<proveedoresInterface>;
  public selectedproveedores: proveedoresInterface = {
    id: null
  };

  private empleadosCollection: AngularFirestoreCollection<empleadosInterface>;
  private empleados: Observable<empleadosInterface[]>;
  private empleadosDoc: AngularFirestoreDocument<empleadosInterface>;
  private empleado: Observable<empleadosInterface>;
  public selectedempleados: empleadosInterface = {
    id: null
  };

  getAllBooks() {
    this.booksCollection = this.afs.collection<BookInterface>('books');
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  getAllBooksOffers() {
    this.booksCollection = this.afs.collection('books', ref => ref.where('oferta', '==', '1'));
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneBook(idBook: string) {
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BookInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addBook(book: BookInterface): void {
    this.booksCollection.add(book);
  }
  updateBook(book: BookInterface): void {
    let idBook = book.id;
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    this.bookDoc.update(book);
  }
  deleteBook(idBook: string): void {
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
    this.bookDoc.delete();
  }
//////> Aqui comienza Modulo Clientes    <//////
  getAllclientes() {
    this.clientesCollection = this.afs.collection<clientesInterface>('clientes');
    return this.clientes = this.clientesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as clientesInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllclientesOffers() {
    this.clientesCollection = this.afs.collection('clientes', ref => ref.where('oferta', '==', '1'));
    return this.clientes = this.clientesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as clientesInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOnecliente(idcliente: string) {
    this.clientesDoc = this.afs.doc<clientesInterface>(`clientes/${idcliente}`);
    return this.cliente = this.clientesDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as clientesInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addcliente(cliente: clientesInterface): void {
    this.clientesCollection.add(cliente);
  }
  updateclientes(cliente: clientesInterface): void {
    let idcliente = cliente.id;
    this.clientesDoc = this.afs.doc<clientesInterface>(`clientes/${idcliente}`);
    this.clientesDoc.update(cliente);
  }
  deletecliente(idcliente: string): void {
    this.clientesDoc = this.afs.doc<clientesInterface>(`clientes/${idcliente}`);
    this.clientesDoc.delete();
  }
/////>Aqui comienza modulo proveedores</////
getAllproveedores() {
  this.proveedoresCollection = this.afs.collection<proveedoresInterface>('proveedores');
  return this.proveedores = this.proveedoresCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as proveedoresInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}

getAllproveedoresOffers() {
  this.proveedoresCollection = this.afs.collection('proveedores', ref => ref.where('oferta', '==', '1'));
  return this.proveedores = this.proveedoresCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as proveedoresInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}

getOneproveedor(idproveedor: string) {
  this.proveedoresDoc = this.afs.doc<proveedoresInterface>(`proveedores/${idproveedor}`);
  return this.proveedor = this.proveedoresDoc.snapshotChanges().pipe(map(action => {
    if (action.payload.exists === false) {
      return null;
    } else {
      const data = action.payload.data() as proveedoresInterface;
      data.id = action.payload.id;
      return data;
    }
  }));
}

addproveedor(proveedor: proveedoresInterface): void {
  this.proveedoresCollection.add(proveedor);
}
updateproveedores(proveedor: proveedoresInterface): void {
  let idproveedor = proveedor.id;
  this.proveedoresDoc = this.afs.doc<proveedoresInterface>(`proveedores/${idproveedor}`);
  this.proveedoresDoc.update(proveedor);
}
deleteproveedor(idproveedor: string): void {
  this.proveedoresDoc = this.afs.doc<proveedoresInterface>(`proveedores/${idproveedor}`);
  this.proveedoresDoc.delete();
}

/////>Aqui comienza modulo empleados</////
getAllempleados() {
  this.empleadosCollection = this.afs.collection<empleadosInterface>('empleados');
  return this.empleados = this.empleadosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as empleadosInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}

getAllempleadosOffers() {
  this.empleadosCollection = this.afs.collection('empleados', ref => ref.where('oferta', '==', '1'));
  return this.empleados = this.empleadosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as empleadosInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}

getOneempleado(idempleado: string) {
  this.empleadosDoc = this.afs.doc<empleadosInterface>(`empleados/${idempleado}`);
  return this.empleado = this.empleadosDoc.snapshotChanges().pipe(map(action => {
    if (action.payload.exists === false) {
      return null;
    } else {
      const data = action.payload.data() as empleadosInterface;
      data.id = action.payload.id;
      return data;
    }
  }));
}

addempleado(empleado: empleadosInterface): void {
  this.empleadosCollection.add(empleado);
}
updateempleados(empleado: empleadosInterface): void {
  let idempleado = empleado.id;
  this.empleadosDoc = this.afs.doc<empleadosInterface>(`empleados/${idempleado}`);
  this.empleadosDoc.update(empleado);
}
deleteempleado(idempleado: string): void {
  this.empleadosDoc = this.afs.doc<empleadosInterface>(`empleados/${idempleado}`);
  this.empleadosDoc.delete();
}

}


