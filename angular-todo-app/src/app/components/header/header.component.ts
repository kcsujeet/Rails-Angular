import { Component, OnInit,Input } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isAuthenticated
  username: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {    
  }

  ngOnInit() {
    this.userService.toggleloginStatus()
    this.userService.loginStatusChange.subscribe(value => {
      this.isAuthenticated = value
      this.username = localStorage.getItem('username')
    });
  }

  logout() {
    localStorage.removeItem("user_token");
    localStorage.removeItem("username");
    this.userService.toggleloginStatus()
    this.router.navigate(['/login']);

  }
}
