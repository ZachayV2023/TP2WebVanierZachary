import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5177/api/Auth'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, email, password }).pipe(
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password }).pipe(
      tap(response => this.setSession(response.token)),
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    // Also clear any other stored data related to the current user session here
    // Redirect to login or home page if needed
  }

  private setSession(authToken: string): void {
    localStorage.setItem('authToken', authToken);
    // Here you can also set the token expiration time if your server provides that information
  }

  private handleError(error: any) {
    // Optionally transform error for user consumption
    console.error('An error occurred:', error.error.message);
    // Let the app keep running by returning an empty result or throwing an error
    return throwError(error);
  }
}
