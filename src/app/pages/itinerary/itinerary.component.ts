import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Itinerary } from '../../shared/models/itinerary.model';
import { TourService } from '../../shared/services/tour.service';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  tour: Itinerary | undefined;
  activeTab: string = 'itinerary';

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tour = this.tourService.getTourById(id);
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}