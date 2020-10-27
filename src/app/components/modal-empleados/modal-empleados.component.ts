import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { empleadosInterface } from '../../models/empleados';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-empleados',
  templateUrl: './modal-empleados.component.html',
  styleUrls: ['./modal-empleados.component.scss']
})
export class ModalEmpleadosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveempleado(empleadoForm: NgForm): void {
    if (empleadoForm.value.id == null) {
      // New 
      empleadoForm.value.userUid = this.userUid;
      this.dataApi.addempleado(empleadoForm.value);
    } else {
      // Update
      this.dataApi.updateempleados(empleadoForm.value);
    }
    empleadoForm.resetForm();
    this.btnClose.nativeElement.click();
    
  }
  
  onCloseempleado(empleadoForm: NgForm): void {
    empleadoForm.resetForm();
    this.btnClose.nativeElement.click();
  }



}
