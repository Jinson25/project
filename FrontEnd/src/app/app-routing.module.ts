import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { ClientRoutingModule } from './components/client/client-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, ClientRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
