import {TeamSeasonStat} from '../model/team-season-stat';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Team} from '../model/team';


@Injectable()
export class SoccerService {

  public static readonly JSON_STANDING_KEY = 'standing';
  public static readonly API_TOKEN = 'd4bcc5971ac24789addad53e8e1a968d';
  constructor(private http: HttpClient) {}

  /**
   * Returns a promise object with 'TeamSeasonStat' array
   * if the HTTP-GET call to the ' football-data' API was successful
   */
  getPromiseTeamSeasonStats(): Promise<any> {
    console.log('Season Service - GET leagueTable standings');
    const headers = new HttpHeaders().set('X-Auth-Token', SoccerService.API_TOKEN);
    return this.http.get('http://api.football-data.org//v1/competitions/455/leagueTable', {headers})
      .toPromise() // Convert 'Observable' HTTP response to 'Promise' object
      .then(this.getExtractedTeamSeasonStats) // Append callback function which is called if request was successful
      .catch(error => {
        // Return error promise with response error object
        throw Promise.reject(error);
      });
  }

  /**
   * Returns a promise object with 'TeamSeasonStat' array
   * if the HTTP-GET call to the ' football-data' API was successful
   */
  getPromiseTeam(id: number): Promise<any> {
    console.log('Team Service - GET team by ID');
    const headers = new HttpHeaders().set('X-Auth-Token', SoccerService.API_TOKEN);
    return this.http.get('http://api.football-data.org/v2/teams/' + id, {headers})
      .toPromise() // Convert 'Observable' HTTP response to 'Promise' object
      .then(res => {
        const team = this.getExtractedTeam(res);
        this.http.get('http://api.football-data.org/v1/teams/' + id, {headers})
          .toPromise() // Convert 'Observable' HTTP response to 'Promise' object
          .then(res2 => {
            team.crestURI = res2['crestUrl'];
          }).catch(error => {
            // Return error promise with response error object
            throw Promise.reject(error);
          });
        return team;
      }) // Append callback function which is called if request was successful
      .catch(error => {
        // Return error promise with response error object
        throw Promise.reject(error);
      });
  }

  private getExtractedTeamSeasonStats(res: Response) {
    const stats: TeamSeasonStat[] = [];
    console.log('GET leagueTable standings response:');
    console.log(res);

    for (let i = 0; i < Object.keys(res[SoccerService.JSON_STANDING_KEY]).length; i++) {
      const standing: any = res[SoccerService.JSON_STANDING_KEY][i];
      const teamURI: string = standing._links.team.href;
      const id: number = +teamURI.substr(teamURI.lastIndexOf('/') + 1, teamURI.length);

      const team = new Team(id, standing.teamName);
      team.crestURI = standing.crestURI;

      const stat = new TeamSeasonStat(team, standing);
      stats.push(stat);
    }
    return stats;
  }

  private getExtractedTeam(res: any) {
    const team = new Team(res.id, res.name);
    return team;
  }
}
