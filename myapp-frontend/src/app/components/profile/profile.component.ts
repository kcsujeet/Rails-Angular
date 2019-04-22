import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile
  constructor(private userService: UserService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getProfile().subscribe( resp =>{
      this.profile = resp
    }, error =>{
      this.toastr.error('Error loading profile.')
    })
  }
}
