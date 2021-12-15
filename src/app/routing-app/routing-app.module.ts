import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingAppRoutingModule } from './routing-app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { InfoPersoComponent } from '../info-perso/info-perso.component';
import { InfoProComponent } from '../info-pro/info-pro.component';
import { HobiesComponent } from '../hobies/hobies.component';
import { ContactComponent } from '../contact/contact.component';
import { SkilsComponent } from '../skils/skils.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: InfoPersoComponent },
  { path: 'parcourt', component: InfoProComponent },
  { path: 'hobies', component: HobiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skils', component: SkilsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingAppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingAppModule { }
