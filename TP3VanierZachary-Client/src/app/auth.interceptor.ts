import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Récupération du token depuis le stockage local ou autre
    const token: string = localStorage.getItem('token') || '';

    // Clonage de la requête et ajout de l'en-tête d'autorisation
    const modifiedReq = request.clone({ 
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    // Passage de la requête modifiée à la suite du pipeline
    return next.handle(modifiedReq);
  }
}
