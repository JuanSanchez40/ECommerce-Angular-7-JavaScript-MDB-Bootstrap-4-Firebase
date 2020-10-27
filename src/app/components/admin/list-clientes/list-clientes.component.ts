import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { clientesInterface } from '../../../models/clientes';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private clientes: clientesInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListclientes();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin = true;
        })
      }
    })
  }

  getListclientes() {
    this.dataApi.getAllclientes().subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  onDeletecliente(idcliente: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deletecliente(idcliente);
    }
  }

  onPreUpdatecliente(cliente: clientesInterface) {
    console.log('CLIENTE', cliente);
    this.dataApi.selectedclientes = Object.assign({}, cliente);
  }






}

