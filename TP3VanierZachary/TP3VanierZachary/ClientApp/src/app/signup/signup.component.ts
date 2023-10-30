import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value).subscribe(
      (response: any) => {
        // Navigate to the login page or display success message
        console.log('Signup successful!', response);
      },
      (error: any) => {
        // Handle errors, like displaying a message to the user
        console.error('Signup failed:', error);
      }
    );
  }
}
