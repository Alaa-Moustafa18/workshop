import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, filterCat: number, filterProp: string, propName: string, filterText: string): Array<any>{     
    if(value.length == 0){
      return value
    }
    else{
      let filteredArr =  value.filter(item => item[filterProp] == filterCat);        
      let filteredArr2 = filteredArr.filter(val =>  val[propName].toLowerCase().indexOf(filterText.toLowerCase()) !== -1);   
      return filteredArr2
    }
  }
}
