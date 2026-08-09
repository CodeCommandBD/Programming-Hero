function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  let allWords = caption.split(" ");

  // console.log(splitSentence);

  let hashtagWords = allWords.filter((word) => {
    return word.startsWith("#");
  });

  // console.log(filterWord);

  let longestHashtagText= "";

  let removeTag = hashtagWords.map((item) => {
    let mention = item.slice(1);
    // console.log(mention);

    if (mention.length > longestHashtagText.length) {
      longestHashtagText = mention;
    }
    return mention;
  });

  return { hashtagCount: hashtagWords.length, longestTag: longestHashtagText };
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
