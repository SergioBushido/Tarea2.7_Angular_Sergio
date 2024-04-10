import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'articulo', component: ArticuloComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  // Redirecciona cualquier ruta no encontrada a Home, opcionalmente puedes crear un componente para Página no encontrada
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
