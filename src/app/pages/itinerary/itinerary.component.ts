import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Itinerary } from '../../shared/models/itinerary.model';
import { TourService } from '../../shared/services/tour.service';
import { BookingService } from '../../shared/services/booking.service';
import { HttpClient } from '@angular/common/http';

interface BookingResponse {
  success: boolean;
  message?: string;
  bookingId?: string;
}

interface ApiError {
  message: string;
  status?: number;
  error?: any;
}

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  tour: Itinerary | undefined;
  activeTab: string = 'itinerary';
  bookingForm: FormGroup;
  showBookingForm: boolean = false;
  bookingSuccess: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService,
    @Inject(BookingService) private bookingService: BookingService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      numberOfPeople: [1, [Validators.required, Validators.min(1)]],
      specialRequests: [''],
      tourId: [''],
      tourTitle: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.tourService.getTourById(id).subscribe({
        next: (tour) => {
          this.tour = tour;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading tour:', error);
          this.errorMessage = 'Failed to load tour details. Please try again later.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'No tour ID provided';
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleBookingForm(): void {
    this.showBookingForm = !this.showBookingForm;
    if (this.showBookingForm && this.tour) {
      this.bookingForm.patchValue({
        tourId: this.tour.id,
        tourTitle: this.tour.title
      });
    }
  }

  onSubmitBooking(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.bookingService.submitBooking(this.bookingForm.value).subscribe({
      next: (response: BookingResponse) => {
        this.bookingSuccess = true;
        this.showBookingForm = false;
        this.bookingForm.reset({
          numberOfPeople: 1
        });
        this.isLoading = false;
      },
      error: (error: ApiError) => {
        console.error('Booking failed:', error);
        this.errorMessage = error.message || 'Failed to submit booking. Please try again.';
        this.isLoading = false;
      }
    });
  }

  navigateToPlanYourTrip(): void {
    if (this.tour) {
      this.router.navigate(['/plan-your-trip'], {
        queryParams: { tour: this.tour.id }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/plan-your-trip']);
  }
}