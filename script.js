// Flying Elements Animation
function createFlyingElements() {
  const container = document.getElementById('flying-elements');
  if (!container) return;
  const elementTypes = ['paintbrush', 'palette', 'canvas', 'pencil', 'pen', 'watercolor'];
  const numElements = 12;

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
    const size = 24 + Math.random() * 32;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    container.appendChild(element);
  }
}

// Animated Circles
function createFloatingCircles() {
  const container = document.getElementById('flying-elements');
  if (!container) return;
  const colors = [
    'rgba(96,165,250,0.18)', // blue
    'rgba(251,191,36,0.18)', // yellow
    'rgba(236,72,153,0.15)', // pink
    'rgba(34,197,94,0.15)',  // green
    'rgba(139,92,246,0.15)', // purple
    'rgba(255,255,255,0.12)'
  ];
  const numCircles = 10;
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.className = 'floating-circle';
    const size = 60 + Math.random() * 100;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = colors[Math.floor(Math.random() * colors.length)];
    circle.style.left = `${Math.random() * 90}%`;
    circle.style.top = `${Math.random() * 80}%`;
    const duration = 18 + Math.random() * 12;
    const delay = Math.random() * 8;
    circle.style.animation = `circleFloat ${duration}s ease-in-out infinite alternate ${delay}s`;
    container.appendChild(circle);
  }
}

