// Binary tree preorder traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/

// my recursive solution
var preorderTraversal = function(root) {
  if (!root) return [];
  const values = [];

  function dfs(root) {
    values.push(root.val);
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
    return root;
  }
  dfs(root);
  return values;
};

// my iterative solution
var preorderTraversal = function(root) {
  const stack = [];
  const values = [];

  while (root || stack.length) {
    if (root) {
      values.push(root.val);
      if (root.right) stack.push(root.right);
      root = root.left;
    } else {
      root = stack.pop();
    }
  }
  return values;
};

