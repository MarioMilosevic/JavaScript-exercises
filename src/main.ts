//  Event Delegation
// – Q1: Implement a click on todo item which has a high performance.

const list = document.querySelector(".todo-app");

list?.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.innerText);
});
