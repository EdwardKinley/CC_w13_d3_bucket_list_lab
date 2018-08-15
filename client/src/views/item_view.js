const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
}

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';

  const itemDetail = this.createDetail(item.item);
  console.log(item.item);
  itemContainer.appendChild(itemDetail);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton);

  this.container.appendChild(itemContainer);
};

ItemView.prototype.createDetail = function (text) {
  const detail = document.createElement('p');
  detail.textContent = text;
  detail.classList.add('listItem');
  return detail;
};

ItemView.prototype.createDeleteButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = itemId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = ItemView;
