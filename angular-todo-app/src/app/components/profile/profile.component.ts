import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  authenticated: boolean = false;
  activeUser: string;
  paramsUsername: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.toggleloginStatus();
    if (localStorage.getItem('user_token') && localStorage.getItem('username'))
      this.authenticated = true;
    else this.authenticated = false;

    if (this.authenticated) {
      this.route.params.subscribe(params => {
        this.paramsUsername = params['username'];
        console.log(this.paramsUsername);
      });
      this.userService.getUser(this.paramsUsername).subscribe(user => {
        this.activeUser = user;
      });
    } else this.router.navigate(['/login']);
  }
}
