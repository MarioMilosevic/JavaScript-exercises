import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const numbers = [1, 3, 7, 9, 2];
const target = 11;

const findIndexesByTarget = (nums: number[], target: number) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    for (let p2 = 1; p2 < nums.length; p2++) {
      if (nums[p1] + nums[p2] === target) {
        return [p1, p2];
      }
    }
  }
  return null;
};

const result = findIndexesByTarget(numbers, target);
console.log(result);
