import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuffetBooking } from './buffet-booking';

@Injectable()
export class BuffetBookingService {

  //Inject appropriate dependencies
  constructor() { }

  url = "http://localhost:3080/bookBuffet/";
  bookBuffet(data): Observable<BuffetBooking> {
    return //Your code goes here
  }

}
