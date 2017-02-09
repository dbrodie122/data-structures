var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0; 
  this.enqueueIndex = 0;
  this.dequeueIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.enqueueIndex] = value;
  this.enqueueIndex++; 
};
Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }
  var dequeued = this.storage[this.dequeueIndex];
  this.dequeueIndex++;
  return dequeued;
};
Queue.prototype.size = function() {
  return this.count;
};


