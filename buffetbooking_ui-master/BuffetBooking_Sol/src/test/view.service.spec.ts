import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { XHRBackend, Response, ResponseOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {of } from 'rxjs';
import { GetBookingService } from 'src/app/get-booking/get-booking.service';
import { BuffetBooking } from 'src/app/buffet-booking/buffet-booking';

describe('Testing GetBookingService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GetBookingService, { provide: XHRBackend, useClass: MockBackend }]
        })
            .compileComponents();
    }));

    it('TS 6 - GetBookingService should be injected', inject([GetBookingService], (service: GetBookingService) => {
        expect(service instanceof GetBookingService).toBe(true);
    }));

    it('TS 7 - HttpClient must be injected in GetBookingService', inject([HttpClient], (http: HttpClient) => {
        expect(http).not.toBeNull('HttpClient should be provided');
        const service = new GetBookingService(http);
        expect(service instanceof GetBookingService).toBe(true, 'New service should be ok');
    }));
})

describe('Testing fetching data through BuffetBookingService', () => {
    let httpMock: HttpTestingController;
    let dataService: GetBookingService;
    let book1 = new BuffetBooking();
    let book2 = new BuffetBooking();
    const mockObj = [book1, book2];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GetBookingService]
        });
        httpMock = TestBed.get(HttpTestingController);
        dataService = TestBed.get(GetBookingService);
    });

    it('TS 8 - GetBookingService should be created', inject([GetBookingService], (service: GetBookingService) => {
        expect(service).toBeTruthy();
    }));

    it('TS 9 - GetBookingService getBooking() should return observable', inject([HttpTestingController, GetBookingService], (httpMock, service) => {
        let data = "abc@infy.com"
        service.getBooking(data).subscribe((response) => {
            expect(response).toBe(mockObj)
        })
        const mockReq = httpMock.expectOne("http://localhost:3080/fetchBooking/"+data);
        mockReq.flush(mockObj);
        httpMock.verify();
    }))

    it('TS 12 - getDetails() should be called using GET method', inject([HttpClient], (http: HttpClient) => {
        let data = "abc@infy.com"

        const spy = spyOn(http, "get").and.returnValue(of({ message: 'Success' }));
        dataService.getBooking(data);
        expect(spy).toHaveBeenCalled();
    }))
})
