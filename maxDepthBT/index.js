// Maxiumum Depth of Binary Tree: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Can solve with a queue which I didn't do
var maxDepth = function(root) {
  if (!root) return 0;
  const queue = [root]
  let depth = 0

  while (queue.length) {
      const size = queue.length;
      for(let i = 0; i < size;i++) {
          let node = queue.shift();
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right)
      }
      depth ++;
  }

  return depth;
};

// my solution using recursion
var maxDepth = function(root) {
  if (!root) return 0;
  return helper(root, 0);
};

var helper = function(root, max) {
  if (!root) return max;
  return Math.max(helper(root.right, max + 1), helper(root.left, max + 1));
}
