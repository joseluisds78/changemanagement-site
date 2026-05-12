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

function setupPricingModal() {
    document.querySelectorAll('.see-pricing-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const priceEl = document.querySelector('.service-price[data-card="' + this.dataset.card + '"]');
            if (priceEl) priceEl.textContent = this.dataset.price;
            this.style.display = 'none';
        });
    });
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
