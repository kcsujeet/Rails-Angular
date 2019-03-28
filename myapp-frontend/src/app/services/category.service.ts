import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const categoryUrl = 'http://localhost:3000/categories'
const httpOptions  = {header:{'Content-Type': 'application/json'}, withCredentials:true}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<any>{
    return this.http.get<any>(categoryUrl, httpOptions)
  }
}
