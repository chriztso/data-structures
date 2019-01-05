var Stack = function() {
	var someInstance = Object.create(stackMethods);
	someInstance.storage = {}; 
	someInstance.counter1 = 0; 
	return someInstance;
  // Hey! Rewrite in the new stvar someInstance = {};
};

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



};


