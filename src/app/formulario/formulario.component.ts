import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';
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
    private formBuilder : FormBuilder, 
    private router: ActivatedRoute, 
    private personaService: PersonasService, 
    private route: Router
  ) { }

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

  anadirPersona(): void{
    console.log(this.registerForm.value);
    this.persona = this.registerForm.value;
    this.personaService.addUser(this.persona).subscribe(per=>{
      this.persona = per;
      this.personaAnadida.emit(this.persona)
      this.route.navigate(['/lista_personas']);
    })
  }


  editarPersona(): void{
    this.personaService.updateUser(this.persona, this.registerForm.value).subscribe(per=>
      this.route.navigate(['/lista_persona'])
    )}
  }

  
  


