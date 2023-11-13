import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Handle successful login, store the token, etc.
        localStorage.setItem('authToken', response.token);
        // Redirect to the desired route after login
      },
      error: (err) => {
        // Handle error
        console.error('Login error:', err);
      }
    });
  }
}
