// import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
// import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Observable, of, throwError } from 'rxjs';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { AppComponent } from '../app/app.component';
// import { routes } from '../app/app-routing.module';
// import { TesterComponent } from '../app/tester/tester.component';
// import { BuffetBooking } from 'src/app/buffet-booking/buffet-booking';
// import { BuffetBookingComponent } from 'src/app/buffet-booking/buffet-booking.component';
// import { BuffetBookingService } from 'src/app/buffet-booking/buffet-booking.service';
// import { GetBookingComponent } from 'src/app/get-booking/get-booking.component';
// import { GetBookingService } from 'src/app/get-booking/get-booking.service';
// import { PlateCountPipe } from 'src/app/plate-count.pipe';

// class MockBuffetService {
//     bookBuffet(): Observable<BuffetBooking> { return new Observable(); }
// }

// class GetBookingServiceStub {
//     getBooking() { new Observable(); }
// }

// describe('Testing_BuffetComponent', () => {
//     var component: BuffetBookingComponent;
//     var fixture: ComponentFixture<BuffetBookingComponent>;
//     var buffetService

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
//             declarations: [BuffetBookingComponent],
//             providers: [{ provide: BuffetBookingService, useClass: MockBuffetService }]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(BuffetBookingComponent);
//         component = fixture.componentInstance;
//         buffetService = TestBed.get(BuffetBookingService)
//         fixture.detectChanges();
//         jasmine.MAX_PRETTY_PRINT_DEPTH = 2
//     });

//     it('BuffetBookingComponent should be created', () => {
//         expect(component).toBeTruthy();
//     });

//     it('BuffetBookingComponent: Missing/Incorrect ids', () => {
//         component.buffetBookingForm.controls['buffetName'].markAsTouched();
//         component.buffetBookingForm.controls['emailId'].markAsDirty();
//         component.buffetBookingForm.controls['plateCount'].markAsDirty();
//         component.buffetBookingForm.controls['bookedOn'].markAsTouched();
//         fixture.detectChanges();

//         let idList = ["buffetName", "buffetNameErr", "emailId", "plateCount", "plateCountErr", "emailIdErr", "bookedOn", "bookedOnErr"];
//         idList.forEach(element => {
//             let select = fixture.debugElement.query(By.css(`#${element}`));
//             expect(select).not.toBeNull()
//         });
//     })

//     it('BuffetBookingComponent: Missing FormControl property', () => {
//         let buffetBookingForm = fixture.debugElement.query(By.css('form'));
//         let buffetName = fixture.debugElement.query(By.css('#buffetName'));
//         let emailId = fixture.debugElement.query(By.css('#emailId'));
//         let plateCount = fixture.debugElement.query(By.css('#plateCount'));
//         let bookedOn = fixture.debugElement.query(By.css('#bookedOn'));

//         expect(buffetBookingForm.attributes['ng-reflect-form']).toBeTruthy();
//         expect(buffetName.attributes['formControlName']).toBe('buffetName');
//         expect(emailId.attributes['formControlName']).toBe('emailId');
//         expect(plateCount.attributes['formControlName']).toBe('plateCount');
//         expect(bookedOn.attributes['formControlName']).toBe('bookedOn');
//     })

//     it('BuffetBookingComponent: Configuring register() method', () => {
//         spyOn(buffetService, 'bookBuffet').and.returnValue(of({ message: 'Success message is populated' }));
//         component.bookBuffet();
//         expect(component.errorMessage).toBe(null);
//         expect(component.successMessage).toEqual('Success message is populated');
//         expect(component.bookBuffet.length).toEqual(0);
//     })

//     it('BuffetBookingComponent: Missing dependencies', inject([BuffetBookingService, FormBuilder], (service, fb) => {
//         expect(service).not.toBeNull('service not injected');
//         expect(fb).not.toBeNull('Form builder not injected');
//     }));
// })

// describe('Testing_BuffetBookingService', () => {
//     let mockResponse = '{"message":"Pass"}';
//     let httpMock: HttpTestingController;
//     let dataService: BuffetBookingService;
//     var data = { "emailId": "demo@infy.com" }

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [BuffetBookingService]
//         });
//         httpMock = TestBed.get(HttpTestingController);
//         dataService = TestBed.get(BuffetBookingService);
//     });

