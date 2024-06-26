document.addEventListener("DOMContentLoaded", function () {
    const includeMenuElements = document.querySelectorAll('[data-include]');

    includeMenuElements.forEach(async (el) => {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Error loading file: ${response.statusText}`);
            }
            const text = await response.text();
            el.innerHTML = text;
        } catch (error) {
            console.error("Error loading file:", error);
        }
    });
});
