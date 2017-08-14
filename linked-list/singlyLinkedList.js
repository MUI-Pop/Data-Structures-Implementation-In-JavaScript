'use strict';
let Node = require('./node');

/*
* Constructor Function to initialize SinglyLinkedList
*/
function SinglyLinkedList(){
    this.head = null;
};

/*
* Return true if SinglyLinkedList is empty
*/
SinglyLinkedList.prototype.isEmpty = function(){
    return this.head === null;
};

/*
* Add Item to the last
*/
SinglyLinkedList.prototype.addItem = function(data){
    let newNode = new Node(data);
    
    if (this.isEmpty()){
        this.head = newNode;
        return;
    }

    let tempNode = this.head;
    while(tempNode.next != null){
        tempNode = tempNode.next;
    };

    tempNode.next = newNode;
};

/*
* Remove the given item from the linked list
*/
SinglyLinkedList.prototype.removeItem = function(data){
    let tempNode = this.head;

    if(this.head.data === data){
        this.head = tempNode.next;
        tempNode.next = null;
        return;
    };
    
    while(tempNode.next != null){
        if(tempNode.next.data === data)
            break;
        tempNode = tempNode.next;
    };
    tempNode.next = tempNode.next.next;
};

/*
* List all Items
*/
SinglyLinkedList.prototype.listAllItems = function (){
    if (this.isEmpty()){
        return;
    }

    let tempNode = this.head;
    while(tempNode.next != null){
        console.log(tempNode.data);
        tempNode = tempNode.next;
    };
    console.log(tempNode.data);
};

/*
* Drive the implementation
*/
(function(singlyLinkedList){
    //Add Items to the list
    singlyLinkedList.addItem(1);
    singlyLinkedList.addItem(2);
    singlyLinkedList.addItem(3);
    singlyLinkedList.addItem(4);
    singlyLinkedList.addItem(5);

    console.log('Items in the list after insertion');
    singlyLinkedList.listAllItems();

    //Remove First Item
    singlyLinkedList.removeItem(1);
    console.log('Items in the list after deleting data in HEAD');
    singlyLinkedList.listAllItems();

    console.log('Items in the list after deleting 3');
    singlyLinkedList.removeItem(3);
    singlyLinkedList.listAllItems();
    console.log('Should Return false: ' +singlyLinkedList.isEmpty());
    
    console.log('Items in the list after deleting 2');
    singlyLinkedList.removeItem(2);
    singlyLinkedList.listAllItems();
    console.log('Should Return false: ' +singlyLinkedList.isEmpty());

    singlyLinkedList.removeItem(4);
    console.log('Items in the list after deleting data in HEAD');
    singlyLinkedList.listAllItems();
    console.log(singlyLinkedList.head);

    singlyLinkedList.removeItem(5);
    console.log('Items in the list after deleting data in HEAD');
    singlyLinkedList.listAllItems();
    console.log('Head should be null: ' +singlyLinkedList.head);

    //Add Items to the list
    singlyLinkedList.addItem(1);
    singlyLinkedList.addItem(2);
    singlyLinkedList.addItem(3);
    singlyLinkedList.addItem(4);
    singlyLinkedList.addItem(5);

    console.log('Items in the list after insertion');
    singlyLinkedList.listAllItems();
})(new SinglyLinkedList());