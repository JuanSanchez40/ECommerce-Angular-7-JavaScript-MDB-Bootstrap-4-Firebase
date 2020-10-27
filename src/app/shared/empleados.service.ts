import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators/map';
import 'rxjs/add/operator/toPromise';


import { Empleados } from './empleados.model';

@Injectable({
  providedIn: 'root'
})


export class EmpleadosService {
    selectedEmpleados: Empleados;
    empleados: Empleados[];
    readonly baseURL = 'http://localhost:3000/empleados';

    constructor(private http : HttpClient) { }

    postEmpleados(emp : Empleados){
    return this.http.post(this.baseURL, emp);
    }

    getEmpleadosList(){
      return this.http.get(this.baseURL);
    }

    putEmpleados(emp: Empleados){
      return this.http.put(this.baseURL + `/${emp._id}`, emp);
    }

    deleteEmpleados(_id: string) {
      return this.http.delete(this.baseURL + `/${_id}`);
    }

}
