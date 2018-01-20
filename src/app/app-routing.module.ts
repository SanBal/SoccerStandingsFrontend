import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/base/home/home.component';
import { SoccerStandingsComponent } from './views/soccer-standings/soccer-standings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'laliga', component: SoccerStandingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
