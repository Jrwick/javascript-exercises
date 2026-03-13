const d = new Date().getFullYear();

const findTheOldest = function (people) {
  return people.reduce((current, next) => {
    let nextAge = (next.yearOfDeath || d) - next.yearOfBirth;
    let currentAge = (current.yearOfDeath || d) - current.yearOfBirth;
    if (nextAge > currentAge) {
      return next;
    } else {
      return current;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
