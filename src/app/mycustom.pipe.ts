import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst',
})
export class UcfirstPipe implements PipeTransform {
  transform(value: string): any {
    // the quick brown fox jumped over the lazy doing
    // [the, quick, brown]
    return value
      .split(' ')
      .map(
        (word: string) =>
          ' ' + word.substr(0, 1).toLocaleUpperCase() + word.substr(1)
      )
      .join('');
  }
}
