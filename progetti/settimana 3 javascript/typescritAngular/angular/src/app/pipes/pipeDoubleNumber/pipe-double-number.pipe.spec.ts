import { PipeDoubleNumberPipe } from './pipe-double-number.pipe';

describe('PipeDoubleNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeDoubleNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
