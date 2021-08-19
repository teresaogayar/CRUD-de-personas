import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  //Cargamos valores por defecto en el formulario
  registerForm = this.formBuilder.group({
    user: [''],
    password:  [''],
    name:  [''],
    surname:  [''],
    company_email:  [''],
    personal_email:  [''],
    city:  [''],
    active: [true],
    created_date:  [''],
    imagen_url:  [''],
    termination_date: ['']
  });

  enviar(){
    console.log(this.registerForm.value);
  }

  //patchValue actualiza los campos del formulario
  limpiar(){
    this.registerForm.patchValue({
      user: '',
      password: '',
      name: '',
      surname: '',
      company_email: '',
      personal_email: '',
      city: '',
      active: true,
      created_date: '',
      imagen_url: '',
      termination_date: ''
    })
  }

  ngOnInit(): void {
  }

}
