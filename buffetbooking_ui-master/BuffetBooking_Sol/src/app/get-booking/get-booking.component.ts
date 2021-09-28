import { Component, OnInit } from '@angular/core';
import { BuffetBooking } from '../buffet-booking/buffet-booking';
import { GetBookingService } from './get-booking.service'

@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnInit {

  
  errorMessage: string;
  emailId: string;
  selectedBooking :BuffetBooking[];


  constructor(private getBookingService: GetBookingService) { }

  ngOnInit() {
  }

  getBooking(){
      this.getBookingService.getBooking(this.emailId).subscribe(
        data => {        
        this.selectedBooking = data
        console.log(this.selectedBooking, typeof this.selectedBooking
          )
        this.errorMessage = null;
      },
        err => {this.errorMessage = err.error.message,
        this.selectedBooking = null}
      );
  }

}
