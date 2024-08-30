
// Basic JavaScript functionality
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document fully loaded and parsed');
    
    // Example: Toggle visibility of an element
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
    
    if (toggleButton && toggleContent) {
        toggleButton.addEventListener('click', () => {
            if (toggleContent.style.display === 'none') {
                toggleContent.style.display = 'block';
            } else {
                toggleContent.style.display = 'none';
            }
        });
    }
});
