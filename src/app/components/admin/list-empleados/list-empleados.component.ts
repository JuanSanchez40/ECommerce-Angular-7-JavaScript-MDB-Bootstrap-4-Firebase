import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { empleadosInterface } from '../../../models/empleados';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';
@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private empleados: empleadosInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListempleados();
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

  getListempleados() {
    this.dataApi.getAllempleados().subscribe(empleados => {
        this.empleados = empleados;
      });
  }

  onDeleteempleado(idempleado: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteempleado(idempleado);
    }
  }

  onPreUpdateempleado(empleado: empleadosInterface) {
    console.log('EMPLEADOS', empleado);
    this.dataApi.selectedempleados = Object.assign({}, empleado);
  }





}
