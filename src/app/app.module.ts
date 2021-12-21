import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { InfoProComponent } from './info-pro/info-pro.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {HobiesComponent} from './hobies/hobies.component';
import { SkillsComponent } from './skills/skills.component';
import { AbstractComponent } from './abstract/abstract.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPersoComponent,
    InfoProComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    HobiesComponent,
    SkillsComponent,
    AbstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
