import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn$.pipe(
      take(1),
      map(isLoggedIn => {
        if (isLoggedIn && (state.url === '/login' || state.url === '/register')) {
          this.router.navigate(['/dashboard']); // Adjust as per your default route
          return false;
        } else if (!isLoggedIn && state.url !== '/login' && state.url !== '/register') {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
