var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  return newBinarySearchTree;
};

BinarySearchTree.prototype.insert = function(num) {
  var childTree = BinarySearchTree(num);
  var traverse = function(node) {
    if (childTree.value < node.value) {
      if (!node.left) {
        node.left = childTree;
      } else {
        traverse(node.left);
      }
    } else {
      if (!node.right) {
        node.right = childTree;
      } else {
        traverse(node.right);
      }
    }
  };
  traverse(this);
};

BinarySearchTree.prototype.contains = function(target) {
  var result = false;
  var search = function(node) {
    if (result) {
      return;
    }
    if (node.value === target) {
      result = true;
    } else if (node.value > target) {
      if (node.left !== null) {
        search(node.left);
      }
    } else {
      if (node.right !== null) {
        search(node.right);
      }
    }
  };
  search(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  var eachNode = function(node) {
    func(node.value);
    if (node.left !== null) {
      eachNode(node.left);
    }
    if (node.right !== null) {
      eachNode(node.right);
    }
  };
  eachNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
