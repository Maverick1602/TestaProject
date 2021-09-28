import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BuffetBooking } from '../buffet-booking/buffet-booking';


@Injectable({
  providedIn: 'root'
})
export class GetBookingService {

  constructor(private http: HttpClient) { }

  getBooking(emailId): Observable<BuffetBooking[]>{
    return this.http.get<BuffetBooking[]>("http://localhost:3080/fetchBooking/"+emailId);
  }
}
