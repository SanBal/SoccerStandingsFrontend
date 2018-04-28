import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './views/base/header/header.component';
import { HomeComponent } from './views/base/home/home.component';
import { SoccerStandingsComponent } from './views/soccer-standings/soccer-standings.component';

import { SeasonService } from './services/season.service';
import { TeamInfosComponent } from './views/team-infos/team-infos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SoccerStandingsComponent,
    TeamInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SeasonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
