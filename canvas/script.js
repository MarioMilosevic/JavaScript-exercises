const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
console.log(ctx);

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 150, 50);
});
