import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    console.log('Attempting to register with', {
      UserName: this.username,
      Email: this.email,
      Password: this.password,
      PasswordConfirm: this.confirmPassword
    });

    if (this.password === this.confirmPassword) {
      this.authService.register({ 
        UserName: this.username, 
        Email: this.email, 
        Password: this.password, 
        PasswordConfirm: this.confirmPassword 
      }).subscribe(
        response => {
          console.log('Registration successful', response);
          // TODO: Handle successful registration
        },
        (error: HttpErrorResponse) => {
          console.error('Registration failed', error.error);
          // TODO: Handle error
        }
      );
    } else {
      console.error('Passwords do not match');
      // TODO: Inform the user that the passwords do not match
    }
  }
}
