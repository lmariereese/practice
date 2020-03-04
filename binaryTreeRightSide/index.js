// https://leetcode.com/problems/binary-tree-right-side-view/

// my solution: 64ms
var rightSideView = function(root) {
  if (!root) return [];
  const queue = [root];
  const results = [];

  while (queue.length) {
      const size = queue.length;
      const nodeAtSameDepth = [];
      for (let i = 0; i < size; i++) {
          let node = queue.shift();
          nodeAtSameDepth.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      results.push(nodeAtSameDepth[nodeAtSameDepth.length - 1])
  }
  return results;
};

/*
  Other people's solutions that were faster than mine
*/

// 44ms
var rightSideView2 = function(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
      result.push(queue[queue.length - 1].val);
      let elements = queue.length;
      let item;
      for (let i = 0; i < elements; i++) {
          item = queue.shift();
          if (item.left) queue.push(item.left);
          if (item.right) queue.push(item.right);
      }
  }

  return result;
};

// 60ms
var rightSideView1 = function (root) {
	let res = [];
	let queue = [];
	// corner case
	if (root === null) {
		return res;
	}
	// normal case
	queue.push(root);
	while (queue.length !== 0) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let cur = queue.shift();
			if (i === size - 1) {
				res.push(cur.val);
			}
			if (cur.left !== null) {
				queue.push(cur.left);
			}
			if (cur.right !== null) {
				queue.push(cur.right);
			}
		}
	}
	return res;
};

