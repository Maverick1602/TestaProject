import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plateCount'
})
export class PlateCountPipeStub implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 5){
        return "more plates";
    }
    else{
        return "less plates";
    }
  }

}
