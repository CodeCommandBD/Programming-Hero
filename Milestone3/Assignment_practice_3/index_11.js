const charFrequency = (str) => {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let frequencyObj = {};

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    frequencyObj[str[i]] =( frequencyObj[str[i]] || 0) + 1;
  }

  console.log(frequencyObj);
};

console.log(charFrequency("hero"));
console.log(charFrequency("hello"));
