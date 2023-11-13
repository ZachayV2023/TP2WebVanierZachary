import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: '', redirectTo: '/travels', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'travels',
    component: TravelListComponent,
    canActivate: [AuthGuard] // Protect this route
  },
  {
    path: 'travels/create',
    component: TravelCreateComponent,
    canActivate: [AuthGuard] // Protect this route
  },
  {
    path: 'travels/:id',
    component: TravelDetailComponent,
    canActivate: [AuthGuard] // Protect this route
  },
  {
    path: 'travels/edit/:id',
    component: TravelEditComponent,
    canActivate: [AuthGuard] // Protect this route
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
