import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { proveedoresInterface } from '../../../models/proveedores';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';


@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrls: ['./list-proveedores.component.scss']
})
export class ListProveedoresComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private proveedores: proveedoresInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListproveedores();
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

  getListproveedores() {
    this.dataApi.getAllproveedores().subscribe(proveedores => {
        this.proveedores = proveedores;
      });
  }

  onDeleteproveedor(idproveedor: string): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteproveedor(idproveedor);
    }
  }

  onPreUpdateproveedor(proveedor: proveedoresInterface) {
    console.log('PROVEEDORES', proveedor);
    this.dataApi.selectedproveedores = Object.assign({}, proveedor);
  }





}
