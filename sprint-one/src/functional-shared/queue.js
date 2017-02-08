var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.count = 0;
  instance.enqueueIndex = 0;
  instance.dequeueIndex = 0;
  instance.storage = {};

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.enqueueIndex] = value;
  this.enqueueIndex++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }
  var dequeued = this.storage[this.dequeueIndex];
  this.dequeueIndex++;
  return dequeued;
};

queueMethods.size = function() {
  return this.count;
};

