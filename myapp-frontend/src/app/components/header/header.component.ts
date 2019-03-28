import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
    this.userService.toggleisLoggedIn();
  }

  logout() {
    this.userService.logout().subscribe(
      resp => {
        localStorage.removeItem('loggedIn');
        this.toastr.success('Logged out sucessfully');
        this.userService.toggleisLoggedIn();
        this.router.navigate(['/']);
      },
      error => {
        this.toastr.warning("Couldn't logout.");
      }
    );
  }
}
