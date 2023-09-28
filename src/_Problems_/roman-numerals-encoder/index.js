function integerToRoman(num) {
  // Define the Roman numeral symbols and their corresponding values
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = '';

  for (let i = 0; i < symbols.length; i++) {
    while (num >= values[i]) {
      romanNumeral += symbols[i];
      num -= values[i];
    }
  }

  return romanNumeral;
}

module.exports = integerToRoman;
