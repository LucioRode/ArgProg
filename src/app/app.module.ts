import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListonsuperiorComponent } from './Componentes/listonsuperior/listonsuperior.component';
import { BotonesComponent } from './Componentes/botones/botones.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AcercadeComponent } from './Componentes/acercade/acercade.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { LoginComponent } from './Componentes/login/login.component';
import { UsuarioNuevoComponent } from './Componentes/login/usuario-nuevo/usuario-nuevo.component';
import { InicioSessionComponent } from './Componentes/login/inicio-session/inicio-session.component';
import { FormContactoComponent } from './Componentes/contacto/form-contacto/form-contacto.component';
import { PropaComponent } from './Componentes/login/propa/propa.component';
import { CargaDeDatosComponent } from './Componentes/login/carga-de-datos/carga-de-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListonsuperiorComponent,
    BotonesComponent,
    DlrComponent,
    FooterComponent,
    InicioComponent,
    AcercadeComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    LoginComponent,
    UsuarioNuevoComponent,
    InicioSessionComponent,
    FormContactoComponent,
    PropaComponent,
    CargaDeDatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
