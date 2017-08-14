'use strict';

function Node(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
}

module.exports = Node;