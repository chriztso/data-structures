var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    var node = Node(value);
    if(this.head === null){
      this.tail = node;
      this.head = node;
      node.next = null;
    }
    else{
  
    } 
  };

  list.removeHead = function() {
    var tempHead = this.head;
    console.log('temphead:',tempHead);
    this.head = this.head.next;
    console.log('head:',this.head);
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
