//Permet d'afficher la barre de chargement pendant 3,7 secondes puis d'afficher la page
document.getElementById('main').style.display = "none";
function chargement() {
    document.getElementById('loader').remove();
    document.getElementById('main').style.display = "";
}
setTimeout(chargement, 3700);