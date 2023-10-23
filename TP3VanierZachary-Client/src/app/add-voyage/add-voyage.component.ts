import { Component } from '@angular/core';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent {
  imageURL: string = '';
  imageToCopy: string = '';

  onImageChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (e.target) {
          this.imageURL = e.target.result as string;
          this.imageToCopy = `${this.imageURL}?size=300`;  // Assuming this could be manipulated on the backend
        }
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  // This function is for demonstration. In a real application, you would use clipboard API or similar to copy.
  copyImageURL(): void {
    console.log('URL to be copied:', this.imageToCopy);
  }
}
