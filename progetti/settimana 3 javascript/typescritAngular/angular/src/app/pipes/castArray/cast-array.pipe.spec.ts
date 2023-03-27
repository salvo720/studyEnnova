import { CastArrayPipe } from './cast-array.pipe';

const pipe = new CastArrayPipe();

describe('CastArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new CastArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should verify if type is string and returng string splitted ', () => {
    const input: string = 'test';
    const output: Array<string> = pipe.transform(input);
    const joinedOutput = output.join('');
    expect(input).toBeTruthy(joinedOutput);
  });


  it('should return an Array<string> starting from string  ', () => {
    // genera una stringa di input di s7 caratteri casuali
    const input: string = (Math.random() + 1).toString(36).substring(7);
    const output: Array<string> = pipe.transform(input);
    const joinedOutput = output.join('');
    expect(input).toBeTruthy(joinedOutput);
  });

  it('should return an Array<string> starting from string  ', () => {
    // genera una stringa di input di s7 caratteri casuali
    const input: number = (Math.random() + 1) * 100_000;
    const output: Array<number> = pipe.transform(input);
    const joinedOutput = Number(output.join(''));
    expect(input).toBeTruthy(joinedOutput);
  });

  it('should return an ([key,value]) passing an object ', () => {
    // genera una stringa di input di s7 caratteri casuali
    const input: Object = {firstName : 'luca' , lastName : 'Pagliaro'}
    const output: Array<any> = pipe.transform(input);
    const outputToObj = Object.fromEntries(output);
    expect(outputToObj).toEqual(input);
  });
});
