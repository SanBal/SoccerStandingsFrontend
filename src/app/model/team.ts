export class Team {
  id: number;
  name: string;
  crestURI: string;

  constructor(id: number, teamInfos: any) {
    this.id = id;
    this.name = teamInfos.teamName;
    this.crestURI = teamInfos.crestURI;
  }
}
