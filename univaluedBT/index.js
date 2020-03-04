// Univalue Binary Tree: https://leetcode.com/problems/univalued-binary-tree/

// iterative solution
var isUnivalTree2 = function(root) {
  const queue = [root];
  const val = root.val;
  while (queue.length) {
      const width = queue.length;
      for (let i = 0; i < width; i++) {
          let node = queue.shift();
          if (node.val !== val) return false;
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
  return true;
}

// recursive solution
var isUnivalTree = function(root) {
    return helper(root, root.val)
};

var helper = function(root, val) {
    if (!root) return true;
    if (root.val !== val) {
        return false;
    } else {
        return helper(root.left, val) && helper(root.right, val);
    }
}


