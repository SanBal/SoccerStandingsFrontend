export class Team {
  id: number;
  name: string;
  crestURI: string;

  constructor(id: number, teamInfo: any) {
    this.id = id;
    this.name = teamInfo.teamName;
    this.crestURI = teamInfo.crestURI;
  }
}
