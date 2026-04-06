// ========== RENDER FROM DB ==========
function renderAITools() {
    const grid = document.getElementById('toolsGrid');
    if (!grid || !DB.aiTools) return;

    grid.innerHTML = DB.aiTools.map(tool => `
        <div class="tool-card${tool.featured ? ' tool-card--featured' : ''}">
            ${tool.badge ? `<div class="tool-card__badge">${tool.badge}</div>` : ''}
            ${tool.image ? `<div class="tool-card__cover" data-tool="${tool.id}"><img class="tool-card__image" src="${tool.image}" alt="${tool.name}"></div>` : ''}
            <div class="tool-card__body">
                <div class="tool-card__heading">
                    <div class="tool-card__icon"><i class="${tool.icon}"></i></div>
                    <h3>${tool.name}</h3>
                </div>
                <p>${tool.description}</p>
                <div class="tool-card__tags">
                    ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                ${tool.link && tool.link !== '#' ? `<a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="btn ${tool.featured ? 'btn--primary' : 'btn--ghost'} btn--sm">Try Now</a>` : ''}
            </div>
        </div>
    `).join('');

    initSlider(DB.aiTools.length);
}

// ========== SLIDER LOGIC ==========
function initSlider(totalCards) {
    const track = document.getElementById('toolsGrid');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dotsContainer = document.getElementById('sliderDots');
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    let perPage = getPerPage();
    let currentPage = 0;
    let totalPages = Math.ceil(totalCards / perPage);

    function getPerPage() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getRowsPerPage() { return 2; }

    function update() {
        const cards = track.querySelectorAll('.tool-card');
        const cardsPerSlide = perPage * getRowsPerPage();
        totalPages = Math.ceil(totalCards / cardsPerSlide);
        if (currentPage >= totalPages) currentPage = totalPages - 1;

        // Show/hide cards per page
        cards.forEach((card, i) => {
            const pageIndex = Math.floor(i / cardsPerSlide);
            card.style.display = pageIndex === currentPage ? '' : 'none';
        });

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages - 1;

        // Update dots
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider__dot' + (i === currentPage ? ' slider__dot--active' : '');
            dot.setAttribute('aria-label', 'Page ' + (i + 1));
            dot.addEventListener('click', () => { currentPage = i; update(); });
            dotsContainer.appendChild(dot);
        }
    }

    prevBtn.addEventListener('click', () => { if (currentPage > 0) { currentPage--; update(); } });
    nextBtn.addEventListener('click', () => { if (currentPage < totalPages - 1) { currentPage++; update(); } });

    window.addEventListener('resize', () => {
        const newPerPage = getPerPage();
        if (newPerPage !== perPage) { perPage = newPerPage; currentPage = 0; update(); }
    });

    update();
}

function renderFreeTools() {
    const grid = document.getElementById('freeToolsGrid');
    if (!grid || !DB.freeTools) return;
    grid.innerHTML = DB.freeTools.map(tool => `
        <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="free-tool">
            <i class="${tool.icon}"></i>
            <h4>${tool.name}</h4>
        </a>
    `).join('');
}

function renderPremiumTools() {
    const grid = document.getElementById('premiumToolsGrid');
    if (!grid || !DB.premiumTools) return;
    grid.innerHTML = DB.premiumTools.map(tool => `
        <div class="premium-tool-card">
            ${tool.badge ? `<div class="premium-tool-card__badge"><i class="fas fa-crown"></i> ${tool.badge}</div>` : ''}
            <div class="premium-tool-card__icon"><i class="${tool.icon}"></i></div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-card__tags">
                ${tool.tags.map(t => `<span class="tag tag--premium">${t}</span>`).join('')}
            </div>
            ${tool.link && tool.link !== '#' ? `<a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Get Access</a>` : ''}
        </div>
    `).join('');
}

function renderAPIs() {
    const grid = document.getElementById('apisGrid');
    if (!grid || !DB.apis) return;
    grid.innerHTML = DB.apis.map(api => `
        <div class="api-card">
            <div class="api-card__header">
                <div class="api-card__method api-card__method--${api.method.toLowerCase()}">${api.method}</div>
                <code class="api-card__endpoint">${api.endpoint}</code>
            </div>
            <h3>${api.name}</h3>
            <p>${api.description}</p>
            <div class="api-card__meta">
                ${api.meta.map(m => `<span><i class="${m.icon}"></i> ${m.label}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contactSocials');
    if (!container || !DB.contact) return;
    container.innerHTML = DB.contact.socials.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="contact-social-btn contact-social-btn--${s.cssClass}">
            <i class="${s.icon}"></i>
            <span>${s.name}</span>
        </a>
    `).join('');
}

function renderProxy() {
    const header = document.getElementById('proxyHeader');
    const card = document.getElementById('proxyCard');
    if (!header || !card || !DB.proxyHighlight) return;
    const p = DB.proxyHighlight;

    header.innerHTML = `
        <span class="section-label"><i class="${p.sectionIcon}"></i> ${p.sectionLabel}</span>
        <h2 class="section-title">${p.title}</h2>
        <p class="section-subtitle">${p.subtitle}</p>
    `;

    card.className = 'proxy-card';
    card.innerHTML = `
        <div class="proxy-card__cover">
            <img src="${p.image}" alt="${p.cardTitle}">
            <div class="proxy-card__price">
                <span class="price-from">${p.priceFrom}</span>
                <span class="price-amount">${p.priceAmount}</span>
                <span class="price-period">${p.pricePeriod}</span>
            </div>
        </div>
        <div class="proxy-card__content">
            ${p.logo ? `<div class="proxy-card__logo"><img src="${p.logo}" alt="DataImpulse"></div>` : ''}
            <div class="proxy-card__badges">
                ${p.badges.map(b => `<span class="proxy-badge proxy-badge--${b.type}"><i class="${b.icon}"></i> ${b.label}</span>`).join('')}
            </div>
            <h3 class="proxy-card__title">${p.cardTitle}</h3>
            <p class="proxy-card__desc">${p.description}</p>
            <ul class="proxy-card__features">
                ${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            </ul>
            <div class="proxy-card__actions">
                <a href="${p.primaryBtn.link}" target="_blank" rel="noopener noreferrer" class="btn btn--glow btn--lg"><i class="${p.primaryBtn.icon}"></i> ${p.primaryBtn.label}</a>
                <a href="${p.secondaryBtn.link}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--lg"><i class="${p.secondaryBtn.icon}"></i> ${p.secondaryBtn.label}</a>
            </div>
        </div>
    `;
}

// Render all sections
renderAITools();
renderFreeTools();
renderProxy();
renderPremiumTools();
renderAPIs();
renderContact();

// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.navbar__links a[href="#${id}"]`);
        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// ========== CTA FORM ==========
const ctaForm = document.getElementById('ctaForm');

if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('API key sent to your email!');
        ctaForm.reset();
    });
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tool-card, .free-tool, .api-card, .feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
