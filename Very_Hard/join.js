/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/
function countOverlaps(a, b) {
  const maxOverlaps = Math.min(a.length, b.length);
  for (let i = maxOverlaps; i > 0; i--) {
    if (a.endsWith(b.slice(0, i))) {
      return i;
    }
  }
  return 0;
}

function join(arr) {
  let merged = arr[0];
  let minOverlap = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const k = countOverlaps(arr[i], arr[i + 1]);
    minOverlap = Math.min(minOverlap, k);
    merged += arr[i + 1].slice(k);
  }

  if (minOverlap === Infinity) minOverlap = 0;
  return [merged, minOverlap];
}
console.log(join(["lebron", "ronaldo", "messi"]));

exports.solution = join;