import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { empezar, Persona } from '../persona';
import { PersonasService } from '../persona.service';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {
// Usamos @Input para que el PADRE le de al HIJO un componente suyo
 @Input() objetop: Persona = empezar();

 //Usaremos @Output en el caso contrario
 @Output() enviar: EventEmitter<any> = new EventEmitter<any>();
 
 constructor(
   private personaService: PersonasService, 
   private route: Router
  ) { }


  ngOnInit(): void {
  }

  editar(): void{
    this.route.navigate(['/editar', this.objetop.id])
  }

  borrarPersona(){
    //this.enviar.emit(this.objetop.id)
    this.personaService.deleteUser(this.objetop.id).subscribe();
    this.enviar.emit(this.objetop.id);

  }

}
