document.addEventListener('mousemove', function(e) {
    const bgHue = document.querySelector('.bg-hue');
    const x = e.clientX;
    const y = e.clientY;
    bgHue.style.transform = `translate(${x}px, ${y}px)`;
  });
  