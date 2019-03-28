import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  createAdForm=this.fb.group({
    title:['', Validators.compose([Validators.required])],
    description:['']
  })
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  createNewAd(){
    const adContents=this.createAdForm.value
    console.log(adContents)
  }
}
