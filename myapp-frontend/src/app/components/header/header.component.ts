import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';


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
    private toastr: ToastrService,
    private ngFlashMessageService: NgFlashMessageService,
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
        this.router.navigate(['/login']);
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["Your session has expired. Please login."], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });
      },
      error => {
        this.router.navigate(['/login'])
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["Your session has expired. Please login."], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });
      }
    );
  }
}
