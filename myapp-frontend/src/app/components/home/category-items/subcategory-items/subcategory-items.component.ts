import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-items',
  templateUrl: './subcategory-items.component.html',
  styleUrls: ['./subcategory-items.component.sass']
})
export class SubcategoryItemsComponent implements OnInit {

  category_id;
  ads;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params =>{
      this.category_id = params['category_id']
    })

    this.activatedRoute.params.subscribe(params =>{
      this.categoryService.getAdsInSubCategory(this.category_id,params['subcategory_id']).subscribe(resp =>{
        this.ads = resp
      }, error =>{
        this.toastr.error('Couldn\'t load ads. Try again.')
      })
    })
  }
}
