class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  this.storage = {};
  this.sizeofqueue = 0;
  this.counter1 = 0;
  this.counter2 = 0;
  }

    enqueue(value) {
    this.storage[this.sizeofqueue] = value;
    this.sizeofqueue++;
    this.counter2++;
    }

    dequeue () {
    var temp = this.storage[this.counter1];

    delete this.storage[this.counter1];
    this.counter1++;
    if(this.counter2 > 0){
      this.counter2--;
    }
    return temp;
    }

    size () {
    return this.counter2;
    }
  }  