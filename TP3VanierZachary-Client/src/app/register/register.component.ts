import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      // Vos champs de formulaire ici
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        // Naviguer vers la page de connexion
      },
      (error) => {
        // Gérer les erreurs
      }
    );
  }
}
