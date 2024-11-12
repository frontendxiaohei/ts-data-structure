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

console.log('------------------------------');


class Stack2<T> {
    stack: T[] = [];
    size: number

    constructor(n: number) {
        this.stack = new Array(n);
        this.size = 0
    }

    isEmpty() : boolean {
        return this.size == 0

    }

    push(num: T) {
        if(this.size == this.stack.length) {
            throw new Error("栈已满")
        }
        this.stack[this.size++] = num
    }

    pop() {
        return this.stack[--this.size]
    }

    peek() {
        return this.stack[this.size - 1]
    }
}

// test
let stack2 = new Stack2<number>(5);
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(5);
console.log(stack2.pop())
console.log(stack2.peek());
console.log(stack2.isEmpty());








