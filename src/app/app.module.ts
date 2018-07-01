import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AuthenticationService} from './services/authentication.service';
import {HeaderComponent} from './pages/base/header/header.component';
import {HomeComponent} from './pages/base/home/home.component';
import {SoccerStandingsComponent} from './pages/core/soccer-standings/soccer-standings.component';

import {SoccerService} from './services/soccer.service';
import {TeamInfosComponent} from './pages/core/team-infos/team-infos.component';
import {PageNotFoundComponent} from './pages/errors/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/core/login/login.component';

import {FormsModule} from '@angular/forms';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SoccerStandingsComponent,
    TeamInfosComponent,
    PageNotFoundComponent,
    LoginComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SoccerService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
