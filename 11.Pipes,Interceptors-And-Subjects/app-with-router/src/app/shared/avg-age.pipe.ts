import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avgAge',
  // pure: false
})
export class AvgAgePipe implements PipeTransform {

  transform(users: any[], defaultValue = '', start = 0): number | string{
    const sum = users.reduce((x: any, y: any) => x + y.age, start); 
    return  sum === start ? defaultValue : sum / users.length;
  }

}
