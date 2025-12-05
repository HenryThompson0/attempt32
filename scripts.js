// === scripts.js ===

// Rotating image setup (only runs on index.html)
const rotation = [
  'pics/IMG_9913.jpg',
  'pics/IMG_9646.JPG',
  'pics/IMG_9423.jpg',
  'pics/Resized_20250927_173814.jpeg'
];

let currentIndex = 0;
const picture = document.getElementById("rotatingImage");

if (picture) {
  picture.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % rotation.length;
    picture.src = rotation[currentIndex];
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (targetId !== '#' && target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Image modal functionality
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

if (modal && modalImg && closeBtn) {
  // Open modal when photographer images are clicked
  document.querySelectorAll(".photographer img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
