console.log("Bienvenue dans la console développeur !");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    alert("Merci pour ton message !");
});
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
