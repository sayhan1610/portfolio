/*
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');

  fetch('/static/gallery/')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const images = Array.from(doc.querySelectorAll('a'))
                          .map(link => link.href)
                          .filter(href => href.match(/\.(jpe?g|png|gif)$/));

      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'gallery-image';
        galleryContainer.appendChild(img);
      });
    })
    .catch(err => console.error('Error fetching gallery images:', err));
});


// Add the onclick attribute to a button element
const button = document.createElement('button');
button.onclick = function() {
  window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
};
galleryContainer.appendChild(button);
*/
// === Glitchy mouse trail effect ===
const canvas = document.getElementById('trailCanvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let particles = [];
const maxParticles = 40;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

window.addEventListener('mousemove', e => {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: `hsl(${180 + Math.random() * 100}, 100%, 70%)`,
      alpha: 1
    });
  }

  if (particles.length > maxParticles) {
    particles.splice(0, particles.length - maxParticles);
  }
});

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.02;

    // Glitchy jitter
    if (Math.random() < 0.02) {
      p.x += (Math.random() - 0.5) * 10;
      p.y += (Math.random() - 0.5) * 10;
    }

    
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.shadowBlur = 12;
    ctx.shadowColor = p.color;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

animate();
// Add this after your trail JS
const cursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
