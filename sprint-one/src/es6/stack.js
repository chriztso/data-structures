class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}; 
	this.counter1 = 0; 
  }

  push (value) {
    this.storage[this.counter1] = value;
    this.counter1++;
   
  }

  pop () {
     var temp = this.storage[this.counter1-1];
     delete this.storage[this.counter1-1];
   
    if(this.counter1 > 0){
      this.counter1--;
    } 
   
   return temp; 

}

size () {
    return this.counter1;
}

}