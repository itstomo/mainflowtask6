const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');

gallery.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = image.src;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}
