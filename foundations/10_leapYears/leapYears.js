/*
const leapYears = function (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};
*/

const leapYears = function (year) {
  return year % 400 == 0 ? true : year % 4 == 0 && year % 100 != 0;
};

//700 1900

// Do not edit below this line
module.exports = leapYears;
