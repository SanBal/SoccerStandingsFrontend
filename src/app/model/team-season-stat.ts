import { Team } from './team';
export class TeamSeasonStat {
  team: Team;
  position: number;
  points: number;
  goalDifference: number;

  constructor(team: Team, teamStandingInfo: any) {
    this.team = team;
    this.position = teamStandingInfo.position;
    this.points = teamStandingInfo.points;
    this.goalDifference = teamStandingInfo.goalDifference;
  }
}
