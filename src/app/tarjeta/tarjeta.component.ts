import { Component, Input, OnInit, Output } from '@angular/core';
import { empezar, Persona } from '../persona';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {
 @Input() objetop: Persona = empezar();
 
  constructor() { }

  ngOnInit(): void {
  }

}
