// Language data (English & Swahili translations)
const translations = {
    en: {
        dashboard: "Dashboard Overview",
        greeting: "Hello",
    },
    sw: {
        dashboard: "Muhtasari wa Dashibodi",
        greeting: "Habari",
    },
};

// Function to update the content based on the selected language
function changeLanguage() {
    const selectedLang = document.getElementById("languageSelector").value;
    
    // Change text content dynamically
    document.getElementById("dashboardTitle").textContent = translations[selectedLang].dashboard;
    document.getElementById("greeting").textContent = translations[selectedLang].greeting;
}

// Event listener for dropdown change
document.getElementById("languageSelector").addEventListener("change", changeLanguage);
