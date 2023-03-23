var listElm = document.querySelector('#infinite-list');
// Add 20 items.
var nextItem = 1;
var loadMore = function () {
    for (var i = 0; i < 25; i++) {
        var item = document.createElement('li');
        item.innerText = nextItem++;
        listElm.appendChild(item);
    }
}
// Initially load some items.
loadMore();