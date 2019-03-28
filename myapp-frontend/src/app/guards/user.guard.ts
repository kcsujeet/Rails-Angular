import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanActivateChild {
  isAuthenticated: boolean;
  constructor(private userService: UserService, private router: Router) {}

  isloggedIn() {
    this.userService.toggleisLoggedIn();
    this.userService.isLoggedIn.subscribe(value => {
      this.isAuthenticated = value;
    });
  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean| UrlTree {
    this.isloggedIn();
    if (this.isAuthenticated) {
      return true;
    }
    return this.router.parseUrl('/login');
  }

  canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):| Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean| UrlTree {
    return true;
  }
}
