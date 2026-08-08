const filterEvenPositionWords = (sentence) => {
  if (typeof sentence !== "string") {
    return "Invalid Input";
  }

  let chankWord = sentence.split(" ");
  // console.log(chankWord);

  let findWord = chankWord.filter((word, index) => {
    return index % 2 === 0;
  });

  let finalSentence = findWord.join(" ");

  return finalSentence;
};

console.log(filterEvenPositionWords("The quick brown fox jumps"));
