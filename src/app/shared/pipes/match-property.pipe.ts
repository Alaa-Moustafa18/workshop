import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchProperty'
})
export class MatchPropertyPipe implements PipeTransform {

  transform(items: Array<any>, prop: string): Array<any>{
    if(items.length == 0)
      return items
    else 
      return items.filter(item => item[prop] == true);
  }

}
