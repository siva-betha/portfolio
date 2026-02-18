// Main rendering functions
function renderSite() {
    renderHero();
    renderAbout();
    renderProjects();
    renderContact();
    renderFooter();
}

function renderHero() {
    const heroContainer = document.getElementById('hero-container');
    if (!heroContainer || !siteData.hero) return;
    
    const hero = siteData.hero;
    heroContainer.innerHTML = `
        <div class="hero-content">
            <p class="hero-greeting">${hero.greeting}</p>
            <h1 class="hero-name">${hero.name}</h1>
            <h2 class="hero-role">${hero.role}</h2>
            <p class="hero-description">${hero.description}</p>
            <a href="${hero.cta.url}" class="hero-cta">${hero.cta.text}</a>
        </div>
    `;
}

function renderAbout() {
    const aboutContainer = document.getElementById('about-container');
    if (!aboutContainer || !siteData.about) return;
    
    const about = siteData.about;
    aboutContainer.innerHTML = `
        <h2 class="section-title">${about.title}</h2>
        <div class="about-content">
            ${about.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
        <div class="skills-container">
            ${about.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
}

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    const projectsTitle = document.getElementById('projects-title');
    if (!projectsContainer || !siteData.projects) return;
    
    // Set the section title
    if (projectsTitle) {
        projectsTitle.textContent = 'My Projects';
    }
    
    // Generate project cards
    const projectsHTML = siteData.projects.map(project => `
        <div class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-description">
                ${project.description.map(line => `${line}<br>`).join('')}
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.map(link => `<a href="${link.url}" class="project-link" target="_blank" rel="noopener">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
    
    projectsContainer.innerHTML = projectsHTML;
}

function renderContact() {
    const contactContainer = document.getElementById('contact-container');
    if (!contactContainer || !siteData.contact) return;
    
    const contact = siteData.contact;
    contactContainer.innerHTML = `
        <h2 class="section-title">${contact.title}</h2>
        <p class="contact-description">${contact.description}</p>
        <div class="contact-email">
            <a href="mailto:${contact.email}">${contact.email}</a>
        </div>
        <div class="social-links">
            ${contact.social.map(platform => `
                <a href="${platform.url}" class="social-link" target="_blank" rel="noopener">
                    ${platform.name}
                </a>
            `).join('')}
        </div>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer || !siteData.site) return;
    
    footerContainer.innerHTML = `
        <div class="container">
            <p>${siteData.site.footer}</p>
        </div>
    `;
}