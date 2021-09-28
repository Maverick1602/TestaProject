import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BuffetBooking } from 'src/app/buffet-booking/buffet-booking';
import { GetBookingComponent } from 'src/app/get-booking/get-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { GetBookingService } from 'src/app/get-booking/get-booking.service';
import { PlateCountPipe } from 'src/app/plate-count.pipe';

class GetBookingServiceStub {
    getBooking() { }
}

describe('Testing Pipe', () => {
    let component: GetBookingComponent;
    let fixture: ComponentFixture<GetBookingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule, HttpClientModule],
            declarations: [GetBookingComponent, PlateCountPipe],
            providers: [{ provide: GetBookingService, useClass: GetBookingServiceStub }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GetBookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
    })

    let data1 = new BuffetBooking()
    let data2 = new BuffetBooking()
    beforeEach(() => {
        data1.buffetName = "Buffet2"
        data1.bookingId = 1002
        data1.plateCount = 2
        data2.buffetName = "Buffet1"
        data2.bookingId = 1001
        data2.plateCount = 10
        component.selectedBooking = [data1, data2];
        fixture.detectChanges();
    })

    it('TSP 1 - Formated output for less plates', () => {
        let data = document.getElementsByTagName("td")[2].innerHTML;
        // alert(data)
        let outPut = data.match(/less+/i)
        expect(outPut).toBeDefined();
    })

    it('TSP 2 - Formated output for more plates', () => {
        let data = document.getElementsByTagName("td")[5].innerHTML;
        let outPut = data.match(/more/i)
        expect(outPut).toBeDefined();
    })


})