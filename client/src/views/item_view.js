const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
}

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';

  const itemDetail = this.createDetail(item.item);
  console.log(item.itemDetail);
  console.log(item.item);
  itemContainer.appendChild(itemDetail);

  // const deleteButton = this.createDeleteButton(item._id);
  // itemContainer.appendChild(deleteButton);

  this.container.appendChild(itemContainer);
};

ItemView.prototype.createDetail = function (text) {
  const detail = document.createElement('p');
  detail.textContent = text;
  return detail;
};

// add deletebutton

module.exports = ItemView;
