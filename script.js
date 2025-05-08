// Product search/filter functionality
const searchInput = document.getElementById('product-search');
const productList = document.getElementById('product-list');
const productCards = Array.from(productList.children);

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  productCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// Scroll-triggered animations for art mediums and events
function onScrollAnimate() {
  const revealElements = document.querySelectorAll(
    '#art-mediums .bg-white, #events .bg-white'
  );
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add('in-view');
    }
  });
}
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', onScrollAnimate);

// Responsive Navbar Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('flex');
  navLinks.classList.toggle('flex-col');
  navLinks.classList.toggle('absolute');
  navLinks.classList.toggle('top-16');
  navLinks.classList.toggle('right-4');
  navLinks.classList.toggle('bg-white');
  navLinks.classList.toggle('rounded-lg');
  navLinks.classList.toggle('shadow-lg');
  navLinks.classList.toggle('p-4');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navLinks.classList.add('hidden');
      navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'right-4', 'bg-white', 'rounded-lg', 'shadow-lg', 'p-4');
    }
  });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Move heading with mouse
const heading = document.querySelector('.heading-move');
if (heading) {
  heading.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;
    const rect = heading.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = ((x / rect.width) - 0.5) * 20; // max 10px left/right
    const moveY = ((y / rect.height) - 0.5) * 10; // max 5px up/down
    heading.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  heading.addEventListener('mouseleave', () => {
    heading.style.transform = '';
  });
}

// Restart calligraphy pen animation on page load
window.addEventListener('DOMContentLoaded', () => {
  const pen = document.querySelector('.calligraphy-pen');
  if (pen) {
    pen.style.animation = 'none';
    // Force reflow
    void pen.offsetWidth;
    pen.style.animation = '';
  }
});

// Flying Elements Animation
function createFlyingElements() {
  const container = document.getElementById('flying-elements');
  const elementTypes = ['paintbrush', 'palette', 'canvas', 'pencil'];
  const numElements = 15;

  for (let i = 0; i < numElements; i++) {
    const element = document.createElement('div');
    const type = elementTypes[Math.floor(Math.random() * elementTypes.length)];
    element.className = `flying-element ${type}`;
    
    // Random initial position
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;
    element.style.animation = `float ${duration}s infinite ${delay}s`;
    
    // Random size
    const size = 20 + Math.random() * 30;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    
    container.appendChild(element);
  }
}

// Initialize flying elements when the page loads
document.addEventListener('DOMContentLoaded', () => {
  createFlyingElements();
}); 
