// 潘俊的函数式编程代码学习

// region 2
// region 2.7.3 变成强类型
function error (msg, errorType =Error) { throw new errorType (msg); }


const arrayEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const Types = {
  NULL: 'Null',
  UNDEFINED: 'Undefined',
  BOOLEAN: 'Boolean',
  NUMBER: 'Number',
  STRING: 'String',
  SYMBOL: 'Symbol',
  ARRAY: 'Array',
  FUNCTION: 'Function'
}

const TypeOf = (val) => {
  if (Number.isNaN(val)) {
    return 'Error'
  }
  let info = Object.prototype.toString.call(val);
  let tag= info .match(/\s(\w+)/) [1];
  // construct.name 可以进一步的反应出此对象的构建函数名
  return tag === 'Object' ? val.constructor.name : tag;
}

const Person = function (name) {
  this.name = name
};
const p = new Person(123);
console.log('--lbp 28', 'lambda.js', '', TypeOf(p));
console.log('--lbp 31', 'lambda.js', '', TypeOf(132));

/**
 * 参数校验，可以支持不同类型的参数
 * @param fname
 * @param args
 * @param types
 */
const checkArgs = function (fname, args, ...types) {
  if (!Array.isArray(types[0])) {
    types = [types];
  }

  let received = Array.from(args).map(TypeOf)
  if (!types.some((expected) => arrayEqual(expected, received))) {
    error(`Unexpected argument type(s) for ${fname} : ${received.join('，')}`)
  }
}
console.log('--lbp 42', 'lambda.js', '', checkArgs('fText', ['12'], Types.STRING));
// console.log('--lbp 42', 'lambda.js', '', checkArgs('fText', ['12', 12], [Types.STRING, Types.NULL], [Types.STRING, Types.STRING]));

// endregion
// endregion


// region 4
// region 4.1 函数参数

const gt = (a, b) => {
  return a > b;
}

const identity = v => v

const reduce = (f, i, list) => {
  return list.reduce(f, i);
}

const maxByMap = (map, list) => {
  function select(a, b) {
    console.log('lambda.js', '13', 'select', new Date(), a, b)
    return gt(a, b) ? a : b;
  }

  return reduce(select, undefined, list)
}
const nums = [1, 3, 12, 4, 33, 1, 2];
console.log('lambda.js', '18', '', new Date(), maxByMap(identity, nums))

const maxBySelect = (select, list) => {
  return reduce(select, undefined, list)
}

const max = (a, b) => gt(a, b) ? a : b

console.log('lambda.js', '25', '', new Date(), maxBySelect(max, nums))
// endregion

// region 4.2 函数返回值
const isUndefined = val => val === undefined

const isArray = Array.isArray.bind()
console.log('lambda.js', '36', '', new Date(), isArray(''))

console.log('lambda.js', '38', '', new Date(), typeof (new Number(3)))

const isObject = (val) => val === Object(val);
console.log('lambda.js', '41', 'null', new Date(), isObject(null))
console.log('lambda.js', '41', 'undefined', new Date(), isObject(undefined))
console.log('lambda.js', '41', '', new Date(), isObject(''))
console.log('lambda.js', '41', '{}', new Date(), isObject({}))
console.log('lambda.js', '41', '[]', new Date(), isObject([]))
console.log('lambda.js', '46', 'new Number(2)', new Date(), isObject(new Number(2)))
// 函数作为返回值的好处：扩展了函数功能的可能性,提高了函数应用的灵活性
// endregion

// region 4.3 高阶函数
// 高阶函数：一个函数如果接受其它函数作为参数,或者返回值是函数
// 补值函数
const complement = function (pred) {
  return (...args) => !pred(...args)
}

