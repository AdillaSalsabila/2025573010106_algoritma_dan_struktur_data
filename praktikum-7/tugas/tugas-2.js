class MinStack {
    constructor() {
        this.stack = [];    
        this.minStack = []; 
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }
    pop() {
        if (this.stack.length === 0) return null;

        const removedValue = this.stack.pop();
        if (removedValue === this.getMin()) {
            this.minStack.pop();
        }

        return removedValue;
    }
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();

console.log("=== MEMULAI PENGUJIAN MIN STACK ===");
minStack.push(5);
console.log(`Push(5) -> Stack: [${minStack.stack}] | MinStack: [${minStack.minStack}]`);

minStack.push(3);
console.log(`Push(3) -> Stack: [${minStack.stack}] | MinStack: [${minStack.minStack}]`);
minStack.push(7);
console.log(`Push(7) -> Stack: [${minStack.stack}] | MinStack: [${minStack.minStack}]`);

minStack.push(2);
console.log(`Push(2) -> Stack: [${minStack.stack}] | MinStack: [${minStack.minStack}]`);

console.log(`\n-> getMin() saat ini = ${minStack.getMin()} (Ekspektasi: 2)`);

minStack.pop();
console.log(`\nPop() dilakukan -> Stack setelah pop: [${minStack.stack}]`);
console.log(`-> getMin() setelah pop = ${minStack.getMin()} (Ekspektasi: 3)`);

minStack.pop();
console.log(`\nPop() dilakukan -> Stack setelah pop: [${minStack.stack}]`);

console.log(`-> getMin() setelah pop kedua = ${minStack.getMin()} (Ekspektasi: 3)`);