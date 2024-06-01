// Function to redirect to admin dashboard
function loginAsAdmin() {
    window.location.href = "admin-dashboard.html";
}

// Function to redirect to user dashboard
function loginAsUser() {
    window.location.href = "user-dashboard.html";
}

// Function to redirect to edit user info page
function editUserInfo() {
    window.location.href = "edit-user-info.html";
}

// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    // Save theme preference to local storage
    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme();
});

// Check if dark mode preference is saved in local storage
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'true') {
    toggleTheme(); // If dark mode preference is true, enable dark mode
}
