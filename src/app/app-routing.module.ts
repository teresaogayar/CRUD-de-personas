import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaComponent } from './persona/persona.component';


const routes: Routes = [
  { path: 'lista_persona', component: PersonaComponent},
  { path: '', component: FormularioComponent},
  { path:'editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
