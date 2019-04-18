import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const categoryUrl = 'http://localhost:3000/categories';
const baseUrl = 'http://localhost:3000'
const httpOptions = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(categoryUrl, httpOptions);
  }

  getSubCategories(): Observable<any> {
    return this.http.get<any>(
      `${baseUrl}/all_subcategories`,
      httpOptions
    );
  }

  getAdsInCategory(category_id):Observable<any>{
    return this.http.get<any>(`${categoryUrl}/${category_id}`, httpOptions)
  }

  getAdsInSubCategory(category_id, subcategory_id):Observable<any>{
    return this.http.get<any>(`${categoryUrl}/${category_id}/subcategories/${subcategory_id}`, httpOptions)
  }
}
