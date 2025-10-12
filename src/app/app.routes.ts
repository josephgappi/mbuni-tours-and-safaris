import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { PlanYourTripComponent } from './pages/plan-your-trip/plan-your-trip.component';
import { ThingsToDoComponent } from './pages/things-to-do/things-to-do.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';

export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'gallery',
    component: GalleryComponent},
  { path: 'about', component: AboutComponent },
  { path: 'plan-your-trip', component: PlanYourTripComponent },
  { path: 'itinerary/:id', component: ItineraryComponent },
  { path: 'things-to-do', component: ThingsToDoComponent },
  { path: '**', redirectTo: '' }
  
  // Add more routes here as needed
];
