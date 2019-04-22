import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import {UserService} from '../../services/user.service'
import {ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rightPanelActive = false;

  loginForm = this._fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['']
  })

  constructor(private _fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  activateRightPanel(){
    this.rightPanelActive = true
  }

  deactivateRightPanel(){
    this.rightPanelActive = false
  }

  login(){
    const user = this.loginForm.value
    this.userService.login(user).subscribe(resp =>{
      localStorage.setItem('loggedIn', 'true')
      this.userService.toggleisLoggedIn()
      this.loginForm.reset()
      this.toastr.success('Logged in successfully','Success');
      this.router.navigate([''])
    },
    error =>{
      this.loginForm.reset()
      this.toastr.error('Could not login', 'Try again')
    }
    )
  }
}
