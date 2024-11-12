// 直接调用数组已有的队列方法
class Queue<T> {
    private items: T[] = [];
    enqueue(item: T): void {
        this.items.push(item);
    }
    dequeue(): T | undefined {
        return this.items.shift();
    }
    front(): T | undefined {
        return this.items[0];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    tail() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

// test
let queue = new Queue<number>();
queue.enqueue(200);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());

console.log('----------------------------------------------');


// 自己实现
class Queue2<T> {
    queue: T[] = [];
    l: number
    r: number

    constructor(n: number) {
        this.queue = new Array(n);
        this.l = 0;
        this.r = 0;
    }

    isEmpty() : boolean {
        return this.l == this.r
    }

    enqueue(num: T) {
        if(this.r == this.queue.length) {
            throw new Error("队列已满")
        }
        this.queue[this.r++] = num
    }

    dequeue() {
        if(this.l == this.r) {
            throw new Error("队列已空")
        }
        return this.queue[this.l++]
    }

    front() {
        if(this.l == this.r) {
            throw new Error("队列已空")
        }
        return this.queue[this.l]
    }

    tail() {
        if(this.l == this.r) {
            throw new Error("队列已空")
        }
        return this.queue[this.r - 1]
    }

    size() {
        return this.r - this.l
    }

}

// test
let queue2 = new Queue2<number>(4);
queue2.enqueue(200);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);
// queue2.enqueue(5);
console.log(queue2.dequeue());
console.log(queue2.front());
console.log(queue2.isEmpty());
console.log(queue2.tail());


