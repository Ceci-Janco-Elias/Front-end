import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/acerca-de/editar/editar.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarHardSkillsComponent } from './components/hard-skills/editar-hard-skills/editar-hard-skills.component';
import { NuevaHardSkillsComponent } from './components/hard-skills/nueva-hard-skills/nueva-hard-skills.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'editar/:id', component: EditarComponent},
  {path:'nuevaexperiencia', component: NuevaExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditarExperienciaComponent},
  {path:'nuevaeducacion', component: NuevaEducacionComponent},
  {path:'editareducacion/:id', component: EditarEducacionComponent},
  {path:'nuevahs', component: NuevaHardSkillsComponent},
  {path:'editarhs/:id', component: EditarHardSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
