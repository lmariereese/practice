// Binary Tree In-order Traversal: https://leetcode.com/problems/binary-tree-inorder-traversal/

/*
  Some test cases:
    [5,7,8,null,null,10,11]
    [1,null,2,3]
    []
    [1]
*/

// my recursive solution
var inorderTraversal = function(root) {
  if (!root) return [];
  const values = [];

  function DFS(root) {
      if (root.left) DFS(root.left);
      values.push(root.val);
      if (root.right) DFS(root.right);
      return root;
  }

  DFS(root);
  return values;
};


// an iterative solution for review
function inorderTraversal2(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
      console.log('res:', res)
      console.log('root:', root);
      console.log('stack:', stack);
      console.log();
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
