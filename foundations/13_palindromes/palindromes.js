const palindromes = function (word) {
  const cleanword = remove(word).toLowerCase();
  console.log(cleanword);
  let start = 0;
  let end = cleanword.length - 1;
  while (start < end) {
    if (!(cleanword[start] == cleanword[end])) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

function remove(str) {
  return str.replace(/[!" #$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
}

// Do not edit below this line
module.exports = palindromes;
