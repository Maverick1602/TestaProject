import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component'

export const routes: Routes = [
  { path: 'bookBuffet', component: BuffetBookingComponent },
  {path: 'getbooking', component: GetBookingComponent},
  {path: '**', redirectTo: 'bookBuffet', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
