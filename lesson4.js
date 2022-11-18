function count (min, max) {
  console.log(min);
  if (min === max) {
    return
  }

  min++
  setTimeout(() => {
    count(min, max)
  }, 1000)
}

count(5, 15)