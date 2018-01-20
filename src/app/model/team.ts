export class Team {
  id: number;
  name: string;

  constructor(teamInfo: any) {
    this.id = teamInfo.id;
    this.name = teamInfo.name;
  }
}
