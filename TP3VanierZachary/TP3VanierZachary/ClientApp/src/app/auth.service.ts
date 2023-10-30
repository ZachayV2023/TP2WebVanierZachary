import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/auth';  // replace with your API endpoint

  constructor(private http: HttpClient) { }

  signup(userData: any) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
}
