const monthNumber = (month) => {
  if (month === 1) {
    return "Jan";
  } else if (month === 2) {
    return "feb";
  } else if (month === 3) {
    return "Mar";
  } else if (month === 4) {
    return "april";
  } else if (month === 5) {
    return "May";
  } else if (month === 6) {
    return "june";
  } else if (month === 7) {
    return "july";
  } else if (month === 8) {
    return "aug";
  } else if (month === 9) {
    return "sep";
  } else if (month === 10) {
    return "oct";
  } else if (month === 11) {
    return "nov";
  } else if (month === 12) {
    return "dec";
  }
};

console.log(monthNumber(10));
