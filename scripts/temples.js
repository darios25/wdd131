// Hamburger menu management
document.getElementById("menu-toggle").addEventListener("click", function() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
});

// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;