// Enhance flying element interactivity
function addFlyingElementHover() {
  const flyingElements = document.querySelectorAll('.flying-element');
  flyingElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      // Random direction and scale
      const moveX = (Math.random() - 0.5) * 120;
      const moveY = (Math.random() - 0.5) * 80;
      const rotate = (Math.random() - 0.5) * 40;
      const scale = 1.2 + Math.random() * 0.5;
      el.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1), opacity 0.3s';
      el.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale}) rotate(${rotate}deg)`;
      el.style.opacity = 0.95;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.opacity = '';
    });
  });
}

// Why Should You Join? Flying Text
function createWhyJoinFlyingText() {
  const container = document.getElementById('why-join-flying-text');
  if (!container) return;
  const texts = [
    '<b>Imagination</b>',
    '<b>Build Connection</b>',
    '<b>Enhance Your Creativity Skills</b>'
  ];
  const positions = [
    {top: '5%', left: '3%', anim: 'whyJoinText1'}, // top-left
    {top: '8%', right: '4%', anim: 'whyJoinText2'}, // top-right
    {bottom: '7%', left: '6%', anim: 'whyJoinText3'} // bottom-left
  ];
  texts.forEach((text, i) => {
    const div = document.createElement('div');
    div.className = 'why-join-flying-text';
    if (positions[i].left) div.style.left = positions[i].left;
    if (positions[i].right) div.style.right = positions[i].right;
    if (positions[i].top) div.style.top = positions[i].top;
    if (positions[i].bottom) div.style.bottom = positions[i].bottom;
    div.style.animation = `${positions[i].anim} 7s ${i*0.7}s ease-in-out infinite alternate`;
    div.innerHTML = text;
    container.appendChild(div);
  });
}

// Flying Outlined Squares and Triangles
function createFlyingShapes() {
  const container = document.getElementById('flying-elements');
  if (!container) return;
  const shapes = ['square', 'triangle'];
  const numShapes = 8;
  for (let i = 0; i < numShapes; i++) {
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = document.createElement('div');
    shape.className = `flying-shape ${shapeType}`;
    // Random position
    shape.style.left = `${Math.random() * 90}%`;
    shape.style.top = `${Math.random() * 80}%`;
    // Random size
    const size = 28 + Math.random() * 32;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    // Animation
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 6;
    const animName = `shapeFloat${i}`;
    const moveX = (Math.random() - 0.5) * 60;
    const moveY = (Math.random() - 0.5) * 40;
    const styleSheet = document.styleSheets[0];
    const keyframes = `@keyframes ${animName} {0%{transform:translate(0,0);} 50%{transform:translate(${moveX}px,${moveY}px);} 100%{transform:translate(0,0);}}`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    shape.style.animation = `${animName} ${duration}s ease-in-out ${delay}s infinite alternate`;
    // Hover: move to new random area
    shape.addEventListener('mouseenter', () => {
      const newX = (Math.random() - 0.5) * 120;
      const newY = (Math.random() - 0.5) * 80;
      shape.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
      shape.style.transform = `translate(${newX}px, ${newY}px) scale(1.15)`;
    });
    shape.addEventListener('mouseleave', () => {
      shape.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
      shape.style.transform = '';
    });
    container.appendChild(shape);
  }
}

// Interactive heading: move with mouse on hover
function addInteractiveHeading() {
  const heading = document.querySelector('.heading-move');
  if (!heading) return;
  let isHovering = false;
  heading.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    const rect = heading.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = ((x / rect.width) - 0.5) * 40; // max 20px left/right
    const moveY = ((y / rect.height) - 0.5) * 20; // max 10px up/down
    heading.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  heading.addEventListener('mouseenter', () => {
    isHovering = true;
  });
  heading.addEventListener('mouseleave', () => {
    isHovering = false;
    heading.style.transform = '';
  });
}

// Playful Join Us button wiggle on hover
function addJoinUsButtonWiggle() {
  const btn = document.querySelector('.join-btn');
  if (!btn) return;
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.3s cubic-bezier(.77,0,.18,1)';
    btn.style.transform = 'rotate(-7deg) scale(1.08)';
    setTimeout(() => {
      btn.style.transform = 'rotate(7deg) scale(1.08)';
      setTimeout(() => {
        btn.style.transform = 'rotate(0deg) scale(1.08)';
      }, 120);
    }, 120);
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
}

// Art Mediums Flying Headings
function createArtMediumsFlying() {
  const container = document.getElementById('art-mediums-flying');
  if (!container) return;
  const mediums = [
    'Pen Sketching',
    'Watercolor',
    'Digital Art',
    'Acrylic Painting',
    'Charcoal Art',
    'Clay Modeling',
    'Calligraphy',
    'Arabic Calligraphy',
    'Photography',
    'Painting',
    'Henna Design'
  ];
  const positions = [
    {top: '10%', left: '8%', anim: 'artMediumFloat1'},
    {top: '22%', right: '10%', anim: 'artMediumFloat2'},
    {top: '38%', left: '18%', anim: 'artMediumFloat3'},
    {top: '55%', right: '12%', anim: 'artMediumFloat4'},
    {bottom: '18%', left: '10%', anim: 'artMediumFloat5'},
    {bottom: '10%', right: '8%', anim: 'artMediumFloat1'},
    {top: '30%', left: '40%', anim: 'artMediumFloat2'},
    {bottom: '30%', right: '30%', anim: 'artMediumFloat3'},
    {top: '60%', left: '25%', anim: 'artMediumFloat4'},
    {bottom: '25%', right: '20%', anim: 'artMediumFloat5'},
    {top: '45%', left: '60%', anim: 'artMediumFloat1'}
  ];
  mediums.forEach((medium, i) => {
    const div = document.createElement('div');
    div.className = 'art-medium-flying-text';
    if (positions[i].left) div.style.left = positions[i].left;
    if (positions[i].right) div.style.right = positions[i].right;
    if (positions[i].top) div.style.top = positions[i].top;
    if (positions[i].bottom) div.style.bottom = positions[i].bottom;
    div.style.animation = `${positions[i].anim} 8s ${i*0.3}s ease-in-out infinite alternate`;
    div.innerText = medium;
    container.appendChild(div);
  });
}

// Mission & Vision floating text bounce on hover
function addMissionVisionBounce() {
  function bounce(el) {
    const moveX = (Math.random() - 0.5) * 60;
    const moveY = (Math.random() - 0.5) * 40;
    el.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
    el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.15)`;
  }
  function reset(el) {
    el.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
    el.style.transform = '';
  }
  document.querySelectorAll('.mission-float, .vision-float').forEach(el => {
    el.addEventListener('mouseenter', () => bounce(el));
    el.addEventListener('mouseleave', () => reset(el));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createFlyingElements();
  createFloatingCircles();
  createWhyJoinFlyingText();
  createFlyingShapes();
  createArtMediumsFlying();
  setTimeout(addFlyingElementHover, 100);
  addInteractiveHeading();
  addJoinUsButtonWiggle();
  addMissionVisionBounce();
  // Hamburger menu toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    });
    // Optional: close menu when a link is clicked (on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) navLinks.classList.add('hidden');
      });
    });
  }
}); 
