// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  str.slice(0).split('').forEach((c) => {
    if (charMap[c]) {
      charMap[c] += 1;
    } else {
      charMap[c] = 1;
    }
  });
  for (let k in charMap) {
    if (charMap[k] > max) {
      max = charMap[k];
      maxChar = k;
    }
  }
  return maxChar;
}

module.exports = maxChar;
