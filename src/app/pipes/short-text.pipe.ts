import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(text: string,): string {
    if (text.length > 95){
      return text.slice(0, 95)+'...'
    } else {
      return text
    }
  }

}
