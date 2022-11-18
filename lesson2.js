function findOutPrimeNumber(num) {
  if (num > 1000) {
    console.log('Число не может быть больше 1000');
  } else {
    isPrimeNumber = `${num} НЕ простое число`
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrimeNumber = `${num} НЕ простое число`
        return isPrimeNumber
      } else {
        isPrimeNumber = `${num} простое число`
      }
    }
    if (num === 2) {
      isPrimeNumber = `${num} простое число`
    }
    return isPrimeNumber
  }
}

const result = findOutPrimeNumber(7)
console.log(result);