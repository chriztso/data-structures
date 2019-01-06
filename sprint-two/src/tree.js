var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true; 
  }
  else {
      if (this.children !== undefined) {
        for (var i = 0; i < this.children.length; i++) {
         return this.children[i].contains(target);
      }
    }
  }
};
  

  




/*
 * Complexity: What is the time complexity of the above functions?
 */
