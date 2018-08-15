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

  const completedButton = this.createCompletedButton(item._id);
  itemContainer.appendChild(completedButton);

  this.container.appendChild(itemContainer);
};

ItemView.prototype.createDetail = function (text) {
  const detail = document.createElement('p');
  detail.textContent = text;
  detail.classList.add('listItem');
  // detail.classList.add('');
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

ItemView.prototype.createCompletedButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('completed-btn');
  button.value = itemId;
  button.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-completed-clicked', evt.target.value);
  });
  return button;
};

module.exports = ItemView;
