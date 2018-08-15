const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Items = function (url) {
  this.url = 'http://localhost:3000/api/items';
  console.log('items.js line 6:', this.url);
  this.request = new Request(this.url);
};

Items.prototype.bindEvents = function () {

};

Items.prototype.getData = function () {
  this.request.get()
  .then((items) => {
    PubSub.publish('Items:data-loaded', items);
    console.log('items.js line 18:', items);
  })
  .catch(console.error);
};

Items.prototype.postItem = function (item) {
  const request = new Request(this.url);
  request.post(item)
  .then((items) => {
    PubSub.publish('Items:data-loaded', items)
    console.log(items);
  })
  .catch(console.error);
};

Items.prototype.deleteItem = function () {

};

module.exports = Items;
