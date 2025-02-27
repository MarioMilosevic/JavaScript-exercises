const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

const mouse = {
  x: null,
  y: null,
};

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle(mouse);
});

function drawCircle(mouse) {
   const {x,y} = mouse
    ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fill();
}

// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5
// ctx.stroke()
