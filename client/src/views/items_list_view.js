const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ItemsListView = function (container) {
  this.container = container;
};

ItemsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Items:data-loaded', (evt) => {
    this.render(evt.detail);
    console.log('items_list_view.js line 11', evt);
  });
};

ItemsListView.prototype.render = function (items) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);
  items.forEach((item) => itemView.render(item));
  console.log('render:', items);
};

module.exports = ItemsListView;
