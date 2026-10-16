const titles = [
    "Full-Stack Developer",
    "Web App Developer",
    "School ERP Specialist",
    "Problem Solver",
    "Tech Innovator"
];

const BLOG_STORAGE_KEY = 'steveBlogPosts';
const COMMUNITY_STORAGE_KEY = 'steveCommunityIdeas';

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let currentFilter = 'all';

const defaultPosts = [
    {
        id: 'blog-1',
        title: 'How I design a school ERP dashboard that teachers actually use',
        category: 'Tutorial',
        excerpt: 'A simple framework for planning modules, reducing admin overload, and building dashboards that keep school teams engaged.',
        content: [
            'The best school systems are not the most complicated ones. They are the ones that remove friction for teachers, staff, and administrators.',
            'Start by mapping the real-day workflow: attendance, fee tracking, timetable coordination, exam planning, and parent communication. Once the process is clear, the UI becomes far easier to design.',
            'The key is to separate critical operations from secondary features. Teachers need quick access to attendance, class records, and communication tools. Admins need data visibility, while parents need simple updates and notifications.',
            'A strong ERP dashboard balances clarity and speed. Use clear labels, a clean hierarchy, and action-focused screens. The goal is not just to store information, but to help teams act on it faster.'
        ],
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
        published: true,
        date: '2026-10-15',
        readingTime: '5 min read'
    },
    {
        id: 'blog-2',
        title: '3 performance mistakes that slow down business web apps',
        category: 'Product',
        excerpt: 'A short checklist for improving load time, clarity, and user trust before you ship a product.',
        content: [
            'A lot of web apps fail not because the idea is wrong, but because the experience feels slow and heavy.',
            'One common mistake is loading too many assets upfront. Large images, unoptimized scripts, and giant dashboards can make even a good product feel slow.',
            'Another issue is poor data hierarchy. If users must hunt for the information they need, they will leave. Clear labels, visible actions, and grouped layouts help a lot.',
            'Finally, keep the experience mobile-first. Many users will access your system from a phone, so spacing, font size, and button placement matter just as much as the backend logic.'
        ],
        image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
        published: true,
        date: '2026-10-08',
        readingTime: '4 min read'
    },
    {
        id: 'blog-3',
        title: 'Case study: transforming a school operations workflow with a simple portal',
        category: 'Case Study',
        excerpt: 'How a simple digital tool improved coordination between staff, students, and parents in a school environment.',
        content: [
            'The problem was familiar: forms were duplicated, schedules changed too often, and communication was happening across too many channels.',
            'Instead of building a massive platform immediately, we focused on the core workflows first: announcements, class scheduling, and fee tracking.',
            'The result was a system that students and parents could use without confusion, and staff could update in just a few clicks. The experience became clearer and more predictable for everyone.',
            'This is one of the biggest advantages of designing lean tools well: they solve the real pain points without overwhelming the user.'
        ],
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
        published: true,
        date: '2026-09-28',
        readingTime: '6 min read'
    }
];

function getBlogPosts() {
    try {
        const saved = localStorage.getItem(BLOG_STORAGE_KEY);
        if (!saved) {
            localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(defaultPosts));
            return [...defaultPosts];
        }
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length ? parsed : [...defaultPosts];
    } catch (error) {
        return [...defaultPosts];
    }
}

function saveBlogPosts(posts) {
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
}

function getCommunityIdeas() {
    try {
        const saved = localStorage.getItem(COMMUNITY_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}

function saveCommunityIdeas(ideas) {
    localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(ideas));
}

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

    if (!navbar || !navMenu) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) {
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
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
    if (!('IntersectionObserver' in window)) return;

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
        '.skill-category, .project-card, .experience-item, .contact-item, .about-content, .stat-item, .testimonial-card, .blog-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function showMessage(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
}

function initLeadCapture() {
    const leadForm = document.getElementById('leadForm');
    const leadMessage = document.getElementById('leadMessage');

    if (!leadForm) return;

    leadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = leadForm.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value.trim() : '';

        if (!email) {
            showMessage(leadMessage, 'Please provide a valid email address.', 'error');
            return;
        }

        const subject = encodeURIComponent('Free School ERP Starter Guide');
        const body = encodeURIComponent(
            `Hi Steve,\n\nI would like the free School ERP Starter Guide.\nEmail: ${email}\n\nThanks!`
        );

        window.location.href = `mailto:stevekamgno2@gmail.com?subject=${subject}&body=${body}`;
        showMessage(leadMessage, 'Your email app is opening to receive the guide.', 'success');
        leadForm.reset();
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        if (!formData.name || !formData.email || !formData.message) {
            showMessage(formMessage, 'Please fill in all fields before sending.', 'error');
            return;
        }

        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`
            );

            window.location.href = `mailto:stevekamgno2@gmail.com?subject=${subject}&body=${body}`;
            showMessage(formMessage, 'Your email app is opening so we can continue the conversation.', 'success');
            contactForm.reset();
        } catch (error) {
            showMessage(formMessage, 'Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

function renderCommunityIdeas() {
    const ideasContainer = document.getElementById('communityIdeas');
    if (!ideasContainer) return;

    const ideas = getCommunityIdeas();
    ideasContainer.innerHTML = ideas.length
        ? ideas.map(idea => `<span class="idea-chip">${idea}</span>`).join('')
        : '<span class="idea-chip">No ideas yet — be the first to suggest one.</span>';
}

function initCommunityForm() {
    const form = document.getElementById('communityForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('communityName');
        const topicInput = document.getElementById('communityTopic');
        const name = (nameInput?.value || '').trim();
        const topic = (topicInput?.value || '').trim();

        if (!topic) return;

        const ideas = getCommunityIdeas();
        const label = name ? `${name}: ${topic}` : topic;
        const nextIdeas = [label, ...ideas].slice(0, 8);
        saveCommunityIdeas(nextIdeas);
        renderCommunityIdeas();
        form.reset();
    });
}

function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    const posts = getBlogPosts().filter(post => post.published);
    const filteredPosts = currentFilter === 'all'
        ? posts
        : posts.filter(post => post.category === currentFilter);

    blogGrid.innerHTML = filteredPosts.map(post => `
        <article class="blog-card">
            <img class="blog-card-image" src="${post.image || 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200'}" alt="${post.title}" loading="lazy" decoding="async">
            <div class="blog-card-body">
                <div class="blog-meta">
                    <span class="blog-badge">${post.category}</span>
                    <span>${post.readingTime || '5 min read'}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-actions">
                    <button type="button" class="card-link read-post" data-id="${post.id}">Read article</button>
                    <div>
                        <button type="button" class="card-action-btn edit-post" data-id="${post.id}">Edit</button>
                        <button type="button" class="card-action-btn delete delete-post" data-id="${post.id}">Delete</button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    const readButtons = document.querySelectorAll('.read-post');
    readButtons.forEach(button => {
        button.addEventListener('click', () => openBlogDetail(button.dataset.id));
    });

    const editButtons = document.querySelectorAll('.edit-post');
    editButtons.forEach(button => {
        button.addEventListener('click', () => openBlogEditor(button.dataset.id));
    });

    const deleteButtons = document.querySelectorAll('.delete-post');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => deleteBlogPost(button.dataset.id));
    });
}

