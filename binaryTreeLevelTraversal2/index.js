/* Problem: https://leetcode.com/problems/binary-tree-level-order-traversal-ii */

var levelOrderBottom = function(root) {
  if (!root) return [];
  const queue = [root];
  const stack = [];
  const final = [];

  while (queue.length) {
      let len = queue.length;
      let arr = [];
      while (len > 0) {
          let temp = queue.shift();
          arr.push(temp.val);
          if (temp && temp.left) queue.push(temp.left);
          if (temp && temp.right) queue.push(temp.right);
          len--;
      }
      stack.push(arr);
  }
  while (stack.length) {
      final.push(stack.pop());
  }
  return final;
};
