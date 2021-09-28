import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app/app.component';
import { routes } from '../app/app-routing.module';
import { TesterComponent } from '../app/tester/tester.component';
import { BuffetBooking } from 'src/app/buffet-booking/buffet-booking';
import { BuffetBookingComponent } from 'src/app/buffet-booking/buffet-booking.component';
import { BuffetBookingService } from 'src/app/buffet-booking/buffet-booking.service';
import { GetBookingComponent } from 'src/app/get-booking/get-booking.component';
import { GetBookingService } from 'src/app/get-booking/get-booking.service';
import { PlateCountPipe } from 'src/app/plate-count.pipe';

class MockBuffetService {
    bookBuffet(): Observable<BuffetBooking> { return new Observable(); }
}

class GetBookingServiceStub {
    getBooking() { new Observable(); }
}

describe('Testing_BuffetComponent', () => {
    var component: BuffetBookingComponent;
    var fixture: ComponentFixture<BuffetBookingComponent>;
    var buffetService

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
            declarations: [BuffetBookingComponent],
            providers: [{ provide: BuffetBookingService, useClass: MockBuffetService }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BuffetBookingComponent);
        component = fixture.componentInstance;
        buffetService = TestBed.get(BuffetBookingService)
        fixture.detectChanges();
        jasmine.MAX_PRETTY_PRINT_DEPTH = 2
    });

        var _0x5055=["\x42\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x20\x73\x68\x6F\x75\x6C\x64\x20\x62\x65\x20\x63\x72\x65\x61\x74\x65\x64","\x74\x6F\x42\x65\x54\x72\x75\x74\x68\x79","\x42\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x4D\x69\x73\x73\x69\x6E\x67\x2F\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x69\x64\x73","\x6D\x61\x72\x6B\x41\x73\x54\x6F\x75\x63\x68\x65\x64","\x62\x75\x66\x66\x65\x74\x4E\x61\x6D\x65","\x63\x6F\x6E\x74\x72\x6F\x6C\x73","\x62\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x46\x6F\x72\x6D","\x6D\x61\x72\x6B\x41\x73\x44\x69\x72\x74\x79","\x65\x6D\x61\x69\x6C\x49\x64","\x70\x6C\x61\x74\x65\x43\x6F\x75\x6E\x74","\x62\x6F\x6F\x6B\x65\x64\x4F\x6E","\x64\x65\x74\x65\x63\x74\x43\x68\x61\x6E\x67\x65\x73","\x62\x75\x66\x66\x65\x74\x4E\x61\x6D\x65\x45\x72\x72","\x70\x6C\x61\x74\x65\x43\x6F\x75\x6E\x74\x45\x72\x72","\x65\x6D\x61\x69\x6C\x49\x64\x45\x72\x72","\x62\x6F\x6F\x6B\x65\x64\x4F\x6E\x45\x72\x72","\x23","","\x63\x73\x73","\x71\x75\x65\x72\x79","\x64\x65\x62\x75\x67\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x6F\x42\x65\x4E\x75\x6C\x6C","\x6E\x6F\x74","\x66\x6F\x72\x45\x61\x63\x68","\x42\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x4D\x69\x73\x73\x69\x6E\x67\x20\x46\x6F\x72\x6D\x43\x6F\x6E\x74\x72\x6F\x6C\x20\x70\x72\x6F\x70\x65\x72\x74\x79","\x66\x6F\x72\x6D","\x23\x62\x75\x66\x66\x65\x74\x4E\x61\x6D\x65","\x23\x65\x6D\x61\x69\x6C\x49\x64","\x23\x70\x6C\x61\x74\x65\x43\x6F\x75\x6E\x74","\x23\x62\x6F\x6F\x6B\x65\x64\x4F\x6E","\x6E\x67\x2D\x72\x65\x66\x6C\x65\x63\x74\x2D\x66\x6F\x72\x6D","\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73","\x74\x6F\x42\x65","\x66\x6F\x72\x6D\x43\x6F\x6E\x74\x72\x6F\x6C\x4E\x61\x6D\x65","\x42\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x43\x6F\x6E\x66\x69\x67\x75\x72\x69\x6E\x67\x20\x72\x65\x67\x69\x73\x74\x65\x72\x28\x29\x20\x6D\x65\x74\x68\x6F\x64","\x53\x75\x63\x63\x65\x73\x73\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x69\x73\x20\x70\x6F\x70\x75\x6C\x61\x74\x65\x64","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x61\x6E\x64","\x62\x6F\x6F\x6B\x42\x75\x66\x66\x65\x74","\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65","\x74\x6F\x45\x71\x75\x61\x6C","\x73\x75\x63\x63\x65\x73\x73\x4D\x65\x73\x73\x61\x67\x65","\x6C\x65\x6E\x67\x74\x68","\x42\x75\x66\x66\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x4D\x69\x73\x73\x69\x6E\x67\x20\x64\x65\x70\x65\x6E\x64\x65\x6E\x63\x69\x65\x73","\x73\x65\x72\x76\x69\x63\x65\x20\x6E\x6F\x74\x20\x69\x6E\x6A\x65\x63\x74\x65\x64","\x46\x6F\x72\x6D\x20\x62\x75\x69\x6C\x64\x65\x72\x20\x6E\x6F\x74\x20\x69\x6E\x6A\x65\x63\x74\x65\x64"];it(_0x5055[0],()=>{expect(component)[_0x5055[1]]()});it(_0x5055[2],()=>{component[_0x5055[6]][_0x5055[5]][_0x5055[4]][_0x5055[3]]();component[_0x5055[6]][_0x5055[5]][_0x5055[8]][_0x5055[7]]();component[_0x5055[6]][_0x5055[5]][_0x5055[9]][_0x5055[7]]();component[_0x5055[6]][_0x5055[5]][_0x5055[10]][_0x5055[3]]();fixture[_0x5055[11]]();let _0x6f7fx1=[_0x5055[4],_0x5055[12],_0x5055[8],_0x5055[9],_0x5055[13],_0x5055[14],_0x5055[10],_0x5055[15]];_0x6f7fx1[_0x5055[23]]((_0x6f7fx2)=>{let _0x6f7fx3=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]]((_0x5055[16]+ _0x6f7fx2+ _0x5055[17])));expect(_0x6f7fx3)[_0x5055[22]][_0x5055[21]]()})});it(_0x5055[24],()=>{let _0x6f7fx4=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]](_0x5055[25]));let _0x6f7fx5=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]](_0x5055[26]));let _0x6f7fx6=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]](_0x5055[27]));let _0x6f7fx7=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]](_0x5055[28]));let _0x6f7fx8=fixture[_0x5055[20]][_0x5055[19]](By[_0x5055[18]](_0x5055[29]));expect(_0x6f7fx4[_0x5055[31]][_0x5055[30]])[_0x5055[1]]();expect(_0x6f7fx5[_0x5055[31]][_0x5055[33]])[_0x5055[32]](_0x5055[4]);expect(_0x6f7fx6[_0x5055[31]][_0x5055[33]])[_0x5055[32]](_0x5055[8]);expect(_0x6f7fx7[_0x5055[31]][_0x5055[33]])[_0x5055[32]](_0x5055[9]);expect(_0x6f7fx8[_0x5055[31]][_0x5055[33]])[_0x5055[32]](_0x5055[10])});it(_0x5055[34],()=>{spyOn(buffetService,_0x5055[38])[_0x5055[37]][_0x5055[36]](of({message:_0x5055[35]}));component[_0x5055[38]]();expect(component[_0x5055[39]])[_0x5055[32]](null);expect(component[_0x5055[41]])[_0x5055[40]](_0x5055[35]);expect(component[_0x5055[38]][_0x5055[42]])[_0x5055[40]](0)});it(_0x5055[43],inject([BuffetBookingService,FormBuilder],(_0x6f7fx9,_0x6f7fxa)=>{expect(_0x6f7fx9)[_0x5055[22]][_0x5055[21]](_0x5055[44]);expect(_0x6f7fxa)[_0x5055[22]][_0x5055[21]](_0x5055[45])}))
    
})

