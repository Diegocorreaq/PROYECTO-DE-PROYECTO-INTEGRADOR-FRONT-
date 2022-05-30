import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddHabitanteComponent } from './components/add-habitante/add-habitante.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { LoginComponent } from './auth/login.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { ConsultaVisitanteComponent } from './components/consulta-visitante/consulta-visitante.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    AddModalidadComponent,
    AddDepartamentoComponent,
    AddHabitanteComponent,
    AddMascotaComponent,
    AddVisitanteComponent,
    AddUsuarioComponent,
    ConsultaVisitanteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
