import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/base/home/home.component';
import {LoginComponent} from './views/core/login/login.component';
import {PageNotFoundComponent} from './views/errors/page-not-found/page-not-found.component';
import {SoccerStandingsComponent} from './views/core/soccer-standings/soccer-standings.component';
import {TeamInfosComponent} from './views/core/team-infos/team-infos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'laliga', component: SoccerStandingsComponent},
  {path: 'laliga/teams/:id', component: TeamInfosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'prefix'}, // e.g. empty prefix -> http://localhost:4200/____
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'} // Any paths which don't match the previous defined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