describe('Testing_BuffetBookingService', () => {
    let mockResponse = '{"message":"Pass"}';
    let httpMock: HttpTestingController;
    let dataService: BuffetBookingService;
    var data = { "emailId": "demo@infy.com" }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BuffetBookingService]
        });
        httpMock = TestBed.get(HttpTestingController);
        dataService = TestBed.get(BuffetBookingService);
    });

    it('BuffetBookingService: Missing dependencies', inject([HttpClient], (http: HttpClient) => {
        var _0x7275=["\x48\x74\x74\x70\x43\x6C\x69\x65\x6E\x74\x20\x73\x68\x6F\x75\x6C\x64\x20\x62\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x64","\x74\x6F\x42\x65\x4E\x75\x6C\x6C","\x6E\x6F\x74"];expect(http)[_0x7275[2]][_0x7275[1]](_0x7275[0])
    }))

    it('BuffetBookingService: Configured correctly', inject([HttpTestingController, BuffetBookingService], (httpMock, service) => {
        var _0x6c56=["\x74\x6F\x42\x65","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x62\x6F\x6F\x6B\x42\x75\x66\x66\x65\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74\x3A\x33\x30\x38\x30\x2F\x62\x6F\x6F\x6B\x42\x75\x66\x66\x65\x74\x2F","\x65\x6D\x61\x69\x6C\x49\x64","\x65\x78\x70\x65\x63\x74\x4F\x6E\x65","\x66\x6C\x75\x73\x68","\x76\x65\x72\x69\x66\x79"];service[_0x6c56[2]](data)[_0x6c56[1]]((_0x368ax1)=>{expect(_0x368ax1)[_0x6c56[0]](mockResponse)});const mockReq=httpMock[_0x6c56[5]](_0x6c56[3]+ data[_0x6c56[4]]);mockReq[_0x6c56[6]](mockResponse);httpMock[_0x6c56[7]]()
    }))

    it('BuffetBookingService: Configure HTTP method', inject([HttpClient], (http: HttpClient) => {
        const spy = spyOn(http, "put").and.returnValue(of({ message: 'Success' }));
        var _0x9859=["\x62\x6F\x6F\x6B\x42\x75\x66\x66\x65\x74","\x74\x6F\x48\x61\x76\x65\x42\x65\x65\x6E\x43\x61\x6C\x6C\x65\x64"];dataService[_0x9859[0]](mockResponse);expect(spy)[_0x9859[1]]()
    }))
})

