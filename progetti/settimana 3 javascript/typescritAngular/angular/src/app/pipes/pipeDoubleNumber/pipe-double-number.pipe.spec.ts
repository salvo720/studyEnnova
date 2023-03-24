import { PipeDoubleNumberPipe } from './pipe-double-number.pipe';

describe('PipeDoubleNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeDoubleNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform a string into a number', () => {
    const input = 'ciao';
    const pipe = new PipeDoubleNumberPipe();
    const output = pipe.transform(input);
    expect(typeof output).toBe('number');

  });

});
