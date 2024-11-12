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
