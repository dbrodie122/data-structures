var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var linkedListNode = Node(value);
    if (list.head === null) {
      list.head = linkedListNode;
    } 
    if (list.tail === null) {
      list.tail = linkedListNode;
    } else {
      list.tail.next = linkedListNode; 
      list.tail = linkedListNode;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    var node = list.head;
    var find = function(item) {
      if (item.value === target) {
        return true;
      } else if (item.next === null) {
        return false;
      } else {
        return find(item.next);
      }
    };
    return find(node);
    //check the first value in the list for the target
    //if it's there, return it,
    //if it's not, check the next value.
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */