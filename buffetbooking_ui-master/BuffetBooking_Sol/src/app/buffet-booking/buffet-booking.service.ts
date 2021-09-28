import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuffetBooking } from './buffet-booking';

@Injectable()
export class BuffetBookingService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3080/bookBuffet/";
  bookBuffet(data): Observable<BuffetBooking> {
    return this.httpClient.put<BuffetBooking>(this.url + data.emailId, data);
  }

}
