import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { proveedoresInterface } from '../../models/proveedores';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-proveedores',
  templateUrl: './modal-proveedores.component.html',
  styleUrls: ['./modal-proveedores.component.scss']
})
export class ModalProveedoresComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveproveedor(proveedorForm: NgForm): void {
    if (proveedorForm.value.id == null) {
      // New 
      proveedorForm.value.userUid = this.userUid;
      this.dataApi.addproveedor(proveedorForm.value);
    } else {
      // Update
      this.dataApi.updateproveedores(proveedorForm.value);
    }
    proveedorForm.resetForm();
    this.btnClose.nativeElement.click();
    
  }
  
  onCloseproveedor(proveedorForm: NgForm): void {
    proveedorForm.resetForm();
    this.btnClose.nativeElement.click();
  }


}
