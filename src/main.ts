function startCounter() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("Count:", i);
    }, i * 1000);
  }
}

startCounter();
// expected: Count: 1, Count: 2, Count: 3 (one per second)
