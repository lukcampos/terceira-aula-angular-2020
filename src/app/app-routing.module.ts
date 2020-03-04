import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importar components para as rotas
import { UserComponent } from './components/index';

const routes: Routes = [{
  path:'user',
  component:  UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
