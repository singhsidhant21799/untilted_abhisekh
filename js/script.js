// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal for Login (Coming Soon)
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'block';
});
closeModal.addEventListener('click', function() {
  loginModal.style.display = 'none';
});
window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};

// Basic form validation for Post a Task
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function(e) {
  const title = document.getElementById('taskTitle').value.trim();
  const city = document.getElementById('taskCity').value.trim();
  const desc = document.getElementById('taskDesc').value.trim();
  if (!title || !city || !desc) {
    alert('Please fill in all fields.');
    e.preventDefault();
  }
});

// Animate hero section on scroll
const hero = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 30) {
    hero.style.boxShadow = '0 8px 32px rgba(31,78,121,0.13)';
    hero.style.transform = 'scale(1.02)';
  } else {
    hero.style.boxShadow = '0 4px 24px rgba(31,78,121,0.08)';
    hero.style.transform = 'scale(1)';
  }
});
