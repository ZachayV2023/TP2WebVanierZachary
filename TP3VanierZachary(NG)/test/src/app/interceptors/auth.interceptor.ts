import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(/* Dependencies if any */) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Retrieve the token from storage or a service
    const authToken = localStorage.getItem('token');

    // Clone the request and add the authorization header if the token exists
    const authRequest = authToken 
      ? request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } })
      : request;

    // Send the newly created request
    return next.handle(authRequest);
  }
}
