'use strict';

/*
* Representation of a Node in a Tree
*/
function Node(data){
    this.left = null;
    this.right = null;
    this.data = data;
};

/*
* Constructor function for BST
*/
function BinarySearchTree(){
    this.root = null;
}

/*
* Insert Element
*/
BinarySearchTree.prototype._insertElement = function(root, data) {
    if(root === null){
        root = new Node(data);
        return root;
    } else if(data <= root.data){
        root.left = this._insertElement(root.left, data);
    } else if(data > root.data){
        root.right = this._insertElement(root.right, data);
    }
    return root;
};

/*
* Public functionInsert Element
*/
BinarySearchTree.prototype.insert = function(data){
    this.root = this._insertElement(this.root, data);
}

BinarySearchTree.prototype.getMin = function(root) {
    if(root === null){
        return null;
    }

    while (root.left != null){
        root = root.left;
    }

    return root.data;
};

BinarySearchTree.prototype.getMax = function(root) {
    if(root === null){
        return null;
    }

    while (root.right != null){
        root = root.right;
    }

    return root.data;
};

BinarySearchTree.prototype.printMaxElement = function() {
  console.log('Printing Maximum Element: ' + this.getMax(this.root));
};

BinarySearchTree.prototype.printMinElement = function() {
    console.log('Printing Minimum Element: ' + this.getMin(this.root));
};

BinarySearchTree.prototype.getHeightOfTree = function(root) {
    if(root === null)
        return -1;

    return Math.max(this.getHeightOfTree(root.left), this.getHeightOfTree(root.right)) + 1;
};

BinarySearchTree.prototype.printHeightOfTree = function(root){
    console.log('Height of the Tree is: ' + this.getHeightOfTree(this.root));
};

/*
* In Order Traversal
*/
BinarySearchTree.prototype.inOrderTraversal = function(root) {
    if(root === null){
        return;
    };

    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
};

/*
* Print In-Order Traversal
*/
BinarySearchTree.prototype.printInOrderTraveral = function() {
    console.log('Printing In Order Traversal');
    this.inOrderTraversal(this.root);
};

/*
* Pre Order Traversal
*/
BinarySearchTree.prototype.preOrderTraversal = function(root) {
    if(root === null){
        return;
    };

    console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
};

/*
*Print Pre-Order Traversal
*/
BinarySearchTree.prototype.printPreOrderTraveral = function() {
    console.log('Printing Pre Order Traversal');
    this.preOrderTraversal(this.root);
};

/*
* Post Order Traversal
*/
BinarySearchTree.prototype.postOrderTraversal = function(root) {
    if(root === null){
        return;
    };

    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.data);
};

BinarySearchTree.prototype.printPostOrderTraveral = function() {
    console.log('Printing Post Order Traversal');
    this.postOrderTraversal(this.root);
};

(function(bst){

    bst.insert(10);
    bst.insert(5);
    bst.insert(17);
    bst.insert(3);
    bst.insert(7);
    bst.insert(15);

    bst.printHeightOfTree();

    bst.printMaxElement();

    bst.printMinElement();

    bst.printInOrderTraveral();

    bst.printPostOrderTraveral();

    bst.printPreOrderTraveral();
})(new BinarySearchTree());