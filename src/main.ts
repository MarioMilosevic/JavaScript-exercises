// – Q1: Create a throttle function

function throttle(cb: () => void, time: number) {
  let canCall = true;
  return function (...args) {
    if (canCall) {
      cb(...args);
      canCall = false;
      setTimeout(() => {
        canCall = true;
      }, time);
    }
  };
}

const saveInput = (name) => console.log("saveInput", name);
const processChange = throttle(saveInput, 2000);

processChange("foo");
setTimeout(() => {
  processChange("foo");
}, 1000);
setTimeout(() => {
  processChange("foo");
}, 1200);
setTimeout(() => {
  processChange("foo");
}, 2400);
processChange("foo");
processChange("foo");
