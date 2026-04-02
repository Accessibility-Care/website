// JavaScript for interactivity goes here

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // After scrolling, set focus to the target element
            // Use a timeout to ensure scroll has completed or nearly completed
            setTimeout(() => {
                targetElement.focus();
                // If the target element is a section or div, ensure it's announced by screen readers
                // by adding role="region" and aria-label if not already present
                if (!targetElement.hasAttribute('role')) {
                    targetElement.setAttribute('role', 'region');
                }
                if (!targetElement.hasAttribute('aria-label') && targetElement.id) {
                    // Capitalize the first letter of the ID for a nicer aria-label
                    const label = targetElement.id.charAt(0).toUpperCase() + targetElement.id.slice(1);
                    targetElement.setAttribute('aria-label', `${label} section`);
                }
            }, 500); // Adjust timeout as needed, or use scrollend event if widely supported
        }

    });
});

// Initialize Material Design Components (if not already done by mdc.autoInit in index.html)
// This is a fallback or for dynamically added components
if (typeof mdc !== 'undefined' && typeof mdc.autoInit === 'function') {
    // mdc.autoInit(); // Already called in index.html, so no need to repeat
}

// Example of how to manually initialize a component if needed
// const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));

// Handle keyboard activation for MDC cards
document.querySelectorAll('.mdc-card__primary-action[tabindex="0"]').forEach(cardAction => {
    cardAction.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click(); // Trigger the click event
        }
    });
});

