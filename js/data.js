// This file loads the JSON data
let siteData = {};

// Load JSON data
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        siteData = data;
        // Once data is loaded, render all sections
        renderSite();
    })
    .catch(error => {
        console.error('Error loading data:', error);
        // Fallback content or error message
        document.body.innerHTML = '<p style="color: red; padding: 2rem;">Error loading portfolio data. Please try again later.</p>';
    });