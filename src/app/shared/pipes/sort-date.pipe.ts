import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: Array<any>, prop:string):Array<any> {
    if(value.length == 0){
      return value
    }
    else{
      const sortedArr =    value.sort((a, b) =>   {
        if( a[prop] > b[prop])
          return -1
        else
        return 1
      })    
      return sortedArr;
    }
  }
}
