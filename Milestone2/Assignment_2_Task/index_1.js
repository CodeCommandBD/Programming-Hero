// Part 1 — The Problem-Solving Framework


// Worked Example — Largest of Three Numbers
// U — Understand:  Given three numbers, find which one is the biggest.
// P — Plan:  Compare a vs b vs c using if-else — whichever is bigger than both others is the answer.
// E — Execute:  Write the if-else chain (see code below).
// R — Review:  Test with (5,5,5) — a tie. Test with negative numbers. Does it still work?



function findLargest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
 
console.log(findLargest(12, 45, 7));  // 45



