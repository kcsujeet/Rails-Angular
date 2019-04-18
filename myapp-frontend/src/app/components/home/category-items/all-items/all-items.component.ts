import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.sass']
})
export class AllItemsComponent implements OnInit {
  categoryAds
  constructor(private activatedRoute:ActivatedRoute,
              private categoryService:CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.categoryService.getAdsInCategory(params['category_id']).subscribe(resp =>{
        this.categoryAds = resp
      })
    })
  }

}
