import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-voyage-detail',
  templateUrl: './voyage-detail.component.html',
  styleUrls: ['./voyage-detail.component.css']
})
export class VoyageDetailComponent implements OnInit {
  @ViewChild('searchBox') searchBox!: ElementRef;

  map: any;
  voyageTitle: string = '';
  locations: any[] = []; // Replace 'any' with your 'Location' type

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const voyageId = this.route.snapshot.paramMap.get('id');
    if (voyageId) {
      this.loadVoyageDetails(voyageId);
    } else {
      // Handle the null case
    }

    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  onVerifyLocation(query: string): void {
    // Use Google Maps Geocoding API or Places API to verify the location
    // Example:
    // const geocoder = new google.maps.Geocoder();
    // geocoder.geocode({ 'address': query }, (results, status) => {
    //   if (status == google.maps.GeocoderStatus.OK) {
    //     this.map.setCenter(results[0].geometry.location);
    //   } else {
    //     // Handle the error
    //   }
    // });
  }

  loadVoyageDetails(voyageId: string): void {
    // Fetch the voyage details using the id
    // ...
  }

  navigateToVoyageDetail(locationId: string): void {
    this.router.navigate(['/some-detail-page', locationId]);
  }

  triggerPhotoUpload(): void {
    // Logic to trigger photo upload
  }

  // Additional methods...
}
