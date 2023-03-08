/**
 * Tableau de chaînes de caractères représentant les mots à faire défiler.
 * 
 * @type {string[]}
 */
var words = ["_Developpeur Web", "_Developpeur Application", "_Pentesteur"];

/**
 * Compteur utilisé pour suivre la position actuelle dans le mot en cours de défilement.
 * 
 * @type {number}
 */
var counter = 0;

/**
 * Index aléatoire du mot actuellement affiché dans le tableau "words".
 * 
 * @type {number}
 */
var currentIndex = getRandomInt(0, words.length - 1);

/**
 * Élément HTML dans lequel les mots sont affichés.
 * 
 * @type {HTMLElement}
 */
var div = document.getElementById("write");

/**
 * ID de l'intervalle utilisé pour faire avancer le défilement du mot.
 * 
 * @type {number}
 */
var stepInterval = setInterval(() => { step(); }, 400);

/**
 * ID de l'intervalle utilisé pour supprimer des lettres du mot actuellement affiché.
 * 
 * @type {number|null}
 */
var delInterval = null;

/**
 * ID du délai d'attente utilisé pour appeler la fonction "delIntervalCallback".
 * 
 * @type {number|null}
 */
var delTimeout = null;

/**
 * Renvoie un nombre entier aléatoire compris entre les bornes "min" et "max" inclus.
 * 
 * @param {number} min - La borne inférieure pour la génération de nombres aléatoires.
 * @param {number} max - La borne supérieure pour la génération de nombres aléatoires.
 * @returns {number} - Un nombre entier aléatoire compris entre "min" et "max" inclus.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Appelle la fonction "del" toutes les 100 millisecondes pour supprimer progressivement les lettres du mot actuellement affiché.
 * Réinitialise l'intervalle "stepInterval" pour permettre l'affichage du nouveau mot après que le mot actuel a été supprimé.
 * Supprime le délai d'attente précédent (s'il existe) pour éviter des appels multiples de la fonction "delIntervalCallback".
 * Stocke l'ID de l'intervalle pour pouvoir le supprimer ultérieurement si nécessaire.
 * 
 * @returns {void}
 */
function delIntervalCallback() {
    const intervalId = setInterval(() => { del(); }, 100);
    clearTimeout(delTimeout);
    delInterval = intervalId;
}

/**
 * Supprime la dernière lettre du mot actuellement affiché et décrémente le compteur "counter".
 * Si le mot actuellement affiché a été entièrement supprimé, réinitialise l'intervalle "stepInterval" pour permettre l'affichage du nouveau mot.
 * 
 * @returns {void}
 */
function del() {
    if (counter == 0) {
        let newIndex = getRandomInt(0, words.length - 1);
        while (newIndex == currentIndex) {
            newIndex = getRandomInt(0, words.length - 1);
        }
        currentIndex = newIndex;
        clearInterval(delInterval);
        stepInterval = setInterval(() => { step(); }, 200);
    }
    else {
        div.textContent = div.textContent.slice(0, -1)
        counter--;
    }
}

/**
 * Cette fonction est appelée pour afficher progressivement le texte dans un élément HTML "div".
 * Si tous les caractères ont été affichés, elle appelle la fonction "delIntervalCallback" après une pause de 2 secondes.
 * 
 * @returns {void}
 */
function step() {
    /**
     * On vérifie si le nombre de caractères affichés est supérieur ou égal à la longueur de la chaîne
     * de caractères actuellement affichée (à l'index "currentIndex" dans le tableau "words").
     * Si c'est le cas, cela signifie que tout le texte a été affiché, et la fonction arrête l'intervalle
     * "stepInterval" utilisé pour l'affichage progressif du texte. Elle met ensuite en place un délai de
     * 2 secondes avant d'appeler la fonction "delIntervalCallback".
    */
    if (counter >= words[currentIndex].length) {
        clearInterval(stepInterval);
        delTimeout = setTimeout(() => { delIntervalCallback(); }, 2000);
    }
    /**
     * On ajoute le caractère suivant de la chaîne de caractères dans l'élément HTML "div".
     * Elle incrémente également le compteur "counter" pour indiquer qu'un caractère supplémentaire
     * a été affiché.
     */
    else {
        div.textContent += words[currentIndex][counter];
        counter++;
    }
}
