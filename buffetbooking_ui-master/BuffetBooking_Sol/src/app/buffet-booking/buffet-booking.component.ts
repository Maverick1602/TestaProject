import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { BuffetBookingService } from './buffet-booking.service';


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
  constructor(private fb: FormBuilder, private buffetBookingService: BuffetBookingService) { }



  ngOnInit() {
    this.buffetBookingForm = this.fb.group({
      buffetName: ['', Validators.required],
      emailId: ['', [Validators.required, validateEmailId]],
      plateCount: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      bookedOn: ['', Validators.required]
    })
  }

  bookBuffet() {
    this.errorMessage = null;
    this.successMessage = null;
    this.buffetBookingService.bookBuffet(this.buffetBookingForm.value).subscribe(

      (response) => {
        this.price = response.price;
        this.successMessage = response.message;
  
      },
      (errorResponse) => this.errorMessage = errorResponse.error.message,
    )
  }

}
function validateEmailId(emailId: FormControl) {
  let regEx = /^[A-z][A-z0-9._]+@[A-z]+\.[A-z]{2,4}$/
  return regEx.test(emailId.value) ? null : {
    emailError: {
      message: "Enter a valid Email id"
    }
  }
}



