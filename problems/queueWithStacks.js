/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations 
    are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 */

    var MyQueue = function() {
        this.inbox = []
        this.outbox = []
    
    };

    MyQueue.prototype.push = function(x) {
        this.inbox.push(x)
    
    };

    MyQueue.prototype.pop = function() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                let el = this.inbox.pop()
                this.outbox.push(el)
            }
        }
        return this.outbox.pop()
    };
    MyQueue.prototype.peek = function() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                let el = this.inbox.pop()
                this.outbox.push(el)
            }
        }
        return this.outbox[this.outbox.length-1]
    };
    MyQueue.prototype.empty = function() {
        return this.outbox.length === 0 && this.inbox.length === 0
    };


    var obj = new MyQueue()
    obj.push(1)
    obj.push(2)
    obj.push(3)
    obj.push(4)
    obj.push(10)
    obj.push(20)
    obj.push(30)
    obj.push(40)
    console.log(obj.pop())
    console.log(obj.pop())
    console.log(obj.pop())
    console.log(obj.peek())