function openBlogDetail(postId) {
    const detail = document.getElementById('blogDetail');
    const content = document.getElementById('blogDetailContent');
    if (!detail || !content) return;

    const post = getBlogPosts().find(item => item.id === postId);
    if (!post) return;

    const paragraphs = post.content.map(paragraph => `<p>${paragraph}</p>`).join('');
    content.innerHTML = `
        <img class="detail-image" src="${post.image || 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200'}" alt="${post.title}">
        <div class="blog-meta">
            <span class="blog-badge">${post.category}</span>
            <span>${post.date || 'Recently published'}</span>
            <span>${post.readingTime || '5 min read'}</span>
        </div>
        <h3>${post.title}</h3>
        ${paragraphs}
    `;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeBlogDetail() {
    const detail = document.getElementById('blogDetail');
    if (detail) detail.hidden = true;
}

function openBlogEditor(postId = null) {
    const editor = document.getElementById('blogEditor');
    const form = document.getElementById('blogForm');
    if (!editor || !form) return;

    editor.classList.remove('hidden');
    if (!postId) {
        form.reset();
        document.getElementById('postId').value = '';
        document.getElementById('postPublished').checked = true;
        editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    const posts = getBlogPosts();
    const post = posts.find(item => item.id === postId);
    if (!post) return;

    document.getElementById('postId').value = post.id;
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postCategory').value = post.category;
    document.getElementById('postImage').value = post.image || '';
    document.getElementById('postExcerpt').value = post.excerpt;
    document.getElementById('postContent').value = post.content.join('\n\n');
    document.getElementById('postPublished').checked = Boolean(post.published);
    editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteBlogPost(postId) {
    const posts = getBlogPosts().filter(post => post.id !== postId);
    saveBlogPosts(posts);
    renderBlogPosts();
}

function initBlogEditor() {
    const form = document.getElementById('blogForm');
    const toggleButton = document.getElementById('blogToggleEditor');
    const editor = document.getElementById('blogEditor');
    const resetButton = document.getElementById('resetBlogForm');
    const closeButton = document.getElementById('closeBlogDetail');

    if (toggleButton && editor) {
        toggleButton.addEventListener('click', () => {
            editor.classList.toggle('hidden');
            if (!editor.classList.contains('hidden')) {
                openBlogEditor();
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => openBlogEditor());
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeBlogDetail);
    }

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = document.getElementById('postId').value || `blog-${Date.now()}`;
        const title = document.getElementById('postTitle').value.trim();
        const category = document.getElementById('postCategory').value;
        const image = document.getElementById('postImage').value.trim();
        const excerpt = document.getElementById('postExcerpt').value.trim();
        const contentRaw = document.getElementById('postContent').value.trim();
        const published = document.getElementById('postPublished').checked;

        if (!title || !excerpt || !contentRaw) return;

        const posts = getBlogPosts();
        const nextPost = {
            id,
            title,
            category,
            excerpt,
            content: contentRaw.split(/\n\s*\n/).filter(Boolean),
            image: image || 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
            published,
            date: new Date().toISOString().slice(0, 10),
            readingTime: `${Math.max(3, Math.ceil(contentRaw.split(/\s+/).length / 120))} min read`
        };

        const exists = posts.some(post => post.id === id);
        const nextPosts = exists ? posts.map(post => post.id === id ? nextPost : post) : [nextPost, ...posts];
        saveBlogPosts(nextPosts);
        renderBlogPosts();
        form.reset();
        document.getElementById('postId').value = '';
        editor.classList.add('hidden');
    });
}

function initBlogFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(item => item.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter || 'all';
            renderBlogPosts();
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href || href.length <= 1) return;

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
        const viewBtn = card.querySelector('.btn-view');
        if (!viewBtn) return;

        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById('contact');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
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
    initLeadCapture();
    initContactForm();
    initCommunityForm();
    renderCommunityIdeas();
    renderBlogPosts();
    initBlogFilters();
    initBlogEditor();
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
