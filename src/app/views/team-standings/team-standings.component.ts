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
    const teamInfo: { id: number, name: string } = { 'id': 1, 'name': 'barca'};
    const standingsInfo: { team: Team, position: number, points: number, goalDifference: number }[] = [
    { 'team': new Team(teamInfo), 'position': 0, 'points': 10, 'goalDifference': 20 }
    ];
    this.standings.push(new TeamStanding(standingsInfo[0]));
  }
}
