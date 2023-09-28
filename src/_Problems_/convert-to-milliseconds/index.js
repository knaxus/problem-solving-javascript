function timeSinceMidnight(h, m, s) {
  // Convert hours, minutes, and seconds to milliseconds and calculate the total
  return (h * 3600 + m * 60 + s) * 1000;
}

module.exports = timeSinceMidnight;