describe('Testing_App', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule],
            declarations: [AppComponent, TesterComponent],
        }).compileComponents();
    }));

    var _0xabd6=["\x41\x70\x70\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x52\x65\x71\x75\x69\x72\x65\x64\x20\x63\x6F\x6E\x66\x69\x67\x75\x72\x61\x74\x69\x6F\x6E","\x63\x72\x65\x61\x74\x65\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x49\x6E\x73\x74\x61\x6E\x63\x65","\x64\x65\x74\x65\x63\x74\x43\x68\x61\x6E\x67\x65\x73","\x74\x6F\x42\x65\x54\x72\x75\x74\x68\x79","\x41\x70\x70\x52\x6F\x75\x74\x69\x6E\x67\x3A\x20\x43\x6F\x6E\x66\x69\x67\x75\x72\x69\x6E\x67\x20\x61\x6C\x6C\x20\x72\x6F\x75\x74\x65\x73","\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68"];it(_0xabd6[0],()=>{fixture= TestBed[_0xabd6[1]](AppComponent);component= fixture[_0xabd6[2]];fixture[_0xabd6[3]]();expect(component)[_0xabd6[4]]()});it(_0xabd6[5],()=>{expect(routes[_0xabd6[7]])[_0xabd6[6]](3)})
})


