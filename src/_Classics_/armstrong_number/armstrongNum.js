/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

function armstrongNum(num) {
  num = (!Number.isNaN(Number(num))) ? parseInt(Math.abs(Number(num)), 10).toString() : (() => { throw Error('error'); })();
  let total = 0;
  for (let i = 0; i < num.length; i += 1) {
    total += num[i] ** num.length;
  }
  // eslint-disable-next-line no-unneeded-ternary
  return (total === Math.abs(Number(num))) ? true : false;
}
module.exports = armstrongNum;
