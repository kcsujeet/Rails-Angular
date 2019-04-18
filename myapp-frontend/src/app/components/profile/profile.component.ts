import { AdvertisementService } from 'src/app/services/advertisement.service';
import { CategoryService } from './../../services/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

ToastrService


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  modalRef: BsModalRef;
  categories;
  subcategories;
  subcategorySelectOptions;
  selectedSubcategoryId;
  selectedAdId;

  ads;
  isUpdateFormOpen;

  createAdForm=this.fb.group({
    category: [''],
    sub_category:[''],
    title:['', Validators.compose([Validators.required])],
    description:[''],
    price: [''],
    used_for: [''],
    price_negotiable: [''],
  })

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private advertisementService: AdvertisementService) {}

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
            this.subcategories = resp
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
      this.advertisementService.getAds().subscribe(resp =>{
        resp.sort(function (a, b) {
          return a.created_at - b.created_at;
        });
        this.ads = resp.reverse()
      })

  }

  createOrUpdateAd(){
    var formValue = this.createAdForm.value
    formValue.subcategory_id = this.selectedSubcategoryId
    const ad_details = {advertisement:formValue}
    if (!this.isUpdateFormOpen){
    this.advertisementService.createAd(ad_details).subscribe(resp=>{
      this.toastr.success('New Ad posted successfully')
      this.modalRef.hide()
      this.resetCreateAdForm()
      this.ads.unshift(resp)
    }, error =>{
      this.toastr.error('Error creating ad. Try again. ')
    })}
    else {
      this.advertisementService.updateAd(this.selectedAdId,ad_details).subscribe(resp =>{
        this.toastr.success('Ad Updated successfully')
        this.modalRef.hide()
        this.resetCreateAdForm()
        this.ads.splice(this.ads.indexOf(resp),1)
        this.ads.unshift(resp)
      },error =>{
        this.toastr.error('Error updating ad. Try again.')
      })
    }
  }

  openUpdateModal(template,ad){
    this.openModal(template);
    this.createAdForm.patchValue(ad)
    var category = this.categories.find(category => category.name == ad.category)
    this.subcategorySelectOptions = category.subcategory
    this.isUpdateFormOpen = true
    this.selectedAdId = ad.id
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  resetCreateAdForm(){
    this.createAdForm.reset()
    this.subcategorySelectOptions = null
    this.isUpdateFormOpen = false
  }

  onCategoryChange(categoryName){
    var category = this.categories.find(category => category.name === categoryName)
    this.subcategorySelectOptions = category.subcategory
  }

  onSubcategoryChange(subcategoryName){
    var subcategory = this.subcategories.find(subcategory => subcategory.name === subcategoryName)
    this.selectedSubcategoryId = subcategory.id
  }

  deleteAd(ad_id){
    this.advertisementService.deleteAd(ad_id).subscribe(resp =>{
      var deletedAd  = this.ads.indexOf(this.ads.find(ad => ad.id === ad_id))
      this.ads.splice(deletedAd,1)    
      this.toastr.success('Ad deleted succesfully')
    },error =>{
      this.toastr.error('Couldn\'t delete ad')
    })
  }
}
