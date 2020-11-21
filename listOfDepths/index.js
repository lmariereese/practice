/*
  Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists).
*/

// function Node(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// function listOfDepths(root) {
//   let cache = {}
//   let depth = 0;
//   const queue = [root];

//   while (queue.length) {
//     let currDepth = depth + 1;
//     let counter = queue.length;
//     let head = null;
//     let curr = head;
//     while (counter > 0) {
//       let temp = queue.shift();
//       if (head === null) {
//         head = new Node(temp.val);
//         curr = head.next;
//       } else {
//         curr = new Node(temp.val);
//         curr = curr.next;
//       }
//       if (temp.left) queue.push(temp.left);
//       if (temp.right) queue.push(temp.right);
//       counter--;
//     }
//     cache[currDepth] = head;
//     depth = currDepth;
//   }
//   return cache;
// }
