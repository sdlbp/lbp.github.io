const arr = [1,2,3,4,5];
/**
 * 反转数组元素，递归版本
 * p20
 * @param array
 * @param l
 * @param r
 * @returns {undefined}
 */
function reverse (array, l, r) {
  if (r > l) {
    const lv = array[l]
    const rv = array[r]
    array[l] = rv
    array[r] = lv
    return reverse(array, l+1, r-1)
  }
}
reverse(arr, 0, 4)
console.log('1.js', '18', '', new Date(), arr)


/**
 * 求和数组，递归
 * p17
 * @param array
 * @param n
 * @returns {number|*}
 */
function sum(array, n) {
  if (n < 1) {
    return 0;
  } else {
    return sum(array, n - 1) + array[n - 1]
  }
}

console.log('1.js', '9', '', new Date(), sum([1,2,3], 3))
