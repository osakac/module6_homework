// Вариант обычной функции возведения числа в степень (при любых значениях)

// const powNumber = (num, pow) => {
//   let result
//   return result = num ** pow
// }

// const result = powNumber(5, 2)
// console.log(result);


const powNumber = (num, pow) => {
  let result
  if (num < 1 || pow < 1 || !Number.isInteger(num) || !Number.isInteger(pow)) {
    result = 'Числа должны быть натуральными (больше 0 и целыми)'
    return result
  }

  return result = num ** pow
}

const result = powNumber(5, 2)
console.log(result);