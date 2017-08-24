import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AddsubComponent } from './view/addsub/addsub.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AddComponent },
  { path: ':id', component: ViewComponent },
  { path: ':id/add', component: AddsubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
