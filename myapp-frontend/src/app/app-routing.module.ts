import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileRootComponent } from './components/profile/profile-root/profile-root.component';
import { SubcategoryItemsComponent } from './components/home/category-items/subcategory-items/subcategory-items.component';
import { AllItemsComponent } from './components/home/category-items/all-items/all-items.component';
import { MainComponent } from './components/home/main/main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component'

import { UserGuard } from './guards/user.guard'
import { CategoryItemsComponent } from './components/home/category-items/category-items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path:'', component: MainComponent },
      {
        path:'category/:category_id',
        component: CategoryItemsComponent,
        children: [
          {path:'', component: AllItemsComponent },
          {path: ':subcategory_id', component: SubcategoryItemsComponent}
        ]
      }
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {path:'',component: ProfileRootComponent},
      {path:'edit', component: ProfileEditComponent}
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
