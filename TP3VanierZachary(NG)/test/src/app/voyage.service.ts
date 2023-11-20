import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private apiUrl = 'https://localhost:7011/api/Voyages';
  private voyageUpdated = new Subject<any[]>(); // Subject to broadcast updates
  private voyages: any[] = []; // Store the voyages

  constructor(private http: HttpClient) { }

  // Method to fetch existing voyages from the database
  getAllVoyages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((voyages) => {
        this.voyages = voyages;
        this.voyageUpdated.next([...this.voyages]);
      }),
      catchError(this.handleError)
    );
  }

  createVoyage(voyageData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
  
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
  
    return this.http.post(this.apiUrl, voyageData, { headers }).pipe(
      catchError(this.handleError),
      tap((newVoyage) => {
        this.voyages.push(newVoyage);
        this.voyageUpdated.next([...this.voyages]);
      })
    );
  }

  deleteVoyage(voyageId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/${voyageId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getVoyageUpdateListener(): Observable<any[]> {
    return this.voyageUpdated.asObservable();
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    console.error('Error occurred in VoyageService:', error); // Detailed error log
    return throwError('Error in VoyageService');
}

  shareVoyage(voyageId: number, userEmail: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    // The body of the request could include the ID of the voyage and the email to share with
    const body = { voyageId, userEmail };
  
    // This assumes you have a backend endpoint at /api/voyages/share to handle sharing
    return this.http.post(`${this.apiUrl}/share`, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }
}
