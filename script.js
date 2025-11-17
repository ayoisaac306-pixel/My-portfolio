// ===== Smooth Scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Sticky nav active section highlight =====
const sections = document.querySelectorAll('.section-1, .about, .skill-card, .start');
const navLinks = document.querySelectorAll('.nav ul li a');

function highlightNav() {
  let scrollPos = window.scrollY + 200; // offset for nav height
  sections.forEach((section, index) => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if(navLinks[index]) navLinks[index].classList.add('active');
    }
  });
}
window.addEventListener('scroll', highlightNav);

// ===== Animate skills on scroll =====
const skills = document.querySelectorAll('.skill');
const skillsSection = document.querySelector('.skill-card');

function animateSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionTop < screenPos) {
    skills.forEach(skill => skill.style.transform = 'scale(1.1)');
  } else {
    skills.forEach(skill => skill.style.transform = 'scale(1)');
  }
}
window.addEventListener('scroll', animateSkills);

// ===== Hover scale for social icons (extra smooth) =====
document.querySelectorAll('.contact-link ul li a i').forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.transform = 'scale(1.2)');
  icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1)');
});

// ===== Startup preview modal =====
const previewBtn = document.querySelector('.start .btn');
previewBtn.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.background = 'rgba(0,0,0,0.7)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';

  const modalContent = document.createElement('div');
  modalContent.style.background = 'white';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '12px';
  modalContent.innerHTML = `
    <h3>Ponche Studios Preview</h3>
    <p>This is a placeholder for the startup preview content.</p>
    <button id="closeModal">Close</button>
  `;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  document.getElementById('closeModal').addEventListener('click', () => {
    modal.remove();
  });
});