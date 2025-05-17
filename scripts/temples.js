// Gestione del menu hamburger
document.getElementById("menu-toggle").addEventListener("click", function() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
});

// Mostra l'anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mostra l'ultima data di modifica nel footer
document.getElementById("last-modified").textContent = document.lastModified;

