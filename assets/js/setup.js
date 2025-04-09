// This file contains JavaScript code for the setup feature of the website.
// It handles user interactions, such as opening and closing windows, and any setup processes.

document.addEventListener('DOMContentLoaded', function() {
    const setupButton = document.getElementById('setup-button');
    const setupWindow = document.getElementById('setup-window');
    const closeButton = document.getElementById('close-button');

    setupButton.addEventListener('click', function() {
        setupWindow.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        setupWindow.style.display = 'none';
    });

    // Additional setup logic can be added here
});