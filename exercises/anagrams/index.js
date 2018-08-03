// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const formatA = formatStr(stringA);
  const formatB = formatStr(stringB);
  if (formatA.length !== formatB.length) { return false; }
  const charCountA = buildCharMap(formatA);
  const charCountB = buildCharMap(formatB);
  for (k in charCountA) {
    if (charCountA[k] !== charCountB[k]) {
      return false;
    }
  }
  return true;
}

function formatStr(str) {
  const formatted = str.replace(/[^\w]/g, '').toLowerCase();
  return formatted;
}

function buildCharMap(str) {
  const charCount = {};
  str.split('').forEach((c) => {
    if (charCount[c]) {
      charCount[c] += 1;
    } else {
      charCount[c] = 1;
    }
  });
  return charCount;
}

module.exports = anagrams;
