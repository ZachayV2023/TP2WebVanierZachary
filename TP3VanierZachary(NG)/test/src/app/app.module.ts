import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { VoyageCreateComponent } from './voyage-create/voyage-create.component';
import { VoyageCardHandlerComponent } from './voyage-card-handler/voyage-card-handler.component';
import { VoyageDetailComponent } from './voyage-detail/voyage-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    VoyageCreateComponent,
    VoyageCardHandlerComponent,
    VoyageDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
