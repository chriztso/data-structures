

// Instantiate a new graph
var Graph = function() {

};
var Graph1 = new Graph();
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
this[node] = [];
console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
for(var prop in this){
   console.log(prop);
  if(Number(prop) === node){
   return true;
  }
 }
return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
 
delete this[node];
for(var prop in this){
 this.removeEdge(node, prop);
}
}
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var prop in this){
    if(Number(prop) === toNode){
        for(var i = 0; i < this[prop].length; i++){
          if(this[prop][i] === fromNode){
            return true;
          }
        }
    }      
};
return false; 
}


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for(var prop in this){
    if(Number(prop) === toNode){
       this[toNode].push(fromNode);
    }
  }
console.log(this);
}
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
      this[fromNode] = this[fromNode].filter(function(x){return x !== toNode;});
      this[toNode] = this[toNode].filter(function(x){return x !== fromNode;});
}
  
  


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


