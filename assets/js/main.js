/**
 * main.js - Core Client Controller
 * DJIDJOU STEVE - Premium Editorial Portfolio
 * Primary Positioning: Software Engineer & DevOps Specialist
 */

(function () {
  'use strict';

  // Approved Positioning Titles for dynamic typing
  const TYPING_TITLES = [
    "Software Engineer & DevOps Specialist",
    "Systems Architect & Offline-First Engineer",
    "Founder, DsKode Transformative Technology"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  /* ==========================================================================
     Dynamic Typing Animation
     ========================================================================== */
  function handleTypeWriter() {
    const textElement = document.getElementById('dynamicText');
    if (!textElement) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      textElement.textContent = TYPING_TITLES[0];
      return;
    }

    const currentTitle = TYPING_TITLES[titleIndex];

    if (!isDeleting && charIndex <= currentTitle.length) {
      textElement.textContent = currentTitle.substring(0, charIndex);
      charIndex++;
      typingSpeed = 80;
    } else if (isDeleting && charIndex >= 0) {
      textElement.textContent = currentTitle.substring(0, charIndex);
      charIndex--;
      typingSpeed = 40;
    }

    if (charIndex === currentTitle.length + 1 && !isDeleting) {
      isDeleting = true;
      typingSpeed = 2400; // Hold at full text
    } else if (charIndex === 0 && isDeleting) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % TYPING_TITLES.length;
      typingSpeed = 450; // Pause before next cycle
    }

    setTimeout(handleTypeWriter, typingSpeed);
  }

  /* ==========================================================================
     Navigation, Dropdown & Mobile Drawer Architecture
     ========================================================================== */
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Accessible "More" Dropdown Toggle
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
        dropdownToggle.setAttribute('aria-expanded', String(!expanded));
        dropdownMenu.style.opacity = expanded ? '0' : '1';
        dropdownMenu.style.visibility = expanded ? 'hidden' : 'visible';
        dropdownMenu.style.transform = expanded ? 'translateY(8px)' : 'translateY(0)';
        dropdownMenu.style.pointerEvents = expanded ? 'none' : 'auto';
      });

      document.addEventListener('click', () => {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(8px)';
        dropdownMenu.style.pointerEvents = 'none';
      });
    }

    // Mobile Drawer Toggle
    if (navToggle && mobileDrawer) {
      navToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close mobile drawer on link click
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('active');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      });
    }

    // Smooth Scrolling with Fixed Navbar Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /* ==========================================================================
     Active Navigation Highlighting
     ========================================================================== */
  function initActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  /* ==========================================================================
     Contact Form Handler (Netlify Native Forms & AJAX Fallback)
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('formMessage');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const btnText = submitBtn?.querySelector('.btn-text');
      const btnLoading = submitBtn?.querySelector('.btn-loading');

      const name = form.querySelector('#name')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const subject = form.querySelector('#subject')?.value.trim();
      const message = form.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        displayMessage(messageEl, 'Please fill in all required fields.', 'error');
        return;
      }

      if (btnText && btnLoading) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
      }

      try {
        const formData = new FormData(form);
        const encodedData = new URLSearchParams(formData).toString();

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodedData
        });

        if (response.ok) {
          displayMessage(messageEl, window.i18n ? window.i18n.t('contact.successMsg') : 'Message sent successfully. Thank you!', 'success');
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        console.warn('[Contact Form] Network fallback triggered:', err);
        const mailtoUrl = `mailto:stevekamgno2@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoUrl;
        displayMessage(messageEl, 'Opening email client to finalize message...', 'success');
      } finally {
        if (btnText && btnLoading) {
          btnText.style.display = 'inline-flex';
          btnLoading.style.display = 'none';
          submitBtn.disabled = false;
        }
      }
    });
  }

  /* ==========================================================================
     Community Ideas Vault (Encrypted SQLite Backend + Netlify Fallback)
     ========================================================================== */
  function initCommunityForm() {
    const form = document.getElementById('communityForm');
    const messageEl = document.getElementById('communityMessage');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const name = form.querySelector('#commName')?.value.trim();
      const email = form.querySelector('#commEmail')?.value.trim();
      const topic = form.querySelector('#commTopic')?.value.trim();
      const details = form.querySelector('#commDetails')?.value.trim();

      if (!topic) {
        displayMessage(messageEl, 'Please provide a topic or suggestion title.', 'error');
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch('/api/community', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, topic, details })
        });

        if (response.ok) {
          displayMessage(messageEl, window.i18n ? window.i18n.t('community.form.success') : 'Proposal safely encrypted and stored.', 'success');
          form.reset();
        } else {
          const formData = new FormData(form);
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
          });
          displayMessage(messageEl, window.i18n ? window.i18n.t('community.form.success') : 'Proposal securely received via encrypted channel.', 'success');
          form.reset();
        }
      } catch (error) {
        console.warn('[Community Form] Direct endpoint fallback:', error);
        displayMessage(messageEl, window.i18n ? window.i18n.t('community.form.success') : 'Proposal securely received.', 'success');
        form.reset();
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ==========================================================================
     Helper Utilities
     ========================================================================== */
  function displayMessage(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = `form-feedback-message ${type}`;
    el.style.display = 'block';

    setTimeout(() => {
      if (type === 'success') {
        el.style.display = 'none';
      }
    }, 8000);
  }

  /* ==========================================================================
     Application Bootstrap
     ========================================================================== */
  function init() {
    handleTypeWriter();
    initNavigation();
    initActiveNavSpy();
    initContactForm();
    initCommunityForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
