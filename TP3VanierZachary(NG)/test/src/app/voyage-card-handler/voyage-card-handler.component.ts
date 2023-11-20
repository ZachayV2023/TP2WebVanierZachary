import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage-card-handler',
  templateUrl: './voyage-card-handler.component.html',
  styleUrls: ['./voyage-card-handler.component.css']
})
export class VoyageCardHandlerComponent implements OnInit {
  voyages: any[] = [];
  showShareOverlay: boolean = false;
  showDeleteConfirmation: boolean = false;
  selectedVoyageId: number | null = null;
  emailToShare: string = '';

  
  constructor(private voyageService: VoyageService, private router: Router) { } // Inject the Router

  ngOnInit(): void {
    this.fetchVoyages();
  }

  fetchVoyages(): void {
    this.voyageService.getAllVoyages().subscribe(data => {
      this.voyages = data;
    }, error => {
      console.error('Error fetching voyages', error);
    });
  }

  confirmDelete(voyageId: number): void {
    this.selectedVoyageId = voyageId;
    this.showDeleteConfirmation = true;
  }

  deleteVoyage(): void {
    if (this.selectedVoyageId !== null) {
      this.voyageService.deleteVoyage(this.selectedVoyageId).subscribe(() => {
        this.voyages = this.voyages.filter(voyage => voyage.id !== this.selectedVoyageId);
        this.closeOverlay();
      }, error => {
        console.error('Error deleting voyage', error);
      });
    }
  }

  showShareDialog(voyageId: number): void {
    this.selectedVoyageId = voyageId;
    this.showShareOverlay = true;
  }

  navigateToVoyageDetail(voyageId: number): void {
    // Navigate to the voyage-detail route with the id as a parameter
    this.router.navigate(['/voyage-detail', voyageId]);
  }

  shareVoyage(): void {
    if (this.selectedVoyageId !== null) {
      // Implement sharing logic here
      console.log(`Sharing voyage ${this.selectedVoyageId} with ${this.emailToShare}`);
      // Call API to share voyage, and then...
      this.closeOverlay();
    }
  }

  closeOverlay(): void {
    this.showShareOverlay = false;
    this.showDeleteConfirmation = false;
    this.selectedVoyageId = null;
    this.emailToShare = '';
  }
}
