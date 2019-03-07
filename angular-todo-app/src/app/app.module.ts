import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import {HttpClientModule} from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component'

import {FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component'

import {UserService} from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
