// Blog posts metadata
// Add your blog posts here in this format
const blogPosts = [
    {
        id: 'cab-vs-ccb',
        title: 'CAB vs CCB: Understanding the Difference',
        date: '2024-01-15',
        excerpt: 'Confused about CAB and CCB? Learn the key differences, when to use each, and how they impact your organization.',
        readTime: '8 min read'
    },
    {
        id: 'retainer-model',
        title: 'Why Retainer-Based Engagement Works Better',
        date: '2024-01-10',
        excerpt: 'Exploring the advantages of retainer-based consulting over hourly rates for enterprise change governance.',
        readTime: '6 min read'
    },
    {
        id: 'change-metrics',
        title: 'Enterprise Change Metrics That Matter',
        date: '2024-01-05',
        excerpt: 'Which metrics actually indicate change governance health? A guide to tracking what matters.',
        readTime: '10 min read'
    },
    {
        id: 'risk-assessment',
        title: 'Risk Assessment Framework for Changes',
        date: '2024-01-01',
        excerpt: 'A practical framework for assessing risk in enterprise change management.',
        readTime: '12 min read'
    }
];

// Initialize blog section
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
    setupSmoothScroll();
    setupContactForm();
    setupPricingModal();
});

function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    
    if (!blogGrid) return;

    // Clear loading message
    blogGrid.innerHTML = '';

    // Create blog cards
    blogPosts.slice(0, -1).forEach(post => {
        const card = createBlogCard(post);
        blogGrid.appendChild(card);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <div class="blog-card-image">
            <span>📄</span>
        </div>
        <div class="blog-card-content">
            <h3>${escapeHtml(post.title)}</h3>
            <div class="blog-date">${formattedDate} • ${post.readTime}</div>
            <p>${escapeHtml(post.excerpt)}</p>
            <a href="/articles/${post.id}.html">Read Article →</a>
        </div>
    `;

    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function setupSmoothScroll() {
    // Smooth scroll is handled by CSS, but we can add additional interactions here
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                // Small delay for better UX
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
}

// Optional: Add animation on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Observe blog cards
    document.querySelectorAll('.blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations
if ('IntersectionObserver' in window) {
    observeElements();
}

// Optional: Analytics/tracking
function trackEvent(eventName, eventData = {}) {
    console.log(`Event tracked: ${eventName}`, eventData);
    // You can integrate with Google Analytics or other tracking tools here
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('button_click', { button: buttonText });
    });
});

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
}

function revealPrice(card, price, link) {
    const priceEl = document.querySelector('.service-price[data-card="' + card + '"]');
    if (priceEl) priceEl.textContent = price;
    if (link) link.style.display = 'none';
}

function setupPricingModal() {
    const modal = document.getElementById('pricing-modal');
    const modalClose = document.getElementById('modal-close');
    const modalServiceName = document.getElementById('modal-service-name');
    const modalServiceInput = document.getElementById('modal-service-input');
    const pricingForm = document.getElementById('pricing-form');

    // Reveal prices already unlocked via cookie
    document.querySelectorAll('.see-pricing-link').forEach(link => {
        if (getCookie('price_' + link.dataset.card)) {
            revealPrice(link.dataset.card, link.dataset.price, link);
        }
    });

    // Open modal
    document.querySelectorAll('.see-pricing-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal._price = this.dataset.price;
            modal._card = this.dataset.card;
            modal._link = this;
            modalServiceName.textContent = this.dataset.service;
            modalServiceInput.value = this.dataset.service;
            document.getElementById('pricing-name').value = '';
            document.getElementById('pricing-phone').value = '';
            modal.classList.remove('hidden');
        });
    });

    modalClose.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    if (pricingForm) {
        pricingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = pricingForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                await fetch('https://formspree.io/f/mlgzazyb', {
                    method: 'POST',
                    body: new FormData(pricingForm),
                    headers: { 'Accept': 'application/json' }
                });
            } catch {}

            setCookie('price_' + modal._card, '1', 30);
            revealPrice(modal._card, modal._price, modal._link);
            modal.classList.add('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = 'See pricing';
        });
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    const textarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');

    if (textarea) {
        textarea.addEventListener('input', () => {
            charCount.textContent = textarea.value.length;
        });
    }

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                form.classList.add('hidden');
                success.classList.remove('hidden');
            } else {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                alert('Something went wrong. Please try again.');
            }
        } catch {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            alert('Something went wrong. Please try again.');
        }
    });
}
