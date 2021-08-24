import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  contador: EventEmitter<number> = new EventEmitter<number>();

  cont: number = 0;
  conta: any = 0;

  constructor() {
    this.conta = localStorage.getItem('conta');
   }

   incrementar(): void{
    console.log('Entra en incrementar')
    this.conta++;
    console.log(this.conta)
    localStorage.setItem('conta', this.conta);
    this.contador.emit(this.conta);
   }

}
