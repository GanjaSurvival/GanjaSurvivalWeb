const canvas = document.getElementById('clouds');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let clouds = Array.from({length: 10}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height / 2,
  size: Math.random() * 50 + 50,
  speed: Math.random() * 0.5 + 0.2
}));
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clouds.forEach(cloud => {
    ctx.beginPath();
    ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fill();
    cloud.x += cloud.speed;
    if (cloud.x > canvas.width) cloud.x = -cloud.size;
  });
  requestAnimationFrame(draw);
}
draw();
