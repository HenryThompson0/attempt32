// === scripts.js ===

// Rotating image setup (only runs on index.html)
const rotation = [
  'pics/IMG_9913.JPG',
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

// === Smooth scrolling for internal links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId !== '#' && document.querySelector(targetId)) {
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Image modal functionality
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".photographer img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};