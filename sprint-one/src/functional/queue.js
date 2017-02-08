var Queue = function() {
  var someInstance = {};
  var size = 0;
  var enqueueIndex = 0;
  var dequeueIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    enqueueIndex++;
    storage[enqueueIndex] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
    dequeueIndex++;
    return storage[dequeueIndex];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
