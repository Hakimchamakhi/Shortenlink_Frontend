import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component :HomeComponent},
  {path:'login', component :LoginComponent},
  {path:'register', component :RegisterComponent},
  {path:'logs', component :LogsComponent},
  {path:'links', component :DeleteComponent},
  {path:':id', component :RedirectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
