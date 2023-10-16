import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // HTTP_INTERCEPTORS ajouté
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';  // Import de AuthInterceptor
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { EditVoyageComponent } from './edit-voyage/edit-voyage.component';
import { DeleteVoyageComponent } from './delete-voyage/delete-voyage.component';
import { VoyageService } from './voyage.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';  // Importez VoyageService

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListVoyagesComponent,
    AddVoyageComponent,
    EditVoyageComponent,
    DeleteVoyageComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,  // Ajout d'intercepteur
      useClass: AuthInterceptor,  // Classe de l'intercepteur
      multi: true                 // Autoriser plusieurs intercepteurs
    },
    VoyageService,  // Ajoutez VoyageService ici
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
