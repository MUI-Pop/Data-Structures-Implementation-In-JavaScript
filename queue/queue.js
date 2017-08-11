'use strict';

/*
* Constructor function to initialize Queue.
*/
function Queue(size) {
    this.capacity = size;
    this.size = 0;
    this.front = -1;
    this.rear = -1;
    this.array = [];
}

/*
* Return True if Queue is full
*/
Queue.prototype.isFull = function(){
    if(this.size === this.capacity){
        return true;
    }
};

/*
* Return True if Queue is Empty
*/
Queue.prototype.isEmpty = function(){
    if(this.size === 0){
        return true;
    }
};

/*
* Add item to the rear of queue
*/
Queue.prototype.enQueue = function(data){
    if (this.isFull()){
        console.error("Queue is full");
        return;
    };

    if(this.rear === -1){
        this.rear++;
        this.front++;
        this.array[this.rear] = data;        
    } else {
        this.rear++;
        this.array[this.rear] = data;
    }
    this.size++;
};

/*
* Delete Item from the front of the queue
*/
Queue.prototype.deQueue = function(){
    if(this.isEmpty()){
        console.error("Queue is empty");
        return;
    }

    if(this.front === this.rear){
        delete this.array[this.front];
        this.front = -1;
        this.rear = -1;
        this.size--;
        return;
    }

    delete this.array[this.front];
    this.front++;
    this.size--;
};

/*
* List All Items
*/
Queue.prototype.listItems = function(){
    console.log(this.array);
};

/*
* Driver Program
*/
(function(queue){

    //Add Item to queue
    queue.enQueue(5);
    queue.enQueue(3);
    queue.enQueue(1);
    queue.enQueue(2);

    console.log("Display Queue is full");
    queue.enQueue(4);

    //List All Items
    queue.listItems();

    //Remove Items
    queue.deQueue();
    queue.deQueue();
    queue.deQueue();
    queue.deQueue();
    queue.deQueue();
    console.log("Display Queue is Empty", queue.isEmpty());

    //Display Empty list
    queue.listItems();

    //Add Again
    queue.enQueue(5);
    queue.enQueue(3);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(4);    
    queue.listItems();

})(new Queue(5));