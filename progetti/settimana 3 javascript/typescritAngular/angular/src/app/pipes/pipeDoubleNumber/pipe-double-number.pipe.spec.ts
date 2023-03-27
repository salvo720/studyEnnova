import { PipeDoubleNumberPipe } from './pipe-double-number.pipe';

describe('PipeDoubleNumberPipe', () => {
  // T.D.D : e l'acronimo di Test Driven Developmnent indica di scrivere i test solamento a quello che ci serve strettamente per essere sicuri che rispetti le specifiche
  it('create an instance', () => {
    const pipe = new PipeDoubleNumberPipe();
    expect(pipe).toBeTruthy();
  });


  it('should transform a string into a number', () => {
    const input = '10';
    const pipe = new PipeDoubleNumberPipe();
    const output = pipe.transform(input);
    expect(typeof output).toBe('number');
  });

  it('should transform a string into a number if string is not Nan', () => {
    const input = 'ciao';
    const risposta = 'inserisci un valore valido ';
    const pipe = new PipeDoubleNumberPipe();
    const output = pipe.transform(input);
    expect(typeof output).toBe(risposta);
  });


  it('if string is Nan return string', () => {
    const input = 'ciao';
    const pipe = new PipeDoubleNumberPipe();
    const output = pipe.transform(input);
    expect(typeof output).toBe('Nan');
  });

  it('if string is Number return number', () => {
    const input = 'ciao';
    const pipe = new PipeDoubleNumberPipe();
    const output = pipe.transform(input);
    expect(typeof output).toBe('number');
  });

});
