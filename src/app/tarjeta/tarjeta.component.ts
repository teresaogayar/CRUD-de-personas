import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
 @Output() enviarBorrado: EventEmitter<any> = new EventEmitter<any>();
 
 constructor(
   private personaService: PersonasService, 
   private route: Router,
   private snackbar: MatSnackBar
  ) { }


  ngOnInit(): void {
  }

  editar(): void{
    this.route.navigate(['/editar', this.objetop.id])
  }

  borrarPersona(){
    this.route.navigate(['/lista_persona'])
    this.personaService.deleteUser(this.objetop.id).subscribe();
    this.enviarBorrado.emit(this.objetop.id);
    this.mostrarNotificacionBorrado("Usuario borrado");

  }
  mostrarNotificacionBorrado(mensaje: string){
    this.snackbar.open(mensaje, '🗑️',{
      duration:2500
    })
  }

}
