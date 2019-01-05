var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeofqueue = 0;
  this.counter1 = 0;
  this.counter2 = 0;

};

Queue.prototype.enqueue = function(value) {
    this.storage[this.sizeofqueue] = value;
    this.sizeofqueue++;
    this.counter2++;
    }

Queue.prototype.dequeue = function() {
    var temp = this.storage[this.counter1];

    delete this.storage[this.counter1];
    this.counter1++;
    if(this.counter2 > 0){
      this.counter2--;
    }
    return temp;
 }

Queue.prototype.size = function() {
    return this.counter2;
 }

var Queue1 = new Queue();
  



