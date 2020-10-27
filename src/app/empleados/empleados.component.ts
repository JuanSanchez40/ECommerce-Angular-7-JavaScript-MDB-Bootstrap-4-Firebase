import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmpleadosService } from '../shared/empleados.service';
import { Empleados } from '../shared/empleados.model';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmpleadosList();
    
  }

  resetForm(form?: NgForm) {
    if (form)
    form.reset();
    this.empleadosService.selectedEmpleados = {
         _id: "",
         name: "",
         position: "",
         office: "",
         salary: null
    }
  }
 
  onSubmit(form: NgForm){
    if(form.value._id == ""){
    this.empleadosService.postEmpleados(form.value).subscribe((res) => {
      
      
      this.resetForm(form);
      this.refreshEmpleadosList();
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
            
    });
    }
    else{
      this.empleadosService.putEmpleados(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmpleadosList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
        this.refreshEmpleadosList();
    });
  }
}

  refreshEmpleadosList() {
    this.empleadosService.getEmpleadosList().subscribe((res) => {
      this.empleadosService.empleados = res as Empleados[];
    });
  }

  onEdit(emp: Empleados){
    this.empleadosService.selectedEmpleados = emp;
  }

  onDelete(_id: string, form: NgForm){
     if (confirm('Are you sure to delete this record ?') == true){
       this.empleadosService.deleteEmpleados(_id).subscribe((res) => {
         this.refreshEmpleadosList();
         
         M.toast({ html: 'Deleted successfully', classes: 'rounded' })

         this.resetForm(form);
       });
     }
  }

}
