//Création du cookie chargementEffectue afin de ne pas répéter l'animation de chargement
if (document.cookie.indexOf("chargementEffectue") === -1) {
    // Le cookie n'existe pas, exécute la fonction "chargement" et définit le cookie
    document.getElementById('main').style.display = "none";
    function chargement() {
        document.getElementById('loader').remove();
        document.getElementById('main').style.display = "";
        // Définit le cookie pour indiquer que la fonction a été exécutée
        var now = new Date();
        var time = now.getTime();
        //Expiration après une heure
        time += 600 * 1000;
        now.setTime(time);
        document.cookie = 'chargementEffectue=true; expires=' + now.toUTCString() + ';';
    }
    setTimeout(chargement, 3700);
} else {
    // Le cookie existe, la fonction a déjà été exécutée, donc affiche directement le contenu
    document.getElementById('main').style.display = "";
    document.getElementById('loader').remove();
}