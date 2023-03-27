import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
/*
<!-- la pipe si occupa di transformare i valori in input di un array .
nel farlo cerchiamo di adottare alcune best practies :

1)
- se l'input e una stringa scomponiamo in semplici letter
- se l'input e e un number lo scomponiamo in singoli caratteri

2)
- se l'input e un array scomponiamo lo stesso array

3)
- se l'input e una Map replichiamo il caso di object
- se l'input e object torniamo un array di array (matrice ) con chiave ([valore])

4)
- se l'input e undifned|boolean|sybmbol) torniamo []

-->
*/

@Pipe({
  name: 'castArray'
})
export class CastArrayPipe implements PipeTransform {

  transform(value: any): any {

    // if( ['string','number'].includes(typeof value) )  // typeof deve includere i valori dell'array

    // nel caso in cui value = null ritorna false
    // Boolean(value)
    const tipo = typeof value;
    switch (tipo) {
      case 'string':
      case 'number':
        if(typeof value === 'number' && !Number.isInteger(value)){
          console.warn("attenzione : il risultato potrebbe essere Nan o array mixed ");
        }
        // soluzione1
        value = String(value).split('');

        // soluzione2
        //  value= [...value ]

        // soluzione3
        // value= Array(value)
        break;

      case 'object':
        if (value == null) {
          value = [];
          break
        };
        // se abbiamo un array ritorniamo l'array quindi non facciamo nulla
        if (Array.isArray(value)) {
          break;
        }

        if (value instanceof Map) {
          /*
             // soluzione mia
           let value2 : Array<any> = [];
             for (const [key, val] of value) {
               value2.push(key, val);
             }
             value = value2;
             */

          //  soluzione docente
          value = Array.from(value.entries());
          break;
        }

        // soluzione 1
        value = Object.entries(value)

        // soluzione 2
        // let value2 : Array<any> = [];
        // for (const [key, val] of Object.entries(value)) {
        //   value2.push(key, val);
        // }
        // value = value2;

        break;
      default:
        console.error("tipo passato boolean | symbol | undefined");
        value = [];
        break;
    }
    console.log(value)
    return value;
  }

}
