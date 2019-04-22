import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  fileToUpload

  profileForm = this.fb.group({
    address: [''],
    phone_number: [''],
    profile_picture: ['']
  })

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  editProfile(){
    const profile = this.profileForm.value
    const profile_details = {profile: profile}
    this.userService.editProfile(profile_details).subscribe(resp =>{
      this.toastr.success('Profile edited sucessfully')
    })
  }

  onChange(files) {
    this.profileForm.controls.profile_picture.setValue(files.item(0))
    // this.userService.upload_profile_picture(files.item(0)).subscribe(resp =>{
    //   console.log('uploaded')
    // })
  }
}
