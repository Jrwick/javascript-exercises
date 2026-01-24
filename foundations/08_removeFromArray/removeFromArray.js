const removeFromArray = function (arr, ...toRemove) {
  for (let i = 0; i < arr.length; i++) {
    if (toRemove.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
