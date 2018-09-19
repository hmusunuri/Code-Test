import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDateTime'
})
export class SecondsToDateTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Date(1970, 0, 1).setSeconds(value);
  }

}
