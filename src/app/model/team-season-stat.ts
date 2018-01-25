import { Team } from './team';
export class TeamSeasonStat {
  team: Team;
  position: number;
  numMatches: number;
  points: number;
  wins: number;
  losses: number;
  draws: number;
  goalDifference: number;

  constructor(team: Team, teamStandingInfo: any) {
    this.team = team;
    this.position = teamStandingInfo.position;
    this.numMatches = teamStandingInfo.playedGames;
    this.points = teamStandingInfo.points;
    this.wins = teamStandingInfo.wins;
    this.losses = teamStandingInfo.losses;
    this.draws = teamStandingInfo.draws;
    this.goalDifference = teamStandingInfo.goalDifference;
  }
}
