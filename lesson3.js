function sumNum1 (num1) {
  return function (num2) {
    return num1 + num2
  }
}

const sumNum2 = sumNum1(5)
const result = sumNum2(25)
console.log(result);