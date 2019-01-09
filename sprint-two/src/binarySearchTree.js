var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null; 
  newBST.right = null; 
  _.extend(newBST, bstPrototype);
  return newBST;
};




var bstPrototype = {};

//O(log n)
bstPrototype.insert = function(value) {
  
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      return this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      return this.right.insert(value);
    }
  }
};

//O(log n)
bstPrototype.contains = function(value) {
  if (this.value === value) {
    return true; 
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  } else if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  }
  return false;
};

//O(n)
bstPrototype.depthFirstLog = function(value) {
  var func = value;
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(value);
  }
  if (this.right) {
    this.right.depthFirstLog(value);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
