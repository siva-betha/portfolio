// main.js - Handles rendering safely

function renderSite() {
    // Clear any existing content first
    clearContainers();
    
    // Render all sections
    renderHero();
    renderAbout();
    renderProjects();
    renderContact();
    renderFooter();
}

function clearContainers() {
    const containers = [
        'hero-container',
        'about-container', 
        'projects-container',
        'contact-container',
        'footer-container'
    ];
    
    containers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });
}

// SAFE: Creates elements instead of using innerHTML with strings
function createElementWithText(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text; // SAFE: textContent escapes HTML
    if (className) element.className = className;
    return element;
}

function renderHero() {
    const container = document.getElementById('hero-container');
    if (!container || !siteData.hero) return;
    
    const hero = siteData.hero;
    
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';
    
    // Create elements safely
    heroContent.appendChild(createElementWithText('p', hero.greeting, 'hero-greeting'));
    heroContent.appendChild(createElementWithText('h1', hero.name, 'hero-name'));
    heroContent.appendChild(createElementWithText('h2', hero.role, 'hero-role'));
    heroContent.appendChild(createElementWithText('p', hero.description, 'hero-description'));
    
    // Create CTA link safely
    const cta = document.createElement('a');
    cta.href = hero.cta.url;
    cta.textContent = hero.cta.text;
    cta.className = 'hero-cta';
    heroContent.appendChild(cta);
    
    container.appendChild(heroContent);
}

function renderAbout() {
    const container = document.getElementById('about-container');
    if (!container || !siteData.about) return;
    
    const about = siteData.about;
    
    // Title
    container.appendChild(createElementWithText('h2', about.title, 'section-title'));
    
    // Content paragraphs
    const contentDiv = document.createElement('div');
    contentDiv.className = 'about-content';
    about.content.forEach(paragraph => {
        contentDiv.appendChild(createElementWithText('p', paragraph));
    });
    container.appendChild(contentDiv);
    
    // Skills
    const skillsDiv = document.createElement('div');
    skillsDiv.className = 'skills-container';
    about.skills.forEach(skill => {
        skillsDiv.appendChild(createElementWithText('span', skill, 'skill-tag'));
    });
    container.appendChild(skillsDiv);
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container || !siteData.projects) return;
    
    siteData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Optional image placeholder (you can add image URLs to your JSON)
        const imageDiv = document.createElement('div');
        imageDiv.className = 'project-image';
        // You can set background image here if you add image URLs to JSON
        // if (project.image) imageDiv.style.backgroundImage = `url(${project.image})`;
        card.appendChild(imageDiv);
        
        // Category/Tag (like "Pilates Studio" in your reference)
        if (project.category) {
            card.appendChild(createElementWithText('span', project.category, 'project-category'));
        }
        
        // Title (like "EQUILIBRA PILATES" in your reference)
        const title = createElementWithText('h3', project.title, 'project-title');
        title.style.fontWeight = 'bold';
        title.style.textTransform = 'uppercase';
        card.appendChild(title);
        
        // Subtitle/Role (like "Pilates Studio" second line in your reference)
        if (project.subtitle) {
            card.appendChild(createElementWithText('p', project.subtitle, 'project-subtitle'));
        }
        
        // Metadata line (like "Freya · 2" in your reference)
        const metaDiv = document.createElement('div');
        metaDiv.className = 'project-meta';
        
        if (project.instructor) {
            metaDiv.appendChild(createElementWithText('span', project.instructor, 'project-instructor'));
        }
        
        if (project.duration) {
            if (project.instructor) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dot.textContent = ' · ';
                metaDiv.appendChild(dot);
            }
            metaDiv.appendChild(createElementWithText('span', project.duration, 'project-duration'));
        }
        
        if (project.instructor || project.duration) {
            card.appendChild(metaDiv);
        }
        
        // Tags/Skills (if you want to keep them)
        if (project.tags && project.tags.length > 0) {
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'project-tags';
            project.tags.forEach(tag => {
                tagsDiv.appendChild(createElementWithText('span', tag, 'tag'));
            });
            card.appendChild(tagsDiv);
        }
        
        // CTA Button (like "Book Now →" in your reference)
        if (project.links && project.links.length > 0) {
            const link = project.links[0];
            const ctaButton = document.createElement('a');
            ctaButton.href = link.url;
            ctaButton.className = 'project-cta';
            ctaButton.textContent = link.text + ' →';
            ctaButton.target = '_blank';
            ctaButton.rel = 'noopener noreferrer';
            card.appendChild(ctaButton);
        }
        
        container.appendChild(card);
    });
}

function renderContact() {
    const container = document.getElementById('contact-container');
    if (!container || !siteData.contact) return;
    
    const contact = siteData.contact;
    
    container.appendChild(createElementWithText('h2', contact.title, 'section-title'));
    container.appendChild(createElementWithText('p', contact.description, 'contact-description'));
    
    // Email
    const emailDiv = document.createElement('div');
    emailDiv.className = 'contact-email';
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${contact.email}`;
    emailLink.textContent = contact.email;
    emailDiv.appendChild(emailLink);
    container.appendChild(emailDiv);
    
    // Social links
    const socialDiv = document.createElement('div');
    socialDiv.className = 'social-links';
    contact.social.forEach(platform => {
        const a = document.createElement('a');
        a.href = platform.url;
        a.textContent = platform.name;
        a.className = 'social-link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        socialDiv.appendChild(a);
    });
    container.appendChild(socialDiv);
}

function renderFooter() {
    const container = document.getElementById('footer-container');
    if (!container || !siteData.site) return;
    
    const footerDiv = document.createElement('div');
    footerDiv.className = 'container';
    footerDiv.appendChild(createElementWithText('p', siteData.site.footer));
    container.appendChild(footerDiv);
}