import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BuffetBookingService } from 'src/app/buffet-booking/buffet-booking.service';

describe('Testing BuffetBookingService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BuffetBookingService, { provide: XHRBackend, useClass: MockBackend }]
        })
            .compileComponents();
    }));

    it('TS 1 - BuffetBookingService should be injected', inject([BuffetBookingService], (service: BuffetBookingService) => {
        expect(service instanceof BuffetBookingService).toBe(true);
    }));

    it('TS 2 - HttpClient must be injected in BuffetBookingService', inject([HttpClient], (http: HttpClient) => {
        expect(http).not.toBeNull('HttpClient should be provided');
        const service = new BuffetBookingService(http);
        expect(service instanceof BuffetBookingService).toBe(true, 'New service should be ok');
    }));
})

describe('Testing Fetching data through BuffetBookingService', () => {
    let httpMock: HttpTestingController;
    let dataService: BuffetBookingService;
    let mockResponse = '{ "message": "Buffet booked with booking id: 2006 Pay Rs.880"  }';
    let data = {
        "plateCount": 4,
        "buffetName": "SouthIndianSpcl",
        "bookedOn": "2019-11-11",
        "emailId": "abc@infy.com"
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BuffetBookingService]
        });
        httpMock = TestBed.get(HttpTestingController);
        dataService = TestBed.get(BuffetBookingService);
    });

    it('TS 3 - BuffetBookingService: Missing dependencies', inject([HttpClient], (http: HttpClient) => {
        expect(http).not.toBeNull('HttpClient should be provided');
    }))


    it('TS 4 - BuffetBookingService: Used Proper URL', inject([HttpTestingController, BuffetBookingService], (httpMock, service) => {
        service.bookBuffet(data).subscribe((response) => {
            expect(response).toBe(mockResponse)
        })
        const mockReq = httpMock.expectOne('http://localhost:3080/bookBuffet/' + data.emailId);
        mockReq.flush(mockResponse);
        httpMock.verify();
    }))

    it('TS 5 - BuffetBookingService: used PUT method', inject([HttpClient], (http: HttpClient) => {
        const spy = spyOn(http, "put").and.returnValue(of({ "message": "Buffet booked with booking id: 2006 Pay Rs.880" }));
        dataService.bookBuffet(data);
        expect(spy).toHaveBeenCalled();
    }))
})