import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../../services/user.service'
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signupForm = this._fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])],
    password_confirmation: ['', Validators.compose([Validators.required])]
  })

  constructor(private _fb:FormBuilder, 
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  signup(){
    const user = this.signupForm.value
    console.log(user)
    this.userService.adduser(user).subscribe(res =>{
      localStorage.setItem('loggedIn', 'true')
      this.userService.toggleisLoggedIn()
      this.toastr.success('Signed up successfully','Success');
      this.router.navigate([''])
    })
  } 
}
