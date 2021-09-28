import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BuffetBookingComponent } from 'src/app/buffet-booking/buffet-booking.component';
import { BuffetBookingService } from 'src/app/buffet-booking/buffet-booking.service';




class BuffetBookingServiceStub {
    bookBuffet() {
    }
}

describe('BuffetBookingComponent', () => {
    let component: BuffetBookingComponent;
    let fixture: ComponentFixture<BuffetBookingComponent>;
    let buffetBookingService;

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
            declarations: [BuffetBookingComponent],
            providers: [{ provide: BuffetBookingService, useClass: BuffetBookingServiceStub }] // to subbstitute the service
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BuffetBookingComponent);
        component = fixture.componentInstance;
        buffetBookingService = TestBed.get(BuffetBookingService)
        fixture.detectChanges();
        jasmine.MAX_PRETTY_PRINT_DEPTH = 2
    });


    describe('HTML - EmailId Field', () => {
        let errors;
        let emailId;
        let emailIdSpan;

        beforeEach(() => {
            emailId = component.buffetBookingForm.controls['emailId']
            emailId.setValue('');
            fixture.detectChanges();
            errors = emailId.errors;
            emailIdSpan = fixture.debugElement.query(By.css('#emailIdErr'))
        })

        it('TSC 1 - Book: Email id validation for no input -should be invalid', () => {
            expect(emailId.valid).toBeFalsy()
        })

        it('TSC 2 - Book: Email id validation for no input-error should be required', () => {
            expect(errors['required']).toBeTruthy()
        })

        it('TSC 3 - Email id should not display the error message initialy', () => {
            expect(emailIdSpan).toBeFalsy();
        });

        it('TSC 4 - Email id should display the invalid error message', () => {
            emailId.markAsDirty()
            fixture.detectChanges()
            emailIdSpan = fixture.debugElement.query(By.css('#emailIdErr'))
            expect(emailIdSpan).toBeTruthy();
        });

    })


    // if employee name is incorrect
    describe('HTML - Buffet Name Field', () => {
        let errors;
        let buffetName;
        let buffetNameSpan;

        beforeEach(() => {
            buffetName = component.buffetBookingForm.controls['buffetName'];
            buffetName.setValue('SouthIndianSpcl');
            errors = buffetName.errors;
            buffetNameSpan = fixture.debugElement.query(By.css('#buffetNameErr'))
            fixture.detectChanges();
        })


        it('TSC 5 - Buffet Name: Field should be valid', () => {
            expect(buffetName.valid).toBeTruthy()
        })

        it('TSC 6 - Buffet Name: No error message', () => {
            expect(buffetNameSpan).toBeFalsy();
        });

        it('TSC 7 - Buffet Name: Field should be invalid', () => {
            buffetName.setValue("")
            fixture.detectChanges()
            expect(buffetName.valid).toBeFalsy()
        })

        it('TSC 8 - Buffet Name: Error message', () => {
            buffetName.setValue("")
            buffetName.markAsTouched()
            fixture.detectChanges()
            buffetNameSpan = fixture.debugElement.query(By.css('#buffetNameErr'))

            expect(buffetNameSpan).toBeTruthy();
        });



    })


    // if employee name is correct
    describe('HTML - Plate count', () => {
        let errors;
        let plateCount;
        let plateCountSpan;

        beforeEach(() => {
            plateCount = component.buffetBookingForm.controls['plateCount'];
            plateCount.setValue(2);
            plateCount.markAsDirty();
            fixture.detectChanges();
            errors = plateCount.errors;
            plateCountSpan = fixture.debugElement.query(By.css('#plateCountErr'))
        })


        it('TSC 9 - Plate Count:Field should be valid', () => {
            expect(plateCount.valid).toBeTruthy()
        })

        it('TSC 10 - Plate Count: Error should be null', () => {
            expect(errors).toBeFalsy()
        })

        it('TSC 11 - Plate Count:Field should be invalid', () => {
            plateCount.setValue("")
            fixture.detectChanges()
            expect(plateCount.valid).toBeFalsy()
        })

        it('TSC 12 - Plate Count: Error should be displayed', () => {
            plateCount.setValue("")
            fixture.detectChanges()
            plateCountSpan = fixture.debugElement.query(By.css('#plateCountErr'))
            expect(plateCountSpan).toBeTruthy()
        })



    })


    // __________________________________checking for bookedOn date_______________________________________

    //if start date is untouched
    describe('HTML - Booked On', () => {
        let errors;
        let bookedOn;
        let bookedOnSpan;

        beforeEach(() => {
            bookedOn = component.buffetBookingForm.controls['bookedOn'];
            bookedOn.setValue('');
            fixture.detectChanges();
            errors = bookedOn.errors;
            bookedOnSpan = fixture.debugElement.query(By.css('#bookedOnErr'))
        })


        it('TSC 13 - bookedOn: Field should be invalid', () => {
            expect(bookedOn.valid).toBeFalsy()
        })

        it('TSC 14 - bookedOn: Error message should be displayed', () => {
            bookedOn.markAsTouched();
            fixture.detectChanges();
            bookedOnSpan = fixture.debugElement.query(By.css('#bookedOnErr'))

            expect(bookedOnSpan).toBeTruthy();
        });

        it('TSC 15 - bookedon: should be required', () => {
            //console.log("__________==================>",errors)
            expect(errors['required']).toBeTruthy()
        })

        it('TSC 16 - bookedOn: Field should be valid', () => {
            bookedOn.setValue((new Date(year, month + 1, day)));
            bookedOn.markAsTouched();
            fixture.detectChanges();
            expect(bookedOn.valid).toBeTruthy()

        });
    })

    //___________________________________form element binding________________________________________________
    describe('Checking HTML form elements binding', () => {
        let buffetBookingForm: DebugElement
        let emailIdTag: DebugElement;
        let bookedOnTag: DebugElement;
        let buffetNameTag: DebugElement;
        let plateCountTag: DebugElement;

        beforeEach(() => {
            buffetBookingForm = fixture.debugElement.query(By.css('form'));
            emailIdTag = fixture.debugElement.query(By.css('#emailId'));
            bookedOnTag = fixture.debugElement.query(By.css('#bookedOn'));
            buffetNameTag = fixture.debugElement.query(By.css('#buffetName'));
            plateCountTag = fixture.debugElement.query(By.css('#plateCount'));

        })

        it('TSC 17 - Rent:check binding of formgroup to form tag', () => {
            expect(buffetBookingForm.attributes['ng-reflect-form']).toBeTruthy();
        })

        it('TSC 18 - Form: check binding of formcontrol to emailId tag', () => {
            expect(emailIdTag.attributes['formControlName']).toBe('emailId')
        })


        it('TSC 19 - Form: check binding of formcontrol to bookedOn tag', () => {
            expect(bookedOnTag.attributes['formControlName']).toBe('bookedOn')
        })


        it('TSC 20 - Form: check binding of formcontrol to plateCount tag', () => {
            expect(plateCountTag.attributes['formControlName']).toBe('plateCount')
        })


        it('TSC 21 - Form: check binding of formcontrol to buffetName tag', () => {
            expect(buffetNameTag.attributes['formControlName']).toBe('buffetName')
        })

    })

    describe('Submiting invalid data', () => {

        let submitBtn;

        beforeEach(() => {
            component.buffetBookingForm.controls['emailId'].setValue("abc&infy.com");
            component.buffetBookingForm.controls['bookedOn'].setValue((new Date(2018, 2, 3)));
            component.buffetBookingForm.controls['plateCount'].setValue(2);
            component.buffetBookingForm.controls['buffetName'].setValue('2Wheeler')
            fixture.detectChanges();
            submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
        })

        it('TSC 22 - Rent:Form level validation should be invalid', () => {
            expect(component.buffetBookingForm.valid).toBe(false);
        });

        it('TSC 23 - Rent:Submit button should have disabled property', () => {
            expect(submitBtn.disabled).toBe(true);
        });

    })

    describe('Submiting valid data', () => {

        it('TSC 24 - Buffet:Check if the bookBuffet method calls service', () => {
            const spy = spyOn(buffetBookingService, "bookBuffet").and.returnValue(of({ message: 'Success' }));
            component.bookBuffet();
            expect(spy).toHaveBeenCalled();
        })

        it('TSC 25 - Buffet: bookBuffet method nullifies error the messages on success', () => {
            spyOn(buffetBookingService, "bookBuffet").and.returnValue(of({ message: 'Success' }));
            component.bookBuffet();
            expect(component.successMessage).toBe("Success")
            let data = (component.errorMessage === "") ? true : ((component.errorMessage === null) ? true : false)
            expect(data).toBeTruthy();
        })

        it('TSC 26 - Rent:Check if the bookBuffet method nullifies success on error', () => {
            spyOn(buffetBookingService, "bookBuffet").and.returnValue(throwError({ error: { message: 'Error' } }));
            component.bookBuffet();
            expect(component.errorMessage).toBe("Error");
            let data = (component.successMessage === "") ? true : ((component.successMessage === null) ? true : false)
            expect(data).toBeTruthy();
        })

    })

    describe('Bootstrap classes used', () => {
        let buffetBookingForm: DebugElement;
        let emailId: DebugElement;
        let bookedOn: DebugElement;
        let plateCount: DebugElement;
        let buffetName: DebugElement;
        let buttonTag: DebugElement;
        let emailIdErr: DebugElement;
        let bookedOnErr: DebugElement;
        let plateCountErr: DebugElement;
        let buffetNameErr: DebugElement;


        beforeEach(() => {
            component.buffetBookingForm.controls['emailId'].setValue("");
            component.buffetBookingForm.controls['bookedOn'].setValue((new Date(year - 5, month + 1, day)));
            component.buffetBookingForm.controls['plateCount'].setValue(-2);
            component.buffetBookingForm.controls['buffetName'].setValue('');
            component.buffetBookingForm.controls['emailId'].markAsDirty();
            component.buffetBookingForm.controls['bookedOn'].markAsTouched();
            component.buffetBookingForm.controls['plateCount'].markAsDirty();
            component.buffetBookingForm.controls['buffetName'].markAsTouched();
            fixture.detectChanges();

            buffetBookingForm = fixture.debugElement.query(By.css('form'));
            emailId = fixture.debugElement.query(By.css('#emailId'))
            plateCount = fixture.debugElement.query(By.css('#plateCount'))
            bookedOn = fixture.debugElement.query(By.css('#bookedOn'))
            buffetName = fixture.debugElement.query(By.css('#buffetName'))
            emailIdErr = fixture.debugElement.query(By.css('#emailIdErr'))
            bookedOnErr = fixture.debugElement.query(By.css('#bookedOnErr'))
            plateCountErr = fixture.debugElement.query(By.css('#plateCountErr'))
            buffetNameErr = fixture.debugElement.query(By.css('#buffetNameErr'))
            buttonTag = fixture.debugElement.query(By.css('button'));
        })

        it("TSC 27 - Buffet:form tag has class form", () => {
            expect(buffetBookingForm.attributes['class']).toBe('form');
        })


        it("TSC 28 - Buffet:Customer id has form-group class", () => {
            expect(emailId.parent.attributes['class']).toBe('form-group');
        })

        it("TSC 29 - Buffet:Customer id has form control class", () => {
            expect(emailId.attributes['class']).toBe('form-control');
        })

        // it('TSC 48 - Buffet: Customer id has text-danger class', () => {
        //     expect(emailIdErr.attributes['class']).toBe('text-danger')
        // })

        it("TSC 30 - Buffet: bookedOn has form-group class", () => {
            expect(bookedOn.parent.attributes['class']).toBe('form-group');
        })

        it("TSC 31 - Buffet: bookedOn has form control class", () => {
            expect(bookedOn.attributes['class']).toBe('form-control');
        })

        // it('TSC 51 - Buffet: bookedOn has text-danger class', () => {
        //     expect(bookedOnErr.attributes['class']).toBe('text-danger')
        // })

        it("TSC 32 - Buffet: plateCount has form-group class", () => {
            expect(plateCount.parent.attributes['class']).toBe('form-group');
        })

        it("TSC 33 - Buffet: plateCount has form control class", () => {
            expect(plateCount.attributes['class']).toBe('form-control');
        })

        // it('TSC 54 - Buffet: plateCount has text-danger class', () => {
        //     expect(plateCountErr.attributes['class']).toBe('text-danger')
        // })

        it("TSC 34 - Buffet: buffetName has form-check-label class", () => {
            expect(buffetName.parent.attributes['class']).toBe('form-group');
        })

        it("TSC 35 - Buffet: buffetName has form-check-input class", () => {
            expect(buffetName.attributes['class']).toBe('form-control');
        })

        // it('TSC 58 - Buffet: buffetName has text-danger class', () => {
        //     expect(buffetNameErr.attributes['class']).toBe('text-danger')
        // })

        it("TSC 36  - Buffet:button should have class btn btn-primary", () => {
            expect(buttonTag.attributes['class']).toBe('btn btn-primary');
        })

        it("TSC 37 - Buffet: Success message shough have proper bootstrap class", () => {
            component.successMessage = "Success"
            fixture.detectChanges();
            let success = fixture.debugElement.query(By.css("#successMessage"))
            expect(success.nativeElement.textContent.trim()).toBe("Success")
        })

        it("TSC 38 - Buffet: Error message shough have proper bootstrap class", () => {
            component.errorMessage = "Fail"
            fixture.detectChanges();
            let error = fixture.debugElement.query(By.css("#errorMessage"))
            expect(error.nativeElement.textContent.trim()).toBe("Fail")
        })
    })

})