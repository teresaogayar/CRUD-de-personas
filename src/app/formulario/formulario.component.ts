import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { empezar, Persona } from '../persona';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  persona: Persona = empezar();
  id: number = -1;

  @Input() botonPulsado: boolean = true;
  @Output() personaAnadida: EventEmitter<Persona> = new EventEmitter();
  @Output() personaEditada: Persona = empezar();

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private personaService: PersonasService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }

  //Cargamos valores por defecto en el formulario
  registerForm = this.formBuilder.group({
    user: [''],
    password: [''],
    name: [''],
    surname: [''],
    company_email: [''],
    personal_email: [''],
    city: [''],
    active: [true],
    created_date: [''],
    imagen_url: [''],
    termination_date: ['']
  });

  enviar() {
    console.log(this.registerForm.value);
  }

  //patchValue actualiza los campos del formulario
  limpiar() {
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
    this.router.params.subscribe(
      params => {
        this.id = params['id']
        console.log(this.id)
      }
    )


    if(!this.id) return; 
    this.personaService.cargarUsuario(this.id).subscribe(per =>{
      console.log(per)
      this.persona = per; 
      this.registerForm.patchValue(per)
    })
    

  }

  //Si no existe añade, si  existe lo edita
  guardar(){
    if (!this.id) {
      this.anadirPersona();
      this.limpiar();
    } else {
      console.log("entra en editar")
      this.editarPersona();
      this.limpiar();
    }
  }


  anadirPersona(): void {
    console.log(this.registerForm.value);
    this.persona = this.registerForm.value;
    this.personaService.addUser(this.persona).subscribe(per => {
      this.persona = per;
      this.personaAnadida.emit(this.persona)
      this.route.navigate(['/lista_personas']);
      this.mostrarNotificacion('Registro realizado');
    })
  }


  editarPersona(): void {
    this.persona = this.registerForm.value
    this.persona.id = this.id;
    this.personaService.updateUser(this.registerForm.value).subscribe(per => {
      this.persona = per; 
      this.route.navigate(['/lista_persona']);
      this.mostrarNotificacion('Cambios guardados');
    }

    )
  }

  mostrarNotificacion(mensaje: string){
    this.snackbar.open(mensaje, '✔️',{
      duration:2500
    })
  }

}

