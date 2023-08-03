import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { ClientRoutingModule } from './components/client/client-routing.module';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, ClientRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
