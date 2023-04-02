//Le cookie permet de n'afficher d'une fois la barre de chargement
if (typeof (cookie) === 'undefined') {   
    //Permet d'afficher la barre de chargement pendant 3,7 secondes puis d'afficher la page
    document.getElementById('main').style.display = "none";
    function chargement() {
        document.getElementById('loader').remove();
        document.getElementById('main').style.display = "";
    }
    setTimeout(chargement, 3700);

    var now = new Date();
    var time = now.getTime();
    //Expiration après une heure
    time += 3600 * 1000;
    now.setTime(time);
    document.cookie = 'username=set; expires=' + now.toUTCString() + '; path=/';
} else {
    document.getElementById('loader').remove();
}