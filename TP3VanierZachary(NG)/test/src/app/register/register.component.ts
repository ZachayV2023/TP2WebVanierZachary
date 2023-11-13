import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Add this line

  constructor(private authService: AuthService) {}

  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      // Handle the password mismatch case
      console.error('Passwords do not match');
      return;
    }
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (response) => {
        // Handle successful registration
        // Redirect to login or other actions
      },
      error: (err) => {
        // Handle error
        console.error('Registration error:', err);
      }
    });
  }
}
