import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-buffet-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class BuffetBookingComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  buffetBookingForm: FormGroup;
  price: Number;

  //Inject Appropriate dependencies
  constructor() { }

  //Create your buffetBookingForm form with appropriate form controls

  ngOnInit() {

  }

  bookBuffet() {
    //Your Code Goes here
  }

}
function validateEmailId(emailId: FormControl) {
  // Your Code Goes Here
}



