var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.enqueueIndex = 0;
  instance.dequeueIndex = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.enqueueIndex++;
  this.storage[this.enqueueIndex] = value;
};
queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }
  this.dequeueIndex++;
  return this.storage[this.dequeueIndex];
};
queueMethods.size = function() {
  return this.count;
};


