/**
 * lodash中文 https://www.lodashjs.com/docs/lodash.debounce
 *
 */
// region 函数
const after = function (n, func) {
  let num = n || 0;
  return function (...args) {
    num -= 1;
    if (num <= 0) {
      return func.apply(this, args);
    }
  }
}


// const testAfter = after(3, (...args) => {
//   console.log('--lbp 18', 'index.js', '', args);
// })
//
// for (let i = 0; i < 5; i++) {
//   console.log('--lbp 22', 'ary.js', '', i);
//   testAfter(i)
// }

const ary = function (func, n = func.length) {
  return function (...args) {
    return func.apply(this, args.slice(0, n))
  }
};

const testAry = ary(function (...args) {
  console.log('--lbp 33', 'index.js', '', ...args);
}, 3)

console.log('--lbp 36', 'index.js', '', testAry(1,2,3,4,5));


const before = function (n, func) {
  let num = 0;
  let result = null;
  return function (...args) {
    if (num > n) return result;
    num += 1;
    result = func.apply(this, args)
    return result
  }
};

// const testBefore = before(4, (...args) => {
//   return args;
// })
// for (let i = 0; i < 10; i++) {
//   console.log('--lbp 41', 'index.js', '', testBefore(i));
// }
/**
 * 防抖函数
 * 从上次被调用之后，延迟wait执行
 * TODO lodash 实现的挺复杂
 * @param func
 * @param wait
 * @returns {function(...[*]=)}
 */
const debounce = function (func, wait) {
  let timer = null
  function debounced (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(null, args)
      if (timer) clearTimeout(timer)
      timer = null;
    }, wait);
  }
  return debounced;
};

const dlog = debounce(function (i) {
  console.log('--lbp 14', 'index.js', '', i);
}, 1000)
for (let i = 0; i < 10; i++) {
  dlog(i)
}
// endregion
