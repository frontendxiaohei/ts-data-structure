class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}


// test
let stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop())
console.log(stack.peek());
console.log(stack.isEmpty());






