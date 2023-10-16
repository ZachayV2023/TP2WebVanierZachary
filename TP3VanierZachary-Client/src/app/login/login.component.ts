import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Ajoutez cette ligne

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}  // Injectez Router ici

  // Méthode pour gérer le clic sur le bouton "Enregistrer"
  register() {
    this.router.navigate(['/register']);
  }

}
