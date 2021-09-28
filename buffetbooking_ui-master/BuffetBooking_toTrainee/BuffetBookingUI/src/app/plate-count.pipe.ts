import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plateCount'
})
export class PlateCountPipe implements PipeTransform {

  //Implement the pipe
  transform(value: any, args?: any): any {
    return 
  }

}
