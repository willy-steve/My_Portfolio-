const titles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Tech Innovator",
    "Problem Solver",
    "System Architect"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const dynamicTextElement = document.getElementById('dynamicText');
    if (!dynamicTextElement) return;

    const currentTitle = titles[titleIndex];

    if (!isDeleting && charIndex <= currentTitle.length) {
        dynamicTextElement.textContent = currentTitle.substring(0, charIndex);
        charIndex++;
        typingSpeed = 100;
    } else if (isDeleting && charIndex >= 0) {
        dynamicTextElement.textContent = currentTitle.substring(0, charIndex);
        charIndex--;
        typingSpeed = 50;
    }

    if (charIndex === currentTitle.length + 1 && !isDeleting) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .experience-item, .contact-item, .about-content, .stat-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the browser from refreshing

    // These IDs come from your EmailJS dashboard
    const serviceID = 'F031NjxBumYB6_j_u';
    const templateID = 'template_b2dl2oi';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message Sent Successfully!');
            // Optional: clear the form after sending
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send message. Please try again.');
            console.log(JSON.stringify(err));
        });
});

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);

            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.className = 'form-message success';

            contactForm.reset();

            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.className = 'form-message';
            }, 5000);

        } catch (error) {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.className = 'form-message error';

            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.className = 'form-message';
            }, 5000);

        } finally {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-view') && !e.target.closest('.btn-view')) {
                const viewBtn = card.querySelector('.btn-view');
                if (viewBtn) {
                    viewBtn.click();
                }
            }
        });

        const viewBtn = card.querySelector('.btn-view');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Project clicked:', card.querySelector('h3').textContent);
            });
        }
    });
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function init() {
    typeWriter();
    initNavbar();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    initProjectCards();
    initParallax();

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
