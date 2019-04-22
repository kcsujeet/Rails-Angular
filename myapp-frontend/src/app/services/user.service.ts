import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true
};
const baseUrl = 'http://localhost:3000';
const profileUrl = 'http://localhost:3000/profiles'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //
  toggleisLoggedIn() {
    if (localStorage.getItem('loggedIn')) {
      this.isLoggedIn.next(true);
    } else this.isLoggedIn.next(false);
  }
  //login
  login(user): Observable<any> {
    return this.http.post<any>(`${baseUrl}/auth/login`, user, httpOptions);
  }

  //signup
  adduser(user): Observable<any> {
    return this.http.post<any>(`${baseUrl}/users`, user, httpOptions);
  }

  //logout
  logout(): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/auth/logout`, httpOptions)
  }

  //editProfile
  editProfile(profile_details): Observable<any> {
    const formData = new FormData()
    formData.append('profile_picture',profile_details.profile.profile_picture, profile_details.profile.profile_picture.name)
    formData.append('profile',JSON.stringify(profile_details.profile))
    return this.http.post<any>(`${profileUrl}`, formData, { withCredentials: true })
  }

  //getProfile
  getProfile():Observable<any>{
    return this.http.get<any>(`${profileUrl}`, {withCredentials:true})
  }
}
