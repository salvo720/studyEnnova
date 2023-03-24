import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDoubleNumber'
})
export class PipeDoubleNumberPipe implements PipeTransform {

  transform(value: string, ): number | unknown {
    if(value.length < 1 || isNaN(Number(value))) return 'inserisci un valore valido '
    return Number(value) * 2;
  }

}
