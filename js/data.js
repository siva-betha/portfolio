// data.js - Handles data fetching only
let siteData = {};

// Safe fetch with error handling
async function loadData() {
    try {
        const response = await fetch('data.json', {
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        siteData = await response.json();
        
        // Hide loading, show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Trigger rendering
        if (typeof renderSite === 'function') {
            renderSite();
        }
        
    } catch (error) {
        console.error('Error loading data:', error);
        // Show user-friendly error
        document.getElementById('loading').innerHTML = `
            <div class="error-message">
                <p>⚠️ Failed to load content. Please refresh the page.</p>
            </div>
        `;
    }
}

// Start loading when page loads
document.addEventListener('DOMContentLoaded', loadData);