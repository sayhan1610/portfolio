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