const schedule = [
  {
    num: 1,
    stop: '深圳',
    arrival: null,
    departure: {
      hour: 14,
      minute:
        48
    },
    dwell: null
  },
  {
    num: 2,
    stop: '惠州',
    arrival: {
      hour: 16,
      minute: 8
    },
    departure: {
      hour: 16,
      minute: 14
    },
    dwell: 6
  },
  {
    num: 3,
    stop:
      '赣州', arrival:
      {
        hour: 20, minute:
          29
      }
    ,
    departure: {
      hour:
        20, minute:
        32
    }
    ,
    dwe11: 3
  },
  {
    num: 4, stop:
      '吉安', arrival:
      {
        hour: 22, minute:
          23
      }
    ,
    departure: {
      hour:
        22, minute:
        26
    }
    ,
    dwe11: 3
  },
  {
    num: 5, stop:
      '南昌', arrival:
      {
        hour: 0, minute:
          40
      }
    ,
    departure: {
      hour: 11,
      minute:
        3
    }
    ,
    dwell: 23
  },
  {
    num: 6,
    stop: '阜阳',
    arrival: {
      hour: 5,
      minute: 58
    },
    departure: {
      hour: 16,
      minute: 5
    },
    dwell: 7
  },
  {
    num: 7,
    stop: '泽',
    arrival:
      {
        hour: 8,
        minute: 23
      },
    departure: {
      hour: 18,
      minute: 25
    },
    dwell: 2
  },
  {
    num: 8, stop:
      '聊城', arrival:
      {
        hour: 9, minute:
          32
      }
    ,
    departure: {
      hour: 19, minute:
        34
    }
    ,
    dwell: 2
  },
  {
    num: 9, stop:
      '衡水', arrival:
      {
        hour: 10, minute:
          58
      }
    ,
    departure: {
      hour: 111, minute:
        0
    }
    ,
    dwell: 2
  },
  {
    num: 10,
    stop: '北京西',
    arrival: {
      hour: 13,
      minute: 17
    },
    departure: null,
    dwell: null
  }
];
const map = (f, list) => list.map(f)
const filter = (f, list) => list.filter(f)
console.log('lambda.js', '205', '', new Date(), map(item => item.stop, schedule))

const isOriginOrTerminal = (stop) => stop.arrival === null || stop.departure === null;

console.log('lambda.js', '210', '', new Date(), filter(isOriginOrTerminal, schedule))

const both = (f1, f2) => (...args) => f1(...args) && f2(...args)
const either = (f1, f2) => (...args) => f1(...args) || f2(...args)

const isOrigin = stop => stop.arrival === null;
const isTerminal = stop => stop.departure === null;
const isOriginOrTerminal2 = either(isOrigin, isTerminal)
console.log('lambda.js', '215', '', new Date(), filter(isOriginOrTerminal2, schedule))
// region 4.3.2 改变函数参数数目
const unary = fn => (arg) => fn(arg)
const binary = fn => (a, b) => fn(a, b)
const take = (n, list) => list.slice(0, n)
const nAry = n => fn => (...args) => {
  const accepted = take(n, args)
  return fn(...accepted)
}
// endregion

// 4.3.3 检查参数类型
// 用来包装函数，支持对函数的类型检查
var checkTypes = (fname, fn, ...types) => {
  return function (...args) {
    if (!Array.isArray(types[0])) {
      types = [types];
    }

    let received = Array.from(args).map(TypeOf)
    if (!types.some((expected) => arrayEqual(expected, received))) {
      error(`Unexpected argument type(s) for ${fname} : ${received.join('，')}`)
    }
    return fn(...args)
  }
}

var _add = (a, b) => a + b
// 这种包装技巧虽然可以增加代码的鲁棒性，但是对于代码的性能是损失的。ts是作用于编译阶段，想比这种手段来说就非常有优势
var add = checkTypes('add', _add, Types.NUMBER, Types.NUMBER)
console.log('--lbp 308', 'lambda.js', '', add(1, 2));
// console.log('--lbp 308', 'lambda.js', '', add(1, '2'));

//

// endregion

// region 4.3.4 记忆化

// endregion

// endregion


// region 5
// 柯里化：接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
const append = function (list, ...arg) {
  return [...list, ...arg]
}
console.log('lambda.js', '6', '', new Date(), append([1,2,3], 3, 3,4))

const curryClassic = function (fn, arity = fn.length) {
  function _curry(saveArgs) {
    return function (arg) {
      let curArgs = append(saveArgs, arg)
      if (curArgs.length === arity) {
        return fn(...curArgs);
      } else {
        return _curry(curArgs)
      }
    }
  }
  return _curry([])
}

const get = function ( attr, obj) {
  return obj[attr]
}

const person = {
  name: 1,
  age: 2
}

const curryGet = curryClassic(get)
const getName = curryGet('name')
const getAge = curryGet('age')
console.log('lambda.js', '357', '', new Date(), getName(person))
console.log('lambda.js', '359', '', new Date(), getAge(person))

// 增强柯里化
// endregion

// region 5
/**
 * 纯函数
 * 1.相同的输入值产生相同的输出值，意味着函数内部不依赖外部
 * 2.函数对外部没有副作用，意味着函数不会更改外部状态
 */
// 副作用：
// endregion

// region 6
/**
 * 闭包：绑定了执行环境的函数
 */
// endregion