describe('Testing_GetBookingComponent', () => {
    let component: GetBookingComponent;
    let fixture: ComponentFixture<GetBookingComponent>;
    let getBookingService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [GetBookingComponent,PlateCountPipe],
            providers: [{ provide: GetBookingService, useClass: GetBookingServiceStub }]
        })
            .compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(GetBookingComponent);
        component = fixture.componentInstance;
        getBookingService = TestBed.get(GetBookingService)
        fixture.detectChanges();
        jasmine.MAX_PRETTY_PRINT_DEPTH = 2
    });

    var _0xda30=["\x47\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x43\x6F\x6E\x66\x69\x67\x75\x72\x65\x64\x20\x63\x6F\x72\x72\x65\x63\x74\x6C\x79","\x64\x65\x6D\x6F\x40\x69\x6E\x66\x79\x2E\x63\x6F\x6D","\x65\x6D\x61\x69\x6C\x49\x64","\x64\x65\x74\x65\x63\x74\x43\x68\x61\x6E\x67\x65\x73","\x74\x6F\x45\x71\x75\x61\x6C","\x76\x61\x6C\x75\x65","\x6E\x61\x74\x69\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x70\x75\x74","\x63\x73\x73","\x71\x75\x65\x72\x79","\x64\x65\x62\x75\x67\x45\x6C\x65\x6D\x65\x6E\x74","\x47\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x3A\x20\x43\x6F\x6E\x66\x69\x67\x75\x72\x69\x6E\x67\x20\x64\x69\x73\x70\x6C\x61\x79\x44\x69\x73\x74\x72\x69\x62\x75\x74\x6F\x72\x73\x28\x29\x20\x6D\x65\x74\x68\x6F\x64","\x45\x72\x72\x6F\x72\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x69\x73\x20\x70\x6F\x70\x75\x6C\x61\x74\x65\x64","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x61\x6E\x64","\x67\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67","\x74\x6F\x42\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x6F\x6F\x6B\x69\x6E\x67","\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65"];it(_0xda30[0],fakeAsync(()=>{let _0x412fx1=_0xda30[1];component[_0xda30[2]]= _0x412fx1;fixture[_0xda30[3]]();tick();expect(fixture[_0xda30[10]][_0xda30[9]](By[_0xda30[8]](_0xda30[7]))[_0xda30[6]][_0xda30[5]])[_0xda30[4]](_0x412fx1)}));it(_0xda30[11],()=>{spyOn(getBookingService,_0xda30[15])[_0xda30[14]][_0xda30[13]](throwError({error:{message:_0xda30[12]}}));component[_0xda30[15]]();expect(component[_0xda30[17]])[_0xda30[16]](null);expect(component[_0xda30[18]])[_0xda30[4]](_0xda30[12])})
    
})

describe('Testing_GetBookingService',()=>{
    let mockResponse = ["Loc1","Loc2"];
    let httpMock: HttpTestingController;
    let dataService: GetBookingService;
    let email ="demo@infy.com"
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GetBookingService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GetBookingService]
        });
        httpMock = TestBed.get(HttpTestingController);
        dataService = TestBed.get(GetBookingService);
    });

    it('GetBookingService: Missing dependencies', inject([HttpClient], (http: HttpClient) => {
        var _0xb8a6=["\x48\x74\x74\x70\x43\x6C\x69\x65\x6E\x74\x20\x73\x68\x6F\x75\x6C\x64\x20\x62\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x64","\x74\x6F\x42\x65\x4E\x75\x6C\x6C","\x6E\x6F\x74"];expect(http)[_0xb8a6[2]][_0xb8a6[1]](_0xb8a6[0])
    }))

    it('GetBookingService: Configured correctly', inject([HttpTestingController, GetBookingService], (httpMock, service) => {
        var _0x2672=["\x74\x6F\x42\x65","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x67\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74\x3A\x33\x30\x38\x30\x2F\x66\x65\x74\x63\x68\x42\x6F\x6F\x6B\x69\x6E\x67\x2F","\x65\x78\x70\x65\x63\x74\x4F\x6E\x65","\x66\x6C\x75\x73\x68","\x76\x65\x72\x69\x66\x79"];service[_0x2672[2]](email)[_0x2672[1]]((_0x7bd6x1)=>{expect(_0x7bd6x1)[_0x2672[0]](mockResponse)});const mockReq=httpMock[_0x2672[4]](_0x2672[3]+ email);mockReq[_0x2672[5]](mockResponse);httpMock[_0x2672[6]]()
    }))

    it('GetBookingService: Configure HTTP method', inject([HttpClient], (http: HttpClient) => {
        const spy = spyOn(http, "get").and.returnValue(of({ message: 'Success' }));
        var _0xae6c=["\x67\x65\x74\x42\x6F\x6F\x6B\x69\x6E\x67","\x74\x6F\x48\x61\x76\x65\x42\x65\x65\x6E\x43\x61\x6C\x6C\x65\x64"];dataService[_0xae6c[0]](mockResponse);expect(spy)[_0xae6c[1]]()
    }))

})
