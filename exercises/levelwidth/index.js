// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const FLAG = 'flag';
  const arr = [root, FLAG];
  const levels = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === FLAG) {
      levels.push(0);
      arr.push(FLAG);
    } else {
      arr.push(...node.children);
      levels[levels.length - 1]++;
    }
  }
  return levels;
}

module.exports = levelWidth;
