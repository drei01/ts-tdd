import { Dictionary } from '@app/dictionary';

describe('Dictionary', () => {
  let dictionary: Dictionary<string>;
  
  beforeEach(() => {
    dictionary = new Dictionary<string>();
  })

  it('should return size', () => {
    expect(dictionary.size()).toBe(0);
  });

  it('should put object on specific key', () => {
    dictionary.put('first', 'is it work?');

    expect(dictionary.size()).toBe(1);
  });

  it('throw error when key already exists', () => {
    dictionary.put('first', 'is it work?');

    expect(() => dictionary.put('first', 'or not?')).toThrowError();
    expect(dictionary.size()).toBe(1)
  })

  it('should remove object by key', () => {
    dictionary.put('first', 'is it work?');

    dictionary.remove('first');

    expect(dictionary.size()).toBe(0);
  });

  it('throw error when key not found during remove', () => {
    dictionary.put('first', 'is it work?');

    dictionary.remove('first');

    expect(() => dictionary.remove('first')).toThrowError();
    expect(dictionary.size()).toBe(0)
  })

  it('should return value by key', () => {
    dictionary.put('first', 'is it work?');
    const firstValue = dictionary.get('first');

    expect(firstValue).toBe('is it work?');
  })

  it('throw error when key not found during get', () => {
    expect(() => dictionary.get('first')).toThrowError();
    expect(dictionary.size()).toBe(0)
  })
})