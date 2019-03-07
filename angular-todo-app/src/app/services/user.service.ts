import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  ///

  usersUrl = "http://localhost:3000/users";

  loginUrl = "http://localhost:3000/auth/login";


  loginStatusChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {  

  }

  //
  toggleloginStatus() {
    if (localStorage.getItem("user_token") && localStorage.getItem("username"))
      this.loginStatusChange.next(true);
    else this.loginStatusChange.next(false);
  }

  //addUser
  addUser(user): Observable<any> {
    return this.http.post<any>(this.usersUrl, user, httpOptions);
  }

  //login
  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user, httpOptions);
  }


  //getuserprofile
  getUser(username): Observable<any> {
    const url = `${this.usersUrl}/${username}`;
    return this.http.get<any>(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user_token")
      }
    });
  }

}
