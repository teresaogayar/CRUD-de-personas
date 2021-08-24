import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  
  cont: any = 0;
  conta: any = 0;

  constructor(
    private contadorService: ContadorService
  ) { 
      this.contadorService.contador.subscribe( conta =>
        {
        this.cont = localStorage.getItem('conta');
    })
  }

  ngOnInit(): void {
    this.cont= localStorage.getItem('conta');
  }

}
