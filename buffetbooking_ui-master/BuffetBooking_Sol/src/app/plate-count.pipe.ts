import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plateCount'
})
export class PlateCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 5){
        return "more than 5 plates";
    }
    else{
        return "5 or less plates";
    }
  }

}
