import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CollapseModule, ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { ItemAdComponent } from './components/advertisements/item-ad/item-ad.component';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { CategoryItemsComponent } from './components/home/category-items/category-items.component';
import { MainComponent } from './components/home/main/main.component';
import { AllItemsComponent } from './components/home/category-items/all-items/all-items.component';
import { SubcategoryItemsComponent } from './components/home/category-items/subcategory-items/subcategory-items.component';
import { ProfileRootComponent } from './components/profile/profile-root/profile-root.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ProfileComponent,
    ItemAdComponent,
    CategoryItemsComponent,
    MainComponent,
    AllItemsComponent,
    SubcategoryItemsComponent,
    ProfileRootComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({timeOut: 3000,closeButton: true,positionClass: 'toast-bottom-right'}), // ToastrModule added
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    NgFlashMessagesModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
