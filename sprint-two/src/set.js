var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//this._storage[item] = item;
if(_.indexOf(this._storage, item) === -1){
  this._storage.push(item);
  console.log(this._storage);
}
};

setPrototype.contains = function(item) {
/*for(var key in this._storage){
  if(key === item){
  return true;
  } 
}
*/
if(_.indexOf(this._storage, item) === -1){
    return false;
  }
else{
  return  true; 
}
//return _.indexOf(this._storage, item) === 1 ? true : false; 
};

setPrototype.remove = function(item) {
/*
for(var key in this._storage){
  if(key === item){
  delete this._storage[key];
  } 
}*/
for(var i = 0; i < this._storage.length; i++){
  if(this._storage[i] === item){
    this._storage.splice(i, 1);   
  }

}
console.log(this._storage);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
