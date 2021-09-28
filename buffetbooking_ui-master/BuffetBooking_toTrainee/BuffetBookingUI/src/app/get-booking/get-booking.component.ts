import { Component, OnInit } from '@angular/core';
import { BuffetBooking } from '../buffet-booking/buffet-booking';

@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnInit {

  
  errorMessage: string;
  emailId: string;
  selectedBooking :BuffetBooking[];

// Inject appropriate dependencies
  constructor() { }

  ngOnInit() {
  }

  getBooking(){
      //Your code goes here
  }

}
