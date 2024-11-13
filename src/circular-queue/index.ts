class CircularQueue<T> {
  private items: T[];
  private limit: number;
  private l: number;
  private r: number;
  private size: number;

  constructor(limit: number) {
    this.items = [];
    this.limit = limit;
    this.l = 0;
    this.r = 0;
    this.size = 0;
  }

  enQueue(item: T): boolean {
    if (this.isFull()) {
        return false
    } else {
        this.items[this.r] = item;
        this.r = (this.r + 1) % this.limit;
        this.size++;
        return true
    }
  }
  deQueue() : boolean {
    if(this.isEmpty()) {
        return false
    } else {
        this.l = (this.l + 1) % this.limit;
        this.size--;
        return true
    }
  }

  front() : T | -1 {
    if(this.isEmpty()) {
        return -1
    } else {
        return this.items[this.l]
    }
  }


  rear() : T | -1 {
    if(this.isEmpty()) {
        return -1
    } else {
        let last = this.r === 0 ? this.limit - 1 : this.r - 1;
        return this.items[last]
    }
  }



  isEmpty() : boolean {
    return this.size === 0;
  }

  isFull() : boolean {
    return this.size === this.limit;
  }

}