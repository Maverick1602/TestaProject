import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BuffetBooking } from '../buffet-booking/buffet-booking';


@Injectable({
  providedIn: 'root'
})
export class GetBookingService {
// Inject appropriate dependencies
  constructor() { }

  getBooking(emailId): Observable<BuffetBooking[]>{
    return //Your code goes here
  }
}
