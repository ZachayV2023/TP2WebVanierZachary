// voyage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http: HttpClient) { }

  getVoyages(): Observable<any> {
    return this.http.get('https://localhost:5001/api/voyages');
  }

  addVoyage(formData: any): Observable<any> { 
    return this.http.post('https://localhost:5001/api/voyages', formData); 
  }

  // Autres méthodes pour éditer, supprimer des voyages
}
