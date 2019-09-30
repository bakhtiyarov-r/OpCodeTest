import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  public transform(value: any[], keys: string) {

    if (!keys) return value;
    return value.sort((a: any, b: any) => {

        if(a[keys] < b[keys]) {
          return -1;
        } else if (a[keys] > b[keys]) {
          return 1;
        } else {
          return 0;
        }
      });
    	

  }
}