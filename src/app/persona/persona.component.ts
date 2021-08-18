import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  persona: Persona = {
    id: 0,
    user: '',
    password: '',
    name: '',
    surname: '',
    company_email: '',
    personal_email: '',
    city: '',
    active: false,
    created_date: '',
    imagen_url: '',
    termination_date: ''
  }

  public personas: any =[]

  constructor(public personaService: PersonasService){
    
  }

  //ciclo de vida de angular que se ejecuta despues del constructor
  ngOnInit(): void {

    this.personaService.cargarUsuarios()
      .subscribe( resp =>{

        console.log(resp); 
        this.personas = resp;

      })
  }

}
