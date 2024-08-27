const modeToggle = document.getElementById('mode-toggle');
const rootElement = document.documentElement;

// Function to set the theme
function setTheme(theme) {
    rootElement.dataset.theme = theme;
    if (theme === 'light') {
        modeToggle.src = 'icons/white-balance-sunny.svg'; // Light mode icon
        modeToggle.alt = 'Switch to Dark Mode';
    } else {
        modeToggle.src = 'icons/weather-night.svg'; // Dark mode icon
        modeToggle.alt = 'Switch to Light Mode';
    }
}

// Check the initial theme and set it
const initialTheme = rootElement.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(initialTheme);

// Add event listener to the toggle button
modeToggle.addEventListener('click', () => {
    const newTheme = rootElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});
