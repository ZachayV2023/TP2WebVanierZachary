import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
}

interface RegisterData {
  UserName: string;
  Email: string;
  Password: string;
  PasswordConfirm: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7011/api/Account';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Login`, { UserName: username, Password: password })
      .pipe(
        tap(res => {
          if (res && res.token) {
            localStorage.setItem('token', res.token);
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  register(registerData: RegisterData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Register`, registerData);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
