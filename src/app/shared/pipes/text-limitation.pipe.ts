import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimitation'
})
export class TextLimitationPipe implements PipeTransform {

  transform(value: string): string {

    if (value.length > 95) {
      return value.substring(0,95) + '...';
    } else {
      return value.substring(0,95);
    }

  }

}
