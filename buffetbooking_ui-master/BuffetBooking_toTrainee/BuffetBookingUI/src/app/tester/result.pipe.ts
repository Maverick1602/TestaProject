import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args.length > 0){
      return 
    }
  }

}
