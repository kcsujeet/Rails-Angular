import { AdvertisementService } from 'src/app/services/advertisement.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  advertisements;
  constructor(private advertisementService: AdvertisementService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.advertisementService.getAllAds().subscribe(resp =>{
      this.advertisements  = resp
    },error =>{
      this.toastr.error('Couldn\'t load ads. Please try again.')
    })
  }
}
