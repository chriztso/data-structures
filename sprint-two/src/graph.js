

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

//O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

//O(n)
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var prop in this.storage) {
    if (Number(prop) === node) {
      return true;
    }
  }
  return false;
};

//O(n2)
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var prop in this.storage) {
    for (var i = 0; i < this.storage[prop].length; i++) {
      if (this.storage[prop][i] === node) {
        this.storage[prop].splice(i, 1);
      }
    }
  } 
};

//O(n)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isFrom = _.contains(this.storage[fromNode], toNode);
  var isTo = _.contains(this.storage[toNode], fromNode);
  return isFrom && isTo;
};


//O(n)
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {   
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

//O(n)
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      this.storage[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].length; i++) {
    if (this.storage[toNode][i] === fromNode) {
      this.storage[toNode].splice(i, 1);
    }
  }

};
  
  

//O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var prop in this.storage) {
    cb(parseInt(prop));
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


