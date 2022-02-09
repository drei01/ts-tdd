type Container<T> = {
  [key: string]: T
};

export interface IDictionary<T> {
  get(key: string): T;
  put(key: string, value: T): void;
  remove(key: string): void;
  size(): number;
}

export class Dictionary<T> implements IDictionary<T> {
  private readonly container: Container<T>
  private length: number

  constructor() {
    this.container = {}
    this.length = 0
  }

  remove(key: string): void {
    if(!this.container[key]) {
      throw new Error('Key not found')
    }

    delete this.container[key]
    this.length -= 1
  }

  put(key: string, value: T): void {
    if(this.container[key]) {
      throw new Error('Key already exists')
    }

    this.container[key] = value
    this.length += 1
  }

  get(key: string): T {
    const value = this.container[key]

    if(!value) {
      throw new Error('Key not found')
    }

    return value
  }

  size(): number {
    return this.length
  }
}