function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = "";

  // Go through the symbols from largest to smallest
  for (let i = 0; i < 7; i++) {
    let symbol = obj[i][0];
    let value = obj[i][1];

    let count = Math.floor(num / value);

    result += symbol.repeat(count);

    num = num % value;
  }

  return result;
}

// do not edit below this line
module.exports = convertToRoman;