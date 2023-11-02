import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone:string): string {
    let format = "+xxx (xx) xxx-xx-xx"
    for(let i = 0; i < phone.length; i++)
    {
      format = format.replace('x', phone[i]);
    }
    return format;
  }

}
