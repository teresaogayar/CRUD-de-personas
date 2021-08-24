import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from '../contador.service';
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

  public personas: Persona[] = [];

  
  constructor(
    public personaService: PersonasService, 
    public router: Router,
    public contadorService: ContadorService
    ){}

  //ciclo de vida de angular que se ejecuta despues del constructor
  ngOnInit(): void {

    this.personaService.cargarUsuarios()
      .subscribe((resp: Persona[]) =>{
        console.log(resp); 
        this.personas = resp;

      })
  }

  crea(): void {
    this.router.navigate(['/crear'])
  }

  MensajeBorrarUsuario(id: number){
    this.personas = this.personas.filter(per => per.id!=id);
    this.contadorService.incrementar();
  }
}
