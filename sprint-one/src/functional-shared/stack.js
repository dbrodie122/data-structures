var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var size = 0;
  var instance = {};
  instance.count = 0;
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};
stackMethods.pop = function() {
  var popped = this.storage[this.count];
  if (this.count > 0) {
    this.count--;
  }
  return popped;
};
stackMethods.size = function() {
  return this.count;
};


