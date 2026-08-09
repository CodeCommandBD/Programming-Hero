function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (let score of scores) {
    // console.log(score);
    
    if (typeof score !== "number") {
      return "Invalid";
    }
  }

  let newScores = scores.map((score) => {
    // console.log(score);
    return score + 10;
  });

//   console.log(newScores);

  let total = newScores.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);

  return total
}

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));
