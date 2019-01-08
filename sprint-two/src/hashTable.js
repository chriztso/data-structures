

var HashTable = function() {
  
  
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  var array1 = [];
  array1.push([k,v]);
  var storageArray = this._storage.get(index);
  if (!storageArray) {
    this._storage.set(index, array1);
  }
   else if (storageArray) {
    for (var i = 0; i < storageArray.length; i++) {
      if (storageArray[i][0] === k) {
        storageArray[i][1] = v;
      }  
    }
    if (storageArray[i] !== k) {
      storageArray.push([k, v]);
    }
   }
  };
  


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage1 = this._storage.get(index);
  for (var i = 0; i < storage1.length; i++) {
    if (storage1[i][0] === k) {
      return storage1[i][1];
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   var storage1 = this._storage.get(index);
  for(var i = 0; i < storage1.length; i++){
    if(storage1[i][0] === k){
      storage1.splice(i,1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


