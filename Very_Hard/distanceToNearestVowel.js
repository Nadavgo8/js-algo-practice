/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

function distanceToNearestVowel(str) {
  const n = str.length;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const dist = new Array(n).fill(n - 1);
  for (let i = 0; i < n; i++) {
    if (vowels.has(str[i])) dist[i] = 0;
  }

  for (let i = 1; i < n; i++) {
    dist[i] = Math.min(dist[i], dist[i - 1] + 1);
  }

  for (let i = n - 2; i >= 0; i--) {
    dist[i] = Math.min(dist[i], dist[i + 1] + 1);
  }

  return dist;
}
exports.solution = distanceToNearestVowel;
