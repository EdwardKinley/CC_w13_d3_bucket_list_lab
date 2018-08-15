/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ItemFormView = __webpack_require__(/*! ./views/item_form_view.js */ \"./client/src/views/item_form_view.js\")\nconst ItemsListView = __webpack_require__(/*! ./views/items_list_view.js */ \"./client/src/views/items_list_view.js\");\nconst Items = __webpack_require__(/*! ./models/items.js */ \"./client/src/models/items.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const itemForm = document.querySelector('form#items-form');\n  const itemFormView = new ItemFormView(itemForm);\n  itemFormView.bindEvents();\n\n  const itemsContainer = document.querySelector('div#items');\n  const itemsListView = new ItemsListView(itemsContainer);\n  itemsListView.bindEvents();\n\n  // const itemsUrl = 'http://localhost:3000/api/items';\n  const items = new Items();\n  items.bindEvents();\n  items.getData();\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequest.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json());\n};\n\nRequest.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/items.js":
/*!************************************!*\
  !*** ./client/src/models/items.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst Items = function (url) {\n  this.url = 'http://localhost:3000/api/items';\n  console.log('items.js line 6:', this.url);\n  this.request = new Request(this.url);\n};\n\nItems.prototype.bindEvents = function () {\n  PubSub.subscribe('ItemView:item-delete-clicked', (evt) => {\n    this.deleteItem(evt.detail);\n  });\n\n  PubSub.subscribe('ItemView:item-submitted', (evt) => {\n    this.postItem(evt.detail);\n  });\n};\n\nItems.prototype.getData = function () {\n  this.request.get()\n  .then((items) => {\n    PubSub.publish('Items:data-loaded', items);\n    console.log('items.js line 18:', items);\n  })\n  .catch(console.error);\n};\n\nItems.prototype.postItem = function (item) {\n  const request = new Request(this.url);\n  request.post(item)\n  .then((items) => {\n    PubSub.publish('Items:data-loaded', items)\n    console.log(items);\n  })\n  .catch(console.error);\n};\n\nItems.prototype.deleteItem = function () {\n  this.request.delete(itemId)\n  .then((items) => {\n    PubSub.publish('Items:data-loaded', items);\n  })\n  .catch(console.error);\n};\n\nmodule.exports = Items;\n\n\n//# sourceURL=webpack:///./client/src/models/items.js?");

/***/ }),

/***/ "./client/src/views/item_form_view.js":
/*!********************************************!*\
  !*** ./client/src/views/item_form_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ItemFormView = function (form) {\n  this.form = form;\n};\n\nItemFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (evt) => {\n    this.handleSubmit(evt);\n  });\n};\n\nItemFormView.prototype.handleSubmit = function (evt) {\n  evt.preventDefault();\n  const newItem = this.createItem(evt.target);\n  PubSub.publish('ItemView:item-submitted', newItem);\n  evt.target.reset();\n};\n\nItemFormView.prototype.createItem = function (form) {\n  const newItem = {\n    item: form.item.value\n  }\n  return newItem;\n};\n\nmodule.exports = ItemFormView;\n\n\n//# sourceURL=webpack:///./client/src/views/item_form_view.js?");

/***/ }),

/***/ "./client/src/views/item_view.js":
/*!***************************************!*\
  !*** ./client/src/views/item_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ItemView = function (container) {\n  this.container = container;\n}\n\nItemView.prototype.render = function (item) {\n  const itemContainer = document.createElement('div');\n  itemContainer.id = 'item';\n\n  const itemDetail = this.createDetail(item.item);\n  console.log(item.item);\n  itemContainer.appendChild(itemDetail);\n\n  // const deleteButton = this.createDeleteButton(item._id);\n  // itemContainer.appendChild(deleteButton);\n\n  this.container.appendChild(itemContainer);\n};\n\nItemView.prototype.createDetail = function (text) {\n  const detail = document.createElement('p');\n  detail.textContent = text;\n  return detail;\n};\n\n// add deletebutton\n\nmodule.exports = ItemView;\n\n\n//# sourceURL=webpack:///./client/src/views/item_view.js?");

/***/ }),

/***/ "./client/src/views/items_list_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/items_list_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ItemView = __webpack_require__(/*! ./item_view.js */ \"./client/src/views/item_view.js\");\n\nconst ItemsListView = function (container) {\n  this.container = container;\n};\n\nItemsListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Items:data-loaded', (evt) => {\n    this.render(evt.detail);\n    console.log('items_list_view.js line 11', evt);\n  });\n};\n\nItemsListView.prototype.render = function (items) {\n  this.container.innerHTML = '';\n  const itemView = new ItemView(this.container);\n  items.forEach((item) => itemView.render(item));\n  console.log('render:', items);\n};\n\nmodule.exports = ItemsListView;\n\n\n//# sourceURL=webpack:///./client/src/views/items_list_view.js?");

/***/ })

/******/ });