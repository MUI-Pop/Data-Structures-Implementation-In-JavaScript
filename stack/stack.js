'use strict';

/**
 * Construtor function to initialize
 * @param {*} size 
 */
let Stack = function (size) {
    this.size = size;
    this.array = [];
    this.currentIndex = -1;
}

/*
* Return True if Stack is Empty
*/
Stack.prototype.isEmpty = function() {
    if(this.currentIndex === -1){
        return true;
    }
}

/*
* Return True if Stack is Full
*/
Stack.prototype.isFull = function() {
    if(this.currentIndex === this.size - 1)
        return true;
}

/*
* Insert Data into the front 
*/
Stack.prototype.push = function(data) {
    if(this.isFull()){
        console.error("Stack is Full");
        return;
    }

    this.currentIndex++;
    this.array[this.currentIndex] = data;
    
}

/*
* Delete the item at front and return the data
*/
Stack.prototype.pop = function() {
    if(this.isEmpty()){
        return "Stack is empty";
    }

    let data = this.array[this.currentIndex];
    this.array.splice(this.currentIndex, 1);
    this.currentIndex--;
    return data;
}

/*
* Return Top/Peek Element
*/
Stack.prototype.Top = function() {
    return this.array[this.currentIndex];
}

/*
* Insert the specified data at front of the stack
* Note: This uses Recursion to achive it.
*/
Stack.prototype.pushAtBottom = function(data){
    if(this.isEmpty()){
        this.push(data);
    } else {
        let popped = this.pop();
        this.pushAtBottom(data);
        this.push(popped);
    }
}

/*
* Reverse the Stack 
*/
Stack.prototype.reverse = function() {
    if (this.currentIndex != -1){
        let data = this.pop();
        this.reverse();
        this.pushAtBottom(data);
    }
}

/*
* Compare the data and insert
* Note: This uses Recursion to achive it.
*/
Stack.prototype.compareAndInsert = function(data){
    if(this.isEmpty()){
        this.push(data);
    } else if (data < this.Top()){
        let popped = this.pop();
        this.compareAndInsert(data);
        this.push(popped);
    } else {
        this.push(data);
    }
}

/*
* Sort the Stack
*/
Stack.prototype.sort = function(){
    if (this.currentIndex != -1){
        let data = this.pop();
        this.sort();
        this.compareAndInsert(data);
    }
}

/*
* List all Items in the stack
*/
Stack.prototype.listItems = function () {
    console.log(this.array);
};

/*
* Function to test the logic
*/
(function(stack) {

    //Verify if Stack Empty
    console.log('Is Stack Empty ?: ' + stack.isEmpty());

    //Push Data
    stack.push(5);
    stack.push(4);
    stack.push(3);

    //List Items - 5,4,3
    stack.listItems();

    //Push should throw Stack is full
    stack.push(2);

    //Pop Items
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log('Is Stack Empty ?: ' + stack.isEmpty());

    //Throws Stack is empty
    console.log('Attempt to pop on an empty stack throws message: ' + stack.pop());

    //Push again
    stack.push(3);
    stack.push(1);
    stack.push(2);
    console.log('Items before Reverse')
    stack.listItems();

    //Reverse Stack
    console.log('Items after Reverse')
    stack.reverse();
    stack.listItems();

    //Sort
    stack.sort();
    stack.listItems();
    
})(new Stack(3));