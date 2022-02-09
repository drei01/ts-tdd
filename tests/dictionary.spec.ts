import { Dictionary, IDictionary } from '@app/dictionary';

describe('Dictionary', () => {
  let dictionary: IDictionary<string>;
  
  beforeEach(() => {
    dictionary = new Dictionary<string>();
  })

  it('should return size', () => {
    expect(dictionary.size()).toBe(0);
  });

  it('should put value at key', () => {
    dictionary.put('first', 'is it work?');

    expect(dictionary.size()).toBe(1);
  });

  it('throw error when key already exists', () => {
    dictionary.put('first', 'is it work?');

    expect(() => dictionary.put('first', 'or not?')).toThrowError();
    expect(dictionary.size()).toBe(1)
  })

  it('should remove value by key', () => {
    dictionary.put('first', 'is it work?');

    dictionary.remove('first');

    expect(dictionary.size()).toBe(0);
  });

  it('throw error when key not found - remove', () => {
    dictionary.put('first', 'is it work?');

    dictionary.remove('first');

    expect(() => dictionary.remove('first')).toThrowError();
    expect(dictionary.size()).toBe(0)
  })

  it('should get value by key', () => {
    dictionary.put('first', 'is it work?');
    const firstValue = dictionary.get('first');

    expect(firstValue).toBe('is it work?');
  })

  it('throw error when key not found - get', () => {
    expect(() => dictionary.get('first')).toThrowError();
    expect(dictionary.size()).toBe(0)
  })
})