var listElm = document.querySelector('#infinite-list');
var nextItem = 1;

var loadMore = function (numItems) {
  for (var i = 0; i < numItems; i++) {
    var item = document.createElement('li');
    item.innerText = nextItem++;
    listElm.appendChild(item);
  }
}

// Initially load some items.
loadMore(25);

window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollTop = window.scrollY;

  if (windowHeight + scrollTop >= documentHeight) {
    // Load more items
    loadMore(10); // Charger 10 éléments supplémentaires
  }
});
