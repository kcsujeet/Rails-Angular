import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:{
    'Content-Type':'application/json'
},withCredentials:true}

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  adUrl = 'http://localhost:3000/advertisements'
  constructor(private http: HttpClient) { }

  getAds():Observable<any>{
    return this.http.get<any>(this.adUrl,httpOptions)
  }

  getAllAds():Observable<any>{
    return this.http.get<any>('http://localhost:3000/all_advertisements',httpOptions)
  }

  createAd(ad_details):Observable<any>{
    return this.http.post<any>(this.adUrl,ad_details,httpOptions)
  }

  deleteAd(ad_id):Observable<any>{
    return this.http.delete<any>(`${this.adUrl}/${ad_id}`,httpOptions)
  }

  updateAd(ad_id,ad_details):Observable<any>{
    return this.http.patch<any>(`${this.adUrl}/${ad_id}`,ad_details, httpOptions)
  }
}
