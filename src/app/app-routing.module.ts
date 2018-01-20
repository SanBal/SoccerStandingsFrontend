import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/base/home/home.component';
import { TeamStandingsComponent } from './views/team-standings/team-standings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'laliga', component: TeamStandingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
