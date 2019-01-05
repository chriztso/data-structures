var Stack = function() {
	var someInstance = {};
	someInstance.storage = {}; 
	someInstance.counter1 = 0; 
	_.extend(someInstance, stackMethods);
	return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
}

var stackMethods = {
  push : function(value) {
    this.storage[this.counter1] = value;
    this.counter1++;
   
  },

  pop : function() {
     var temp = this.storage[this.counter1-1];
     delete this.storage[this.counter1-1];
   
    if(this.counter1 > 0){
      this.counter1--;
    } 
   
   return temp; 

  },

  size : function() {
    return this.counter1;
  }

}




