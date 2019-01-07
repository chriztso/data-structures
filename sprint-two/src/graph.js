

// Instantiate a new graph
var Graph = function() {

};
var Graph1 = new Graph();
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
for(var prop in this){
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
  for(var i = 0; i < this[prop].length; i++){
    if(this[prop][i] === node){
      this[prop].splice(i, 1);
    }
  }
} 

}
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
 var isFrom = _.contains(this[fromNode], toNode);
 var isTo = _.contains(this[toNode], fromNode);
 return isFrom && isTo;
}


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
    console.log(this);
}
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
       console.log(this);
      for(var i = 0; i < this[fromNode].length; i++){
          if(this[fromNode][i] === toNode){
            this[fromNode].splice(i, 1);
          }
      }
      for(var i = 0; i < this[toNode].length; i++){
          if(this[toNode][i] === fromNode){
            this[toNode].splice(i, 1);
          }
      }

}
  
  


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var prop in this){
    cb(prop);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


