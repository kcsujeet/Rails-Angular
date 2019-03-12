import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'show-errors',
 template: `
 <ul class="list" *ngIf="shouldShowErrors()">
    <li style="color:red;font-size:80%" class="" *ngFor="let error of listOfErrors()">{{error}}</li>
  </ul>
 `,
})
export class ShowErrorsComponent {

 private static readonly errorMessages = {
   'required': () => 'This field is required',
   'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
   'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
   'max': (params) => 'The maximum value for this field is ' + params.max,
   'min': (params) => 'The minimum value for this field is ' + params.min,
   'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
   'formName': (params) => params.message,
   'uniqueField': (params) => params.message,
   'password': (params) => params.message,
   'confirmPassword': (params) => params.message,
   'ipRange': (params) => params.message,
   'hostname': (params) => params.message,
   'domainName': (params) => params.message,
   'invalidJson': () => 'Invalid Json',
   'port': (params) => params.message,
   'integer': (params) => params.message,
   'invalidUsername': () => 'Invalid Username',
   'communityString': (params) => params.message,
   'authorization': (params) => params.message,
   'encryption': (params) => params.message,
   'authorizationKey': (params) => params.message,
   'encryptionKey': (params) => params.message,
   'vCpassword' : (params) => params.message
 };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 @Input()
 private formSubmitted: boolean;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors &&
     ((this.control.dirty && this.control.touched) || this.control.touched || this.formSubmitted);
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

}