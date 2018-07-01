import {Team} from '../../../model/team';
import {SoccerService} from '../../../services/soccer.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-infos',
  templateUrl: './team-infos.component.html',
  styleUrls: ['./team-infos.component.css']
})
export class TeamInfosComponent implements OnInit {

  loading = true;
  public team: Team;
  constructor(private route: ActivatedRoute, private seasonService: SoccerService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seasonService.getPromiseTeam(id)
      .then(team => {
        this.team = team;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }
}
