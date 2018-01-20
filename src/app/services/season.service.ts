import {TeamSeasonStat} from '../model/team-season-stat';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Team} from '../model/team';


@Injectable()
export class SeasonService {

  stats: TeamSeasonStat[] = [];
  constructor(private http: HttpClient) {}

  getTeamSeasonStats() {
    console.log('Service');
    const headers = new HttpHeaders().set('X-Auth-Token', 'd4bcc5971ac24789addad53e8e1a968d');
    this.http.get('http://api.football-data.org//v1/competitions/455/leagueTable', {headers})
      .subscribe(resp => {
        console.log('response:');
        console.log(resp);
        for (let i = 0; i < Object.keys(resp['standing']).length; i++) {
          const standing: any = resp['standing'][i];
          const teamURI: string = standing._links.team.href;
          const id: number = +teamURI.substr(teamURI.lastIndexOf('/') + 1, teamURI.length);
          const team = new Team(id, standing);
          const stat = new TeamSeasonStat(team, standing);
          this.stats.push(stat);
        }
      });
    return this.stats;
  }
}
