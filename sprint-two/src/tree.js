var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var flag = false;
  var search = function(item) {
    if (flag) {
      return;
    }
    if (item.value === target) {
      flag = true; 
    } else {
      return item.children.forEach( child => search(child));
    }
  };
  search(this);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
