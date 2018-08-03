// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const base = findLargestFloor(n);
  const mid = Math.floor(base / 2);
  for (let r = 0; r < n; r++) {
    let floor = '';
    for (let c = 0; c < base; c++) {
      if (mid - r <= c && mid + r >= c) {
        floor += '#';
      } else {
        floor += ' ';
      }
    }
    console.log(floor);
  }
}

function findLargestFloor(n, floor = 0) {
  if (n === 1) {
    return floor + 1;
  }
  if (n === 0) {
    return 0;
  }
  return findLargestFloor(n - 1, floor + 2);
}

module.exports = pyramid;
