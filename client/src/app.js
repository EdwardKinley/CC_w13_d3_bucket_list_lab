const ItemFormView = require('./views/item_form_view.js')
const ItemsListView = require('./views/items_list_view.js');
const Items = require('./models/items.js');

document.addEventListener('DOMContentLoaded', () => {
  const itemForm = document.querySelector('form#items-form');
  const itemFormView = new ItemFormView(itemForm);
  itemFormView.bindEvents();

  const itemsContainer = document.querySelector('div#items');
  const itemsListView = new ItemsListView(itemsContainer);
  itemsListView.bindEvents();

  // const itemsUrl = 'http://localhost:3000/api/items';
  const items = new Items();
  items.bindEvents();
  items.getData();
});
