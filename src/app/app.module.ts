import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { RegisterComponent } from './component/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    ArticuloComponent,
    IniciarSesionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
