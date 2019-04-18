import { AdvertisementService } from 'src/app/services/advertisement.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories;
  subcategories;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private advertisementService: AdvertisementService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      resp => {
        this.categories = resp;
        this.categories.forEach(category => {
          category.subcategory = [];
          category.iscollapsed = false;
        });

        this.categoryService.getSubCategories().subscribe(
          resp => {
            resp.forEach(subcategory => {
              this.categories.forEach(category => {
                if (category.id === subcategory.category_id) {
                  category.subcategory.push(subcategory);
                }
              });
            });
          },
          error => {
            this.toastr.error(
              "Couldn't load subcategories.",
              'Please Try Again.'
            );
          }
        );
      },
      error => {
        this.toastr.error("Couldn't load categories.", 'Please Try Again.');
      }
    );
  }
}
