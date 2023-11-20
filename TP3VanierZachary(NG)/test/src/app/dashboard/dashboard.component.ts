import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-voyage-create></app-voyage-create>
    <app-voyage-card-handler></app-voyage-card-handler>
  `,
  styles: []
})
export class DashboardComponent {}
