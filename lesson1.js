function countEvenOdd(array) {
  let even = 0
  let odd = 0
  
  array.forEach(el => {
    if (typeof el === 'number' && !isNaN(el)) {
      if (el % 2 === 0) {
        even += 1
      } else {
        odd += 1
      }
    }
  });

  console.log(`Количество четных чисел - ${even}`);
  console.log(`Количество нечетных чисел - ${odd}`);
}

const arr = [5, 7, 10, 54, 78, 33, 67, true, 'string', NaN]
countEvenOdd(arr)
