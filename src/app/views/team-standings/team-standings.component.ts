import { Team } from '../../model/team';
import { TeamStanding } from '../../model/team-standing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {

  standings: TeamStanding [] = [];
  constructor() { }

  ngOnInit() {
    const teamsInfo: { id: number, name: string }[] = [{ 'id': 1, 'name': 'barca'}, { 'id': 2, 'name': 'athletico'} ];
    const standingsInfo: { team: Team, position: number, points: number, goalDifference: number }[] = [
    { 'team': new Team(teamsInfo[0]), 'position': 1, 'points': 10, 'goalDifference': 20 },
    { 'team': new Team(teamsInfo[1]), 'position': 2, 'points': 5, 'goalDifference': 10 }
    ];
    this.standings.push(new TeamStanding(standingsInfo[0]));
    this.standings.push(new TeamStanding(standingsInfo[1]));
  }
}
