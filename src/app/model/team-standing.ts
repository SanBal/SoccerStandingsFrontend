import { Team } from './team';
export class TeamStanding {
  team: Team;
  position: number;
  points: number;
  goalDifference: number;

  constructor(teamStandingInfo: any) {
    this.team = teamStandingInfo.team;
    this.position = teamStandingInfo.position;
    this.points = teamStandingInfo.points;
    this.goalDifference = teamStandingInfo.goalDifference;
  }
}
