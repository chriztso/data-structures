var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeofqueue = 0;
  var counter1 = 0;
  var counter2 = 0;
 
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[sizeofqueue] = value;
    sizeofqueue++;
    counter2++;
  };

  someInstance.dequeue = function() {
    var temp = storage[counter1];
    

    delete storage[counter1];
    counter1++;
    if(counter2 > 0){
      counter2--;
    }

    return temp;
  };

  someInstance.size = function() {
    return counter2;
  };

  return someInstance;
};
