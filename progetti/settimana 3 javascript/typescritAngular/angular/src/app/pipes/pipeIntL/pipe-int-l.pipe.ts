import { Pipe, PipeTransform } from '@angular/core';
import opzionale from '../../components/interface/iarticle copy';

@Pipe({
  name: 'pipeIntL'
})
export class PipeIntLPipe implements PipeTransform {

  /*
    - Primo parametro un valore che può essere string|number
    -  prendiamo come 2° parametro possibile un "method" che può essere:
      "date"|"number" ed in base al valore passato da template formattiamo la data o il numero usando Intl
      - se non viene passato un secondo parametro di default  viene
      preso per buono che vogliamo fare una formattazione di numero
    - Prendiamo un ulteriore parametro che passa i nostri dati dentro le opzioni del metodo di data/numero (...)

      {{  10000 :intl : 'number}:{currency:'eur'} }
    */



  transform(value: string | number, method: 'date' | 'number' = 'number', options?: opzionale): any {
    /*
    const numero = Number(value);
    const currenLocate = globalThis.navigator.language; // gloabThis eqivale al window ed avviene quando viene eseguito javascript lato ser ver per collegare node al windwo s

    if (Number.isNaN(numero) || numero === undefined) return 'inserisci un valore valido ';
    // type guard
    if (method == 'number' || method == undefined) {
      return numero
    } else if (method == 'date') {
      // gaurd condiction
      const date = new Date(numero);
      const dateFromNumber: any = new Intl.DateTimeFormat(currenLocate).format(date);
      if (!this.isValidDate(dateFromNumber)) {
        return "la data non e valida"
      }
      return dateFromNumber;
    }

    console.log("method :", method)
    if (options != undefined) {

    }

    // new Intl.NumberFormat()
    return numero


    isValidDate(date: Date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(Number(date));
  }
    */
    const numero = Number(value);
    const currenLocate = globalThis.navigator.language; // gloabThis eqivale al window ed avviene quando viene eseguito javascript lato ser ver per collegare node al windwo s
    //  guard codinction
    if (Number.isNaN(numero) || numero === undefined || !options) return 'inserisci un valore valido o inserisci delle opzioni valide  ';
    console.log("numero :", numero)
    console.log("method :", method)
    if (method == 'number') {
      return numero
    } else if (method == 'date') {
      const date = new Date(numero);
      const dateFromNumber: any = new Intl.DateTimeFormat(currenLocate).format(date);
      console.log("date :", date)
      console.log("dateFromNumber :", dateFromNumber)
      // gaurd condiction
      if (!isWeakFormatDateOption(method, options) && !isValidDate(dateFromNumber)) {

        console.log("dateFromNumber :", dateFromNumber)
        return "la data non e valida"
      }
      console.log("dateFromNumber :", dateFromNumber)

      if (options == undefined) {
        return dateFromNumber;
      } else {
        const dateFromNumber: any = new Intl.DateTimeFormat('it',options.currency).format();
        return dateFromNumber;
      }
    }

    function isWeakFormatDateOption(
      method: 'number' | 'date',
      options: Intl.DateTimeFormatOptions | Intl.NumberFormatOptions
    ): options is Intl.DateTimeFormatOptions {
      return method === 'date'
    }

    function isValidDate(date: Date) {
      return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(Number(date));
    }
  }



}




