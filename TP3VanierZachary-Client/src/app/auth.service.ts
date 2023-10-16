import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  
  constructor(private http: HttpClient) { }

  register(formData: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/users/register', formData);
  }
}  