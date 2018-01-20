import { Team } from '../../model/team';
import { TeamSeasonStat } from '../../model/team-season-stat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-standings',
  templateUrl: './soccer-standings.component.html',
  styleUrls: ['./soccer-standings.component.css']
})
export class SoccerStandingsComponent implements OnInit {

  standings: TeamSeasonStat [] = [];
  constructor() { }

  ngOnInit() {
    const teamsInfo: { id: number, name: string }[] = [{ 'id': 1, 'name': 'barca'}, { 'id': 2, 'name': 'athletico'} ];
    const standingsInfo: { team: Team, position: number, points: number, goalDifference: number }[] = [
    { 'team': new Team(teamsInfo[0]), 'position': 1, 'points': 10, 'goalDifference': 20 },
    { 'team': new Team(teamsInfo[1]), 'position': 2, 'points': 5, 'goalDifference': 10 }
    ];
    this.standings.push(new TeamSeasonStat(standingsInfo[0]));
    this.standings.push(new TeamSeasonStat(standingsInfo[1]));
  }
}
