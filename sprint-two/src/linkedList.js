var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    var node = Node(value);
    if(this.head === null){
     this.head = node; 
     this.tail = node;
    }
    else{
    var current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
    this.tail = node;
    }  
};

  list.removeHead = function() {
    var tempHead = this.head;
    this.head = this.head.next;
    return tempHead;
  };

  list.contains = function(target) {
  };

  return list;
    }


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
