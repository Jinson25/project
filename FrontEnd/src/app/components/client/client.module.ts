import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [
    HomeComponent,
    ForumComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ],
})
export class ClientModule { }
