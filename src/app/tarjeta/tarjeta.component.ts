import { Component, Input, OnInit, Output } from '@angular/core';
import { empezar, Persona } from '../persona';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {
  // Usamos @Input para que el PADRE le de al HIJO un componente suyo
 @Input() objetop: Persona = empezar();

 //Usaremos @Output en el caso contrario
 
  constructor() { }

  ngOnInit(): void {
  }

}
