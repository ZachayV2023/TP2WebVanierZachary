import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.css']
})
export class ListVoyagesComponent implements OnInit {
  voyages: any[] = [];

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyageService.getVoyages().subscribe((data: any) => {
      this.voyages = data;
    });
  }
}