import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component'

export const routes: Routes = [
  //Your code goes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
