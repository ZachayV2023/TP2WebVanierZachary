import { Component } from '@angular/core';
import { VoyageService } from '../voyage.service';

@Component({
    selector: 'app-voyage-create',
    templateUrl: './voyage-create.component.html',
    styleUrls: ['./voyage-create.component.css']
})
export class VoyageCreateComponent {
    selectedFile: File | null = null;
    voyage = { title: '', description: '', isPublic: false };

    constructor(private voyageService: VoyageService) {}

    onFileSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            this.selectedFile = file;
        }
    }

    onSubmit() {
        if (!this.voyage.title || !this.voyage.description) {
            console.error('Title and description are required');
            return;
        }

        const formData = new FormData();
        if (this.selectedFile) {
            formData.append('image', this.selectedFile, this.selectedFile.name);
        }
        formData.append('title', this.voyage.title);
        formData.append('description', this.voyage.description);
        formData.append('isPublic', this.voyage.isPublic ? 'true' : 'false');

        this.voyageService.createVoyage(formData).subscribe(
            response => console.log('Voyage created', response),
            error => console.error('Error creating voyage:', error)
        );
    }
}