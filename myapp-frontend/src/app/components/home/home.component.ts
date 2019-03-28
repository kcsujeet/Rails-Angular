import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { load } from '@angular/core/src/render3';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories;
  constructor(private categoryService: CategoryService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(resp => {
      this.categories = resp
    }, error => {
      this.toastr.error('Couldn\'t Load Ads.','Please Try Again.')
    });
  }
}
