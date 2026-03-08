function privateCounter() {
  let count = 0;
  const getValue = () => {
    return count;
  };
  const increment = () => {
    count = count + 1;
  };
  return {
    getValue,
    increment,
  };
}

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
