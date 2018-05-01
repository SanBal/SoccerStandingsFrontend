import {TeamSeasonStat} from '../model/team-season-stat';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Team} from '../model/team';


@Injectable()
export class SeasonService {

  public static readonly JSON_STANDING_KEY = 'standing';
  constructor(private http: HttpClient) {}

  /**
   * Returns a promise object with 'TeamSeasonStat' array
   * if the HTTP-GET call to the ' football-data' API was successful
   */
  getPromiseTeamSeasonStats(): Promise<any> {
    console.log('Season Service - GET leagueTable standings');
    const headers = new HttpHeaders().set('X-Auth-Token', 'd4bcc5971ac24789addad53e8e1a968d');
    return this.http.get('http://api.football-data.org//v1/competitions/455/leagueTable', {headers})
      .toPromise() // Convert 'Observable' HTTP response to 'Promise' object
      .then(this.getExtractedTeamSeasonStats) // Append callback function which is called if request was successful
      .catch(error => {
        // Return error promise with response error object
        throw Promise.reject(error);
      });
  }

  private getExtractedTeamSeasonStats(res: Response) {
    const stats: TeamSeasonStat[] = [];
    console.log('GET leagueTable standings response:');
    console.log(res);

    for (let i = 0; i < Object.keys(res[SeasonService.JSON_STANDING_KEY]).length; i++) {
      const standing: any = res[SeasonService.JSON_STANDING_KEY][i];
      const teamURI: string = standing._links.team.href;
      const id: number = +teamURI.substr(teamURI.lastIndexOf('/') + 1, teamURI.length);
      const team = new Team(id, standing);
      const stat = new TeamSeasonStat(team, standing);
      stats.push(stat);
    }
    return stats;
  }
}
