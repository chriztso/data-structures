var Queue = function() {
	var someInstance = {};

  someInstance.storage = {};
  someInstance.sizeofqueue = 0;
  someInstance.counter1 = 0;
  someInstance.counter2 = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
	enqueue : function(value) {
    this.storage[this.sizeofqueue] = value;
    this.sizeofqueue++;
    this.counter2++;
    },

    dequeue : function() {
    var temp = this.storage[this.counter1];

    delete this.storage[this.counter1];
    this.counter1++;
    if(this.counter2 > 0){
      this.counter2--;
    }

    return temp;
    },

  size : function() {
    return this.counter2;
  }

  
};



