// add-voyage.component.ts
import { Component } from '@angular/core';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent {
  
  constructor(private voyageService: VoyageService) {}

  addVoyage(formData: any) {
    this.voyageService.addVoyage(formData).subscribe(
      (_) => {  // Remplacé 'response' par '_'
        // Logique après l'ajout, par exemple rediriger l'utilisateur
      },
      (_) => {  // Remplacé 'error' par '_'
        // Gérer les erreurs, par exemple afficher un message d'erreur
      }
    );
  }
}
