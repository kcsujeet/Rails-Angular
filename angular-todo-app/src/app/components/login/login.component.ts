import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private userSerive: UserService, private router: Router) {}

  ngOnInit() {
    this.userSerive.toggleloginStatus()

    if (localStorage.getItem("user_token") && localStorage.getItem("username"))
    this.router.navigate(["/profile", localStorage.getItem("username")]);
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    this.userSerive.loginUser(user).subscribe(user => {
      localStorage.setItem("user_token", user.token);
      localStorage.setItem("username", user.username);
      this.userSerive.toggleloginStatus()
      this.router.navigate(["/profile", user.username]);
    });
  }
}
