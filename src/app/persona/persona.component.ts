import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

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

  constructor() { }

  ngOnInit(): void {
  }

}
