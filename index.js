module.exports = function (year) {
  if (typeof year !== "number") {
    throw new Error("year must be a number");
  }

  // detect leap year
  return new Date(year, 1, 29).getDate() === 29;
};
