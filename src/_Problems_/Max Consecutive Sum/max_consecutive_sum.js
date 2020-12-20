function max_consecutive_sum(numbers, k) {
    let result = 0;
    let temp = 0;
    if(k > numbers.length){
        return "Invalid Request";
    }
    for (var i = 0; i < k - 1; i++) {
      temp += numbers[i];
    }
    for (var i = k - 1; i < numbers.length; i++) {
      temp += numbers[i];
      if (temp > result) {
        result = temp;
      }
      temp -= numbers[i - k + 1];
    }
    return result;
  }

  module.exports = {
    max_consecutive_sum,
};
