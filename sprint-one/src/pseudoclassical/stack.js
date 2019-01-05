var Stack = function() {
    this.storage = {}; 
	  this.counter1 = 0; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function(value) {
    this.storage[this.counter1] = value;
    this.counter1++;
   
  }

Stack.prototype.pop = function() {
     var temp = this.storage[this.counter1-1];
     delete this.storage[this.counter1-1];
   
    if(this.counter1 > 0){
      this.counter1--;
    } 
   
   return temp; 

}

Stack.prototype.size = function() {
    return this.counter1;
}

var Stack1 = new Stack();




