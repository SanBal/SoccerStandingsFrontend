import {User} from '../../../model/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }

  submit(username, password) {
    const user = new User(username, password);
    this.authService.loginUser(user)
      .then(resp => {
        if (resp.status === 200) {
          setTimeout(_ => {
            this.router.navigate(['home']);
          }, 1000);
        }
      })
      .catch(error => {
        console.log('Login Error');
      });
  }
}
