import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { PersonaResolver } from './resolvers/persona.resolver';


const routes: Routes = [
  { 
    path: 'lista_persona', component: PersonaComponent
  },{ 
    path: 'formulario', component: FormularioComponent
  },{ 
    path:'editar/:id', component: FormularioComponent, 
    resolve:{
        persona: PersonaResolver
    }
  },{
    path:'', component: InicioComponent
  },{
    path:'', component: PiepaginaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
