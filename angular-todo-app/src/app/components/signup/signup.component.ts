import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import {Router} from "@angular/router"

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  name;
  email;
  password;
  password_confirmation;
  username;
  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("user_token") && localStorage.getItem("username"))
    this.router.navigate(["/profile", localStorage.getItem("username")]);
  }

  onUserSubmit() {
    const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      
    };
    console.log(user);
    this.userService.addUser(user).subscribe(user => {
      console.log(user);
    });
  }
}
