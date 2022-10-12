import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './components/acerca-de/editar/editar.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { NuevaHardSkillsComponent } from './components/hard-skills/nueva-hard-skills/nueva-hard-skills.component';
import { EditarHardSkillsComponent } from './components/hard-skills/editar-hard-skills/editar-hard-skills.component';
import { NuevaSoftSkillsComponent } from './components/soft-skills/nueva-soft-skills/nueva-soft-skills.component';
import { EditarSoftSkillsComponent } from './components/soft-skills/editar-soft-skills/editar-soft-skills.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectoComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    EditarComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    NuevaHardSkillsComponent,
    EditarHardSkillsComponent,
    NuevaSoftSkillsComponent,
    EditarSoftSkillsComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
