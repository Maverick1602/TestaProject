import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormGroup, FormControl, AbstractControl, FormsModule } from '@angular/forms';
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { BuffetBooking } from 'src/app/buffet-booking/buffet-booking';
import { GetBookingComponent } from 'src/app/get-booking/get-booking.component';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'; 
import { HttpClientModule } from '@angular/common/http';
import { GetBookingService } from 'src/app/get-booking/get-booking.service';
import {PlateCountPipeStub} from './plateCount.pipe'

class GetBookingServiceStub {
    getBooking() { }
}

function getValue(id) {
    let data = document.getElementsByTagName("td")[id].innerHTML;
    return data;
}

describe('Testing GetBookingComponent', () => {
    let component: GetBookingComponent;
    let fixture: ComponentFixture<GetBookingComponent>;
    let getBookingService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule, HttpClientModule],
            declarations: [GetBookingComponent,PlateCountPipeStub],
            providers: [{ provide: GetBookingService, useClass: GetBookingServiceStub }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GetBookingComponent);
        component = fixture.componentInstance;
        getBookingService = TestBed.get(GetBookingService);
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
    it('TSC 39 - GetBookingComponent Html should have Two-way binding', fakeAsync(() => {
        let testValue = "abc@infy.com"
        component.emailId = testValue;
        fixture.detectChanges();
        tick();
        expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual(String(testValue))
    }))

    it('TSC 40 -  getBooking() method calls service', () => {
        const spy = spyOn(getBookingService, "getBooking").and.returnValue(of(BuffetBooking))
        component.getBooking();
        expect(spy).toHaveBeenCalled();
    })

    it('TSC 41 - Proper bootstrap class used for Button', () => {
        component.emailId = null;
        fixture.detectChanges();
        let buttonTag = fixture.debugElement.query(By.css('button'));
        expect(buttonTag.attributes['class']).toBe('btn btn-primary');
    })

    it('TSC 42 - Used bootstrap class input field', () => {
        let inputTag = fixture.debugElement.query(By.css('input'));
        expect(inputTag.attributes['class']).toBe('form-control');
        // expect(inputTag.attributes['placeholder']).toBe('Enter your customer id');
    })

    it('TSC 43 - Check if getBooking() method nullifies Error message on Valid input', () => {
        spyOn(getBookingService, "getBooking").and.returnValue(of(BuffetBooking));
        component.getBooking();
        component.errorMessage == null ? expect(component.errorMessage).toBe(null) : expect(component.errorMessage).toBe("");
    })

    it('TSC 44 - Should display result in tabular form', () => {
        var result: any[] = [];
        const tableData = fixture.debugElement.queryAll(By.css('td')).length;

        for (var i = 0; i < tableData; i++) {
            var data = getValue(i);
            result.push(data);
        }
        // alert(result)
        expect(result.length).toBe(6);
    })

    it('TSC 45 - Table bootstrap class used', () => {
        let tableTag = fixture.debugElement.query(By.css('table'));
        expect(tableTag.attributes['class']).toContain('table-bordered')
    })

    it('TSC 46 - Should display result in tabular form 2', () => {
        var result: any[] = [];
        const tableData = fixture.debugElement.queryAll(By.css('td')).length;
        for (var i = 0; i < tableData; i++) {
            var data = getValue(i);
            result.push(data);
        }
        // alert(result)
        expect(result).toEqual(['Buffet2', "1002", "less plates", 'Buffet1', "1001", "more plates"]);
    })
})
