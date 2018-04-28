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

  constructor(team: Team, teamStandingInfos: any) {
    this.team = team;
    this.position = teamStandingInfos.position;
    this.numMatches = teamStandingInfos.playedGames;
    this.points = teamStandingInfos.points;
    this.wins = teamStandingInfos.wins;
    this.losses = teamStandingInfos.losses;
    this.draws = teamStandingInfos.draws;
    this.goalDifference = teamStandingInfos.goalDifference;
  }
}
