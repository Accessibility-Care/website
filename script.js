// JavaScript for interactivity goes here

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Material Design Components (if not already done by mdc.autoInit in index.html)
// This is a fallback or for dynamically added components
if (typeof mdc !== 'undefined' && typeof mdc.autoInit === 'function') {
    // mdc.autoInit(); // Already called in index.html, so no need to repeat
}

// Example of how to manually initialize a component if needed
// const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
