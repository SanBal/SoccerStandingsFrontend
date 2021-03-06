import {Team} from '../../../model/team';
import {TeamSeasonStat} from '../../../model/team-season-stat';
import {SoccerService} from '../../../services/soccer.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-standings',
  templateUrl: './soccer-standings.component.html',
  styleUrls: ['./soccer-standings.component.css']
})
export class SoccerStandingsComponent implements OnInit {

  loading = true;
  teamSeasonStats: TeamSeasonStat[] = [];
  constructor(private seasonService: SoccerService, private router: Router) {}

  ngOnInit() {
    const useMockObjects = false;
    if (useMockObjects) {
      this.setMockObjects();
    } else {

      // Consume promise of Season Service
      this.seasonService.getPromiseTeamSeasonStats()
        .then(teamSeasonStats => {
          this.teamSeasonStats = teamSeasonStats;
          console.log('TeamSeasonStats:');
          console.log(this.teamSeasonStats);
          this.loading = false;
        }).catch(error => {
          console.log(error);
          setTimeout(_ => {
            this.router.navigate(['page-not-found']);
          }, 5000);
        });
    }
  }

  setMockObjects() {
    const teamsInfo: {teamName: string}[] = [{'teamName': 'barca'}, {'teamName': 'athletico'}];
    const standingsInfo: {position: number, points: number, goalDifference: number}[] = [
      {'position': 1, 'points': 10, 'goalDifference': 20},
      {'position': 2, 'points': 5, 'goalDifference': 10}
    ];
    this.teamSeasonStats.push(new TeamSeasonStat(new Team(1, teamsInfo[0].teamName), standingsInfo[0]));
    this.teamSeasonStats.push(new TeamSeasonStat(new Team(2, teamsInfo[1].teamName), standingsInfo[1]));
  }
}