//     it('BuffetBookingService: Missing dependencies', inject([HttpClient], (http: HttpClient) => {
//         expect(http).not.toBeNull('HttpClient should be provided');
//     }))

//     it('BuffetBookingService: Configured correctly', inject([HttpTestingController, BuffetBookingService], (httpMock, service) => {
//         service.bookBuffet(data).subscribe((response) => {
//             expect(response).toBe(mockResponse)
//         })
//         const mockReq = httpMock.expectOne('http://localhost:3080/bookBuffet/' + data.emailId);
//         mockReq.flush(mockResponse);
//         httpMock.verify();
//     }))

//     it('BuffetBookingService: Configure HTTP method', inject([HttpClient], (http: HttpClient) => {
//         const spy = spyOn(http, "put").and.returnValue(of({ message: 'Success' }));
//         dataService.bookBuffet(mockResponse);
//         expect(spy).toHaveBeenCalled();
//     }))
// })

// describe('Testing_App', () => {
//     let component: AppComponent;
//     let fixture: ComponentFixture<AppComponent>;
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [RouterTestingModule, HttpClientModule],
//             declarations: [AppComponent, TesterComponent],
//         }).compileComponents();
//     }));

//     it('AppComponent: Required configuration', () => {
//         fixture = TestBed.createComponent(AppComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//         expect(component).toBeTruthy();
//     })

//     it('AppRouting: Configuring all routes', () => {
//         expect(routes.length).toEqual(3);
//     })
// })


// describe('Testing_GetBookingComponent', () => {
//     let component: GetBookingComponent;
//     let fixture: ComponentFixture<GetBookingComponent>;
//     let getBookingService;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [RouterTestingModule, FormsModule],
//             declarations: [GetBookingComponent,PlateCountPipe],
//             providers: [{ provide: GetBookingService, useClass: GetBookingServiceStub }]
//         })
//             .compileComponents();
//     }))

//     beforeEach(() => {
//         fixture = TestBed.createComponent(GetBookingComponent);
//         component = fixture.componentInstance;
//         getBookingService = TestBed.get(GetBookingService)
//         fixture.detectChanges();
//         jasmine.MAX_PRETTY_PRINT_DEPTH = 2
//     });

//     it('GetBookingComponent: Configured correctly', fakeAsync(()=>{
//         let testValue = "demo@infy.com"
//         component.emailId = testValue;
//         fixture.detectChanges();
//         tick();
//         expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual(testValue)
//       }));

//       it('GetBookingComponent: Configuring displayDistributors() method',()=>{
//         spyOn(getBookingService, 'getBooking').and.returnValue(throwError({error:{ message: 'Error message is populated' }}));
//         component.getBooking();
//         expect(component.selectedBooking).toBe(null);
//         expect(component.errorMessage).toEqual('Error message is populated');
//       })
// })

// describe('Testing_GetBookingService',()=>{
//     let mockResponse = ["Loc1","Loc2"];
//     let httpMock: HttpTestingController;
//     let dataService: GetBookingService;
//     let email ="demo@infy.com"
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [GetBookingService]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [GetBookingService]
//         });
//         httpMock = TestBed.get(HttpTestingController);
//         dataService = TestBed.get(GetBookingService);
//     });

//     it('GetBookingService: Missing dependencies', inject([HttpClient], (http: HttpClient) => {
//         expect(http).not.toBeNull('HttpClient should be provided');
//     }))

//     it('GetBookingService: Configured correctly', inject([HttpTestingController, GetBookingService], (httpMock, service) => {
//         service.getBooking(email).subscribe((response) => {
//             expect(response).toBe(mockResponse)
//         })
//         const mockReq = httpMock.expectOne('http://localhost:3080/fetchBooking/' + email);
//         mockReq.flush(mockResponse);
//         httpMock.verify();
//     }))

//     it('GetBookingService: Configure HTTP method', inject([HttpClient], (http: HttpClient) => {
//         const spy = spyOn(http, "get").and.returnValue(of({ message: 'Success' }));
//         dataService.getBooking(mockResponse);
//         expect(spy).toHaveBeenCalled();
//     }))

// })
