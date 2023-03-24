import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCapitalize'
})
export class PipeCapitalizePipe implements PipeTransform {

  transform(value: string ): string {
    if(value?.length < 1) return ''
    const firstLetter = value.charAt(0).toUpperCase();
    const remainginChars = value.substring(1).toLocaleLowerCase();
    return firstLetter.concat(remainginChars)
  }

}
