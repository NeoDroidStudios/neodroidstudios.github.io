var listElm = document.querySelector('#infinite-list');
var nextItem = 1;
var listCounter = 0;

var loadMore = function (numItems) {
  for (var i = 0; i < numItems; i++) {
    var item = document.createElement('li');
    item.innerText = nextItem++;
    listElm.appendChild(item);
  }

  // Incrémenter le compteur de listes
  listCounter += numItems;

  // Afficher un message après la 100ème liste
  if (listCounter === 100) {
    var message = document.createElement('p');
    message.innerText = "Vous avez atteint la 100ème ligne, ça fait loin non ?";
    message.style.textAlign = "center"; // Ajouter la propriété CSS pour centrer le texte
    listElm.appendChild(message);
  }
  if (listCounter === 200) {
    var messageFin = document.createElement('p');
    messageFin.innerText = "Vous avez atteint la 200ème ligne, je crois que vous vous êtes perdu";
    messageFin.style.textAlign = "center"; // Ajouter la propriété CSS pour centrer le texte
    listElm.appendChild(messageFin);
  }
}

// Initially load some items.
var initialItemCount = 40;
if (window.innerWidth < 768) { // Pour les petits écrans
  initialItemCount = 20;
} else if (window.innerWidth < 992) { // Pour les écrans moyens
  initialItemCount = 40;
}
loadMore(initialItemCount);

window.addEventListener('scroll', function () {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollTop = window.scrollY;

  if (windowHeight + scrollTop >= documentHeight) {
    if (listCounter <= 200) {
      var itemsToLoad = 10;
      loadMore(itemsToLoad);
    }
  }
});
