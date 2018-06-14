import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/base/home/home.component';
import {LoginComponent} from './pages/core/login/login.component';
import {PageNotFoundComponent} from './pages/errors/page-not-found/page-not-found.component';
import {SoccerStandingsComponent} from './pages/core/soccer-standings/soccer-standings.component';
import {TeamInfosComponent} from './pages/core/team-infos/team-infos.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: PagesComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'laliga', component: SoccerStandingsComponent},
      {path: 'laliga/teams/:id', component: TeamInfosComponent},
      {path: '', redirectTo: 'home', pathMatch: 'prefix'}, // e.g. empty prefix -> http://localhost:4200/____
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: '**', redirectTo: 'page-not-found'} // Any paths which don't match the previous defined routes
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
