import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  numberOfPeople: number;
  specialRequests?: string;
  tourId?: string;
  tourTitle?: string;
}

export interface BookingResponse {
  success: boolean;
  message?: string;
  bookingId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = '/api/bookings';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {}

  submitBooking(bookingData: BookingData): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(this.apiUrl, bookingData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
