import {Team} from '../../model/team';
import {TeamSeasonStat} from '../../model/team-season-stat';
import {SeasonService} from '../../services/season.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-standings',
  templateUrl: './soccer-standings.component.html',
  styleUrls: ['./soccer-standings.component.css']
})
export class SoccerStandingsComponent implements OnInit {

  stats: TeamSeasonStat[] = [];
  constructor(private seasonService: SeasonService) {}

  ngOnInit() {
    const useMockObjects = false;
    if (useMockObjects) {
      this.setMockObjects();
    } else {
      this.stats = this.seasonService.getTeamSeasonStats();
    }
    console.log('stats');
    console.log(this.stats);
  }

  setMockObjects() {
    const teamsInfo: {teamName: string}[] = [{'teamName': 'barca'}, {'teamName': 'athletico'}];
    const standingsInfo: {position: number, points: number, goalDifference: number}[] = [
      {'position': 1, 'points': 10, 'goalDifference': 20},
      {'position': 2, 'points': 5, 'goalDifference': 10}
    ];
    this.stats.push(new TeamSeasonStat(new Team(1, teamsInfo[0]), standingsInfo[0]));
    this.stats.push(new TeamSeasonStat(new Team(2, teamsInfo[1]), standingsInfo[1]));
  }
}
