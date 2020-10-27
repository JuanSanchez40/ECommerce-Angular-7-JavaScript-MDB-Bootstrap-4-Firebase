import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { clientesInterface } from '../../models/clientes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-clientes',
  templateUrl: './modal-clientes.component.html',
  styleUrls: ['./modal-clientes.component.scss']
})
export class ModalClientesComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSavecliente(clienteForm: NgForm): void {
    if (clienteForm.value.id == null) {
      // New 
      clienteForm.value.userUid = this.userUid;
      this.dataApi.addcliente(clienteForm.value);
    } else {
      // Update
      this.dataApi.updateclientes(clienteForm.value);
    }
    clienteForm.resetForm();
    this.btnClose.nativeElement.click();
    
  }
  
  onClosecliente(clienteForm: NgForm): void {
    clienteForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}


