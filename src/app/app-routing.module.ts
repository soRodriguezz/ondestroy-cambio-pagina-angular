import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '**',
    component: DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
