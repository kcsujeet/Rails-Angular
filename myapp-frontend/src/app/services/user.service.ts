import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: {
    'content-type': 'application/json',
  }, 
  withCredentials:true
};
const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //
  toggleisLoggedIn() {
    if (localStorage.getItem('loggedIn')) {
      this.isLoggedIn.next(true);
    } else this.isLoggedIn.next(false);
  }
  //login
  login(user): Observable<any> {
    return this.http.post<any>(`${baseUrl}/auth/login`, user,httpOptions);
  }

  //signup
  adduser(user): Observable<any> {
    return this.http.post<any>(`${baseUrl}/users`, user, httpOptions);
  }

  //logout
  logout():Observable<any>{
    return this.http.delete<any>(`${baseUrl}/auth/logout`, httpOptions)
  }
}
