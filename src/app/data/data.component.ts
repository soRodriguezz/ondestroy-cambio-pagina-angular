import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {
  public dataForm: FormGroup = this.formBuilder.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnDestroy(): void { 
    console.log("salio de pestaña");

    Swal.fire({
      title: '¿Esta seguro de cambiar de pagina?',
      text: "perdera su progreso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI'
    }).then((result) => {

      console.log(result);
      if (result.isConfirmed) {

      } else {

        sessionStorage.setItem('Nombre', this.dataForm.value.nombre);
        sessionStorage.setItem('Apellido', this.dataForm.value.apellido);
        sessionStorage.setItem('Edad', this.dataForm.value.edad);

        this.router.navigate(['/data']);

      }
    })

  }

  ngOnInit() {
    if (sessionStorage.length != 0) {
      this.dataForm.controls.nombre.setValue(sessionStorage.getItem('Nombre'));
      this.dataForm.controls.apellido.setValue(sessionStorage.getItem('Apellido'));
      this.dataForm.controls.edad.setValue(sessionStorage.getItem('Edad'));
      sessionStorage.clear();
    }
  }
}
