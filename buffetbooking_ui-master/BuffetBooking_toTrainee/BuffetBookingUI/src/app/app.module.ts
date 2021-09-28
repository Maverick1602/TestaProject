import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';
import { BuffetBookingService } from './buffet-booking/buffet-booking.service';
import { HttpClientModule } from '@angular/common/http';
import { GetBookingComponent } from './get-booking/get-booking.component';
import { PlateCountPipe } from './plate-count.pipe';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    BuffetBookingComponent,
    GetBookingComponent,
    TesterComponent,
    PlateCountPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BuffetBookingService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
