/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto/Roboto-Regular.ttf */ "./src/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: \"Roboto\";\n  color: white;\n  background-color: black;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  height: 115px;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n#message-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 2rem;\n  height: 100px;\n}\n\n#game-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-bottom: 100px;\n}\n\n#player-wrapper {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  min-width: 525px;\n  z-index: 1;\n}\n\n#overlay-1,\n#overlay-2 {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#player-1-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-right: 10px;\n  z-index: 3;\n}\n\n#player-2-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-left: 10px;\n  order: 2;\n  z-index: 3;\n}\n\n.ship {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  padding: 10px;\n}\n\n.life-block {\n  width: 10px;\n  height: 10px;\n  background-color: #2dd4bf;\n}\n\n#player-1-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  z-index: 1;\n}\n\n#player-2-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  order: 1;\n  z-index: 1;\n}\n\n.column-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.block {\n  border: solid #b5f7ea;\n}\n\n#footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n/* For switching the order of player 2 board and player 2 ships when wrapping */\n@media screen and (max-width: 1049px) {\n  #player-2-ships {\n    order: 1;\n  }\n  #player-2-board {\n    order: 2;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  #player-wrapper {\n    min-width: unset;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAAqC;AACvC;;AAEA;;EAEE,YAAY;EACZ,SAAS;EACT,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,+EAA+E;AAC/E;EACE;IACE,QAAQ;EACV;EACA;IACE,QAAQ;EACV;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@font-face {\n  font-family: Roboto;\n  src: url(./Roboto/Roboto-Regular.ttf);\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: \"Roboto\";\n  color: white;\n  background-color: black;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  height: 115px;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n#message-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 2rem;\n  height: 100px;\n}\n\n#game-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-bottom: 100px;\n}\n\n#player-wrapper {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  min-width: 525px;\n  z-index: 1;\n}\n\n#overlay-1,\n#overlay-2 {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#player-1-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-right: 10px;\n  z-index: 3;\n}\n\n#player-2-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-left: 10px;\n  order: 2;\n  z-index: 3;\n}\n\n.ship {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  padding: 10px;\n}\n\n.life-block {\n  width: 10px;\n  height: 10px;\n  background-color: #2dd4bf;\n}\n\n#player-1-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  z-index: 1;\n}\n\n#player-2-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  order: 1;\n  z-index: 1;\n}\n\n.column-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.block {\n  border: solid #b5f7ea;\n}\n\n#footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n/* For switching the order of player 2 board and player 2 ships when wrapping */\n@media screen and (max-width: 1049px) {\n  #player-2-ships {\n    order: 1;\n  }\n  #player-2-board {\n    order: 2;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  #player-wrapper {\n    min-width: unset;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHit": () => (/* binding */ displayHit),
/* harmony export */   "displayMiss": () => (/* binding */ displayMiss),
/* harmony export */   "displayPlayerShips": () => (/* binding */ displayPlayerShips),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "gameBuilder": () => (/* binding */ gameBuilder),
/* harmony export */   "hideNonActivePlayerBoard": () => (/* binding */ hideNonActivePlayerBoard),
/* harmony export */   "removeShipLifeBlock": () => (/* binding */ removeShipLifeBlock)
/* harmony export */ });
function gameBuilder() {
  // Declare elements
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const header = document.createElement("div");
  const headerHeader = document.createElement("h1");
  const headerTxt = document.createTextNode("Battleship");
  const messageSection = document.createElement("div");
  const gameSection = document.createElement("div");

  const playerWrapper1 = document.createElement("div");
  const overlay1 = document.createElement("div");
  const player1Ships = document.createElement("div");
  const carrier1 = document.createElement("div");
  const carrier1LifeBlock1 = document.createElement("div");
  const carrier1LifeBlock2 = document.createElement("div");
  const carrier1LifeBlock3 = document.createElement("div");
  const carrier1LifeBlock4 = document.createElement("div");
  const carrier1LifeBlock5 = document.createElement("div");
  const battleship1 = document.createElement("div");
  const battleship1LifeBlock1 = document.createElement("div");
  const battleship1LifeBlock2 = document.createElement("div");
  const battleship1LifeBlock3 = document.createElement("div");
  const battleship1LifeBlock4 = document.createElement("div");
  const cruiser1 = document.createElement("div");
  const cruiser1LifeBlock1 = document.createElement("div");
  const cruiser1LifeBlock2 = document.createElement("div");
  const cruiser1LifeBlock3 = document.createElement("div");
  const submarine1 = document.createElement("div");
  const submarine1LifeBlock1 = document.createElement("div");
  const submarine1LifeBlock2 = document.createElement("div");
  const submarine1LifeBlock3 = document.createElement("div");
  const patrolBoat1 = document.createElement("div");
  const patrolBoat1LifeBlock1 = document.createElement("div");
  const patrolBoat1LifeBlock2 = document.createElement("div");

  const player1Board = document.createElement("div");
  const emptySpace1 = document.createElement("div");
  const columnNumberAPlayer1 = document.createElement("div");
  const columnNumberAPlayer1Txt = document.createTextNode("A");
  const columnNumberBPlayer1 = document.createElement("div");
  const columnNumberBPlayer1Txt = document.createTextNode("B");
  const columnNumberCPlayer1 = document.createElement("div");
  const columnNumberCPlayer1Txt = document.createTextNode("C");
  const columnNumberDPlayer1 = document.createElement("div");
  const columnNumberDPlayer1Txt = document.createTextNode("D");
  const columnNumberEPlayer1 = document.createElement("div");
  const columnNumberEPlayer1Txt = document.createTextNode("E");
  const columnNumberFPlayer1 = document.createElement("div");
  const columnNumberFPlayer1Txt = document.createTextNode("F");
  const columnNumberGPlayer1 = document.createElement("div");
  const columnNumberGPlayer1Txt = document.createTextNode("G");
  const columnNumberHPlayer1 = document.createElement("div");
  const columnNumberHPlayer1Txt = document.createTextNode("H");
  const columnNumberIPlayer1 = document.createElement("div");
  const columnNumberIPlayer1Txt = document.createTextNode("I");
  const columnNumberJPlayer1 = document.createElement("div");
  const columnNumberJPlayer1Txt = document.createTextNode("J");
  const rowNumber1Player1 = document.createElement("div");
  const rowNumber1Player1Txt = document.createTextNode("1");
  const blockA1Player1 = document.createElement("div");
  const blockB1Player1 = document.createElement("div");
  const blockC1Player1 = document.createElement("div");
  const blockD1Player1 = document.createElement("div");
  const blockE1Player1 = document.createElement("div");
  const blockF1Player1 = document.createElement("div");
  const blockG1Player1 = document.createElement("div");
  const blockH1Player1 = document.createElement("div");
  const blockI1Player1 = document.createElement("div");
  const blockJ1Player1 = document.createElement("div");
  const rowNumber2Player1 = document.createElement("div");
  const rowNumber2Player1Txt = document.createTextNode("2");
  const blockA2Player1 = document.createElement("div");
  const blockB2Player1 = document.createElement("div");
  const blockC2Player1 = document.createElement("div");
  const blockD2Player1 = document.createElement("div");
  const blockE2Player1 = document.createElement("div");
  const blockF2Player1 = document.createElement("div");
  const blockG2Player1 = document.createElement("div");
  const blockH2Player1 = document.createElement("div");
  const blockI2Player1 = document.createElement("div");
  const blockJ2Player1 = document.createElement("div");
  const rowNumber3Player1 = document.createElement("div");
  const rowNumber3Player1Txt = document.createTextNode("3");
  const blockA3Player1 = document.createElement("div");
  const blockB3Player1 = document.createElement("div");
  const blockC3Player1 = document.createElement("div");
  const blockD3Player1 = document.createElement("div");
  const blockE3Player1 = document.createElement("div");
  const blockF3Player1 = document.createElement("div");
  const blockG3Player1 = document.createElement("div");
  const blockH3Player1 = document.createElement("div");
  const blockI3Player1 = document.createElement("div");
  const blockJ3Player1 = document.createElement("div");
  const rowNumber4Player1 = document.createElement("div");
  const rowNumber4Player1Txt = document.createTextNode("4");
  const blockA4Player1 = document.createElement("div");
  const blockB4Player1 = document.createElement("div");
  const blockC4Player1 = document.createElement("div");
  const blockD4Player1 = document.createElement("div");
  const blockE4Player1 = document.createElement("div");
  const blockF4Player1 = document.createElement("div");
  const blockG4Player1 = document.createElement("div");
  const blockH4Player1 = document.createElement("div");
  const blockI4Player1 = document.createElement("div");
  const blockJ4Player1 = document.createElement("div");
  const rowNumber5Player1 = document.createElement("div");
  const rowNumber5Player1Txt = document.createTextNode("5");
  const blockA5Player1 = document.createElement("div");
  const blockB5Player1 = document.createElement("div");
  const blockC5Player1 = document.createElement("div");
  const blockD5Player1 = document.createElement("div");
  const blockE5Player1 = document.createElement("div");
  const blockF5Player1 = document.createElement("div");
  const blockG5Player1 = document.createElement("div");
  const blockH5Player1 = document.createElement("div");
  const blockI5Player1 = document.createElement("div");
  const blockJ5Player1 = document.createElement("div");
  const rowNumber6Player1 = document.createElement("div");
  const rowNumber6Player1Txt = document.createTextNode("6");
  const blockA6Player1 = document.createElement("div");
  const blockB6Player1 = document.createElement("div");
  const blockC6Player1 = document.createElement("div");
  const blockD6Player1 = document.createElement("div");
  const blockE6Player1 = document.createElement("div");
  const blockF6Player1 = document.createElement("div");
  const blockG6Player1 = document.createElement("div");
  const blockH6Player1 = document.createElement("div");
  const blockI6Player1 = document.createElement("div");
  const blockJ6Player1 = document.createElement("div");
  const rowNumber7Player1 = document.createElement("div");
  const rowNumber7Player1Txt = document.createTextNode("7");
  const blockA7Player1 = document.createElement("div");
  const blockB7Player1 = document.createElement("div");
  const blockC7Player1 = document.createElement("div");
  const blockD7Player1 = document.createElement("div");
  const blockE7Player1 = document.createElement("div");
  const blockF7Player1 = document.createElement("div");
  const blockG7Player1 = document.createElement("div");
  const blockH7Player1 = document.createElement("div");
  const blockI7Player1 = document.createElement("div");
  const blockJ7Player1 = document.createElement("div");
  const rowNumber8Player1 = document.createElement("div");
  const rowNumber8Player1Txt = document.createTextNode("8");
  const blockA8Player1 = document.createElement("div");
  const blockB8Player1 = document.createElement("div");
  const blockC8Player1 = document.createElement("div");
  const blockD8Player1 = document.createElement("div");
  const blockE8Player1 = document.createElement("div");
  const blockF8Player1 = document.createElement("div");
  const blockG8Player1 = document.createElement("div");
  const blockH8Player1 = document.createElement("div");
  const blockI8Player1 = document.createElement("div");
  const blockJ8Player1 = document.createElement("div");
  const rowNumber9Player1 = document.createElement("div");
  const rowNumber9Player1Txt = document.createTextNode("9");
  const blockA9Player1 = document.createElement("div");
  const blockB9Player1 = document.createElement("div");
  const blockC9Player1 = document.createElement("div");
  const blockD9Player1 = document.createElement("div");
  const blockE9Player1 = document.createElement("div");
  const blockF9Player1 = document.createElement("div");
  const blockG9Player1 = document.createElement("div");
  const blockH9Player1 = document.createElement("div");
  const blockI9Player1 = document.createElement("div");
  const blockJ9Player1 = document.createElement("div");
  const rowNumber10Player1 = document.createElement("div");
  const rowNumber10Player1Txt = document.createTextNode("10");
  const blockA10Player1 = document.createElement("div");
  const blockB10Player1 = document.createElement("div");
  const blockC10Player1 = document.createElement("div");
  const blockD10Player1 = document.createElement("div");
  const blockE10Player1 = document.createElement("div");
  const blockF10Player1 = document.createElement("div");
  const blockG10Player1 = document.createElement("div");
  const blockH10Player1 = document.createElement("div");
  const blockI10Player1 = document.createElement("div");
  const blockJ10Player1 = document.createElement("div");

  const playerWrapper2 = document.createElement("div");
  const overlay2 = document.createElement("div");
  const player2Board = document.createElement("div");
  const emptySpace2 = document.createElement("div");
  const columnNumberAPlayer2 = document.createElement("div");
  const columnNumberAPlayer2Txt = document.createTextNode("A");
  const columnNumberBPlayer2 = document.createElement("div");
  const columnNumberBPlayer2Txt = document.createTextNode("B");
  const columnNumberCPlayer2 = document.createElement("div");
  const columnNumberCPlayer2Txt = document.createTextNode("C");
  const columnNumberDPlayer2 = document.createElement("div");
  const columnNumberDPlayer2Txt = document.createTextNode("D");
  const columnNumberEPlayer2 = document.createElement("div");
  const columnNumberEPlayer2Txt = document.createTextNode("E");
  const columnNumberFPlayer2 = document.createElement("div");
  const columnNumberFPlayer2Txt = document.createTextNode("F");
  const columnNumberGPlayer2 = document.createElement("div");
  const columnNumberGPlayer2Txt = document.createTextNode("G");
  const columnNumberHPlayer2 = document.createElement("div");
  const columnNumberHPlayer2Txt = document.createTextNode("H");
  const columnNumberIPlayer2 = document.createElement("div");
  const columnNumberIPlayer2Txt = document.createTextNode("I");
  const columnNumberJPlayer2 = document.createElement("div");
  const columnNumberJPlayer2Txt = document.createTextNode("J");
  const rowNumber1Player2 = document.createElement("div");
  const rowNumber1Player2Txt = document.createTextNode("1");
  const blockA1Player2 = document.createElement("div");
  const blockB1Player2 = document.createElement("div");
  const blockC1Player2 = document.createElement("div");
  const blockD1Player2 = document.createElement("div");
  const blockE1Player2 = document.createElement("div");
  const blockF1Player2 = document.createElement("div");
  const blockG1Player2 = document.createElement("div");
  const blockH1Player2 = document.createElement("div");
  const blockI1Player2 = document.createElement("div");
  const blockJ1Player2 = document.createElement("div");
  const rowNumber2Player2 = document.createElement("div");
  const rowNumber2Player2Txt = document.createTextNode("2");
  const blockA2Player2 = document.createElement("div");
  const blockB2Player2 = document.createElement("div");
  const blockC2Player2 = document.createElement("div");
  const blockD2Player2 = document.createElement("div");
  const blockE2Player2 = document.createElement("div");
  const blockF2Player2 = document.createElement("div");
  const blockG2Player2 = document.createElement("div");
  const blockH2Player2 = document.createElement("div");
  const blockI2Player2 = document.createElement("div");
  const blockJ2Player2 = document.createElement("div");
  const rowNumber3Player2 = document.createElement("div");
  const rowNumber3Player2Txt = document.createTextNode("3");
  const blockA3Player2 = document.createElement("div");
  const blockB3Player2 = document.createElement("div");
  const blockC3Player2 = document.createElement("div");
  const blockD3Player2 = document.createElement("div");
  const blockE3Player2 = document.createElement("div");
  const blockF3Player2 = document.createElement("div");
  const blockG3Player2 = document.createElement("div");
  const blockH3Player2 = document.createElement("div");
  const blockI3Player2 = document.createElement("div");
  const blockJ3Player2 = document.createElement("div");
  const rowNumber4Player2 = document.createElement("div");
  const rowNumber4Player2Txt = document.createTextNode("4");
  const blockA4Player2 = document.createElement("div");
  const blockB4Player2 = document.createElement("div");
  const blockC4Player2 = document.createElement("div");
  const blockD4Player2 = document.createElement("div");
  const blockE4Player2 = document.createElement("div");
  const blockF4Player2 = document.createElement("div");
  const blockG4Player2 = document.createElement("div");
  const blockH4Player2 = document.createElement("div");
  const blockI4Player2 = document.createElement("div");
  const blockJ4Player2 = document.createElement("div");
  const rowNumber5Player2 = document.createElement("div");
  const rowNumber5Player2Txt = document.createTextNode("5");
  const blockA5Player2 = document.createElement("div");
  const blockB5Player2 = document.createElement("div");
  const blockC5Player2 = document.createElement("div");
  const blockD5Player2 = document.createElement("div");
  const blockE5Player2 = document.createElement("div");
  const blockF5Player2 = document.createElement("div");
  const blockG5Player2 = document.createElement("div");
  const blockH5Player2 = document.createElement("div");
  const blockI5Player2 = document.createElement("div");
  const blockJ5Player2 = document.createElement("div");
  const rowNumber6Player2 = document.createElement("div");
  const rowNumber6Player2Txt = document.createTextNode("6");
  const blockA6Player2 = document.createElement("div");
  const blockB6Player2 = document.createElement("div");
  const blockC6Player2 = document.createElement("div");
  const blockD6Player2 = document.createElement("div");
  const blockE6Player2 = document.createElement("div");
  const blockF6Player2 = document.createElement("div");
  const blockG6Player2 = document.createElement("div");
  const blockH6Player2 = document.createElement("div");
  const blockI6Player2 = document.createElement("div");
  const blockJ6Player2 = document.createElement("div");
  const rowNumber7Player2 = document.createElement("div");
  const rowNumber7Player2Txt = document.createTextNode("7");
  const blockA7Player2 = document.createElement("div");
  const blockB7Player2 = document.createElement("div");
  const blockC7Player2 = document.createElement("div");
  const blockD7Player2 = document.createElement("div");
  const blockE7Player2 = document.createElement("div");
  const blockF7Player2 = document.createElement("div");
  const blockG7Player2 = document.createElement("div");
  const blockH7Player2 = document.createElement("div");
  const blockI7Player2 = document.createElement("div");
  const blockJ7Player2 = document.createElement("div");
  const rowNumber8Player2 = document.createElement("div");
  const rowNumber8Player2Txt = document.createTextNode("8");
  const blockA8Player2 = document.createElement("div");
  const blockB8Player2 = document.createElement("div");
  const blockC8Player2 = document.createElement("div");
  const blockD8Player2 = document.createElement("div");
  const blockE8Player2 = document.createElement("div");
  const blockF8Player2 = document.createElement("div");
  const blockG8Player2 = document.createElement("div");
  const blockH8Player2 = document.createElement("div");
  const blockI8Player2 = document.createElement("div");
  const blockJ8Player2 = document.createElement("div");
  const rowNumber9Player2 = document.createElement("div");
  const rowNumber9Player2Txt = document.createTextNode("9");
  const blockA9Player2 = document.createElement("div");
  const blockB9Player2 = document.createElement("div");
  const blockC9Player2 = document.createElement("div");
  const blockD9Player2 = document.createElement("div");
  const blockE9Player2 = document.createElement("div");
  const blockF9Player2 = document.createElement("div");
  const blockG9Player2 = document.createElement("div");
  const blockH9Player2 = document.createElement("div");
  const blockI9Player2 = document.createElement("div");
  const blockJ9Player2 = document.createElement("div");
  const rowNumber10Player2 = document.createElement("div");
  const rowNumber10Player2Txt = document.createTextNode("10");
  const blockA10Player2 = document.createElement("div");
  const blockB10Player2 = document.createElement("div");
  const blockC10Player2 = document.createElement("div");
  const blockD10Player2 = document.createElement("div");
  const blockE10Player2 = document.createElement("div");
  const blockF10Player2 = document.createElement("div");
  const blockG10Player2 = document.createElement("div");
  const blockH10Player2 = document.createElement("div");
  const blockI10Player2 = document.createElement("div");
  const blockJ10Player2 = document.createElement("div");

  const player2Ships = document.createElement("div");
  const carrier2 = document.createElement("div");
  const carrier2LifeBlock1 = document.createElement("div");
  const carrier2LifeBlock2 = document.createElement("div");
  const carrier2LifeBlock3 = document.createElement("div");
  const carrier2LifeBlock4 = document.createElement("div");
  const carrier2LifeBlock5 = document.createElement("div");
  const battleship2 = document.createElement("div");
  const battleship2LifeBlock1 = document.createElement("div");
  const battleship2LifeBlock2 = document.createElement("div");
  const battleship2LifeBlock3 = document.createElement("div");
  const battleship2LifeBlock4 = document.createElement("div");
  const cruiser2 = document.createElement("div");
  const cruiser2LifeBlock1 = document.createElement("div");
  const cruiser2LifeBlock2 = document.createElement("div");
  const cruiser2LifeBlock3 = document.createElement("div");
  const submarine2 = document.createElement("div");
  const submarine2LifeBlock1 = document.createElement("div");
  const submarine2LifeBlock2 = document.createElement("div");
  const submarine2LifeBlock3 = document.createElement("div");
  const patrolBoat2 = document.createElement("div");
  const patrolBoat2LifeBlock1 = document.createElement("div");
  const patrolBoat2LifeBlock2 = document.createElement("div");

  const footer = document.createElement("div");
  const creditsLine1 = document.createElement("div");
  const creditsLine1Txt = document.createTextNode(
    "Website created by Daniel Ballerini"
  );
  const creditsLine2 = document.createElement("div");
  const creditsLine2Txt = document.createTextNode(
    "Project idea from © Odin Project"
  );

  // Add attributes
  container.setAttribute("id", "container");
  header.setAttribute("id", "header");
  messageSection.setAttribute("id", "message-section");
  gameSection.setAttribute("id", "game-section");
  playerWrapper1.setAttribute("id", "player-wrapper");
  overlay1.setAttribute("id", "overlay-1");

  player1Ships.setAttribute("id", "player-1-ships");
  carrier1.classList.add("carrier", "ship");
  carrier1LifeBlock1.classList.add("life-block");
  carrier1LifeBlock2.classList.add("life-block");
  carrier1LifeBlock3.classList.add("life-block");
  carrier1LifeBlock4.classList.add("life-block");
  carrier1LifeBlock5.classList.add("life-block");
  battleship1.classList.add("battleship", "ship");
  battleship1LifeBlock1.classList.add("life-block");
  battleship1LifeBlock2.classList.add("life-block");
  battleship1LifeBlock3.classList.add("life-block");
  battleship1LifeBlock4.classList.add("life-block");
  cruiser1.classList.add("cruiser", "ship");
  cruiser1LifeBlock1.classList.add("life-block");
  cruiser1LifeBlock2.classList.add("life-block");
  cruiser1LifeBlock3.classList.add("life-block");
  submarine1.classList.add("submarine", "ship");
  submarine1LifeBlock1.classList.add("life-block");
  submarine1LifeBlock2.classList.add("life-block");
  submarine1LifeBlock3.classList.add("life-block");
  patrolBoat1.classList.add("patrolBoat", "ship");
  patrolBoat1LifeBlock1.classList.add("life-block");
  patrolBoat1LifeBlock2.classList.add("life-block");

  player1Board.setAttribute("id", "player-1-board");
  emptySpace1.classList.add("empty-space");
  columnNumberAPlayer1.classList.add("column-number");
  columnNumberBPlayer1.classList.add("column-number");
  columnNumberCPlayer1.classList.add("column-number");
  columnNumberDPlayer1.classList.add("column-number");
  columnNumberEPlayer1.classList.add("column-number");
  columnNumberFPlayer1.classList.add("column-number");
  columnNumberGPlayer1.classList.add("column-number");
  columnNumberHPlayer1.classList.add("column-number");
  columnNumberIPlayer1.classList.add("column-number");
  columnNumberJPlayer1.classList.add("column-number");
  rowNumber1Player1.classList.add("row-number");
  blockA1Player1.classList.add("block", "A1");
  blockB1Player1.classList.add("block", "B1");
  blockC1Player1.classList.add("block", "C1");
  blockD1Player1.classList.add("block", "D1");
  blockE1Player1.classList.add("block", "E1");
  blockF1Player1.classList.add("block", "F1");
  blockG1Player1.classList.add("block", "G1");
  blockH1Player1.classList.add("block", "H1");
  blockI1Player1.classList.add("block", "I1");
  blockJ1Player1.classList.add("block", "J1");
  rowNumber2Player1.classList.add("row-number");
  blockA2Player1.classList.add("block", "A2");
  blockB2Player1.classList.add("block", "B2");
  blockC2Player1.classList.add("block", "C2");
  blockD2Player1.classList.add("block", "D2");
  blockE2Player1.classList.add("block", "E2");
  blockF2Player1.classList.add("block", "F2");
  blockG2Player1.classList.add("block", "G2");
  blockH2Player1.classList.add("block", "H2");
  blockI2Player1.classList.add("block", "I2");
  blockJ2Player1.classList.add("block", "J2");
  rowNumber3Player1.classList.add("row-number");
  blockA3Player1.classList.add("block", "A3");
  blockB3Player1.classList.add("block", "B3");
  blockC3Player1.classList.add("block", "C3");
  blockD3Player1.classList.add("block", "D3");
  blockE3Player1.classList.add("block", "E3");
  blockF3Player1.classList.add("block", "F3");
  blockG3Player1.classList.add("block", "G3");
  blockH3Player1.classList.add("block", "H3");
  blockI3Player1.classList.add("block", "I3");
  blockJ3Player1.classList.add("block", "J3");
  rowNumber4Player1.classList.add("row-number");
  blockA4Player1.classList.add("block", "A4");
  blockB4Player1.classList.add("block", "B4");
  blockC4Player1.classList.add("block", "C4");
  blockD4Player1.classList.add("block", "D4");
  blockE4Player1.classList.add("block", "E4");
  blockF4Player1.classList.add("block", "F4");
  blockG4Player1.classList.add("block", "G4");
  blockH4Player1.classList.add("block", "H4");
  blockI4Player1.classList.add("block", "I4");
  blockJ4Player1.classList.add("block", "J4");
  rowNumber5Player1.classList.add("row-number");
  blockA5Player1.classList.add("block", "A5");
  blockB5Player1.classList.add("block", "B5");
  blockC5Player1.classList.add("block", "C5");
  blockD5Player1.classList.add("block", "D5");
  blockE5Player1.classList.add("block", "E5");
  blockF5Player1.classList.add("block", "F5");
  blockG5Player1.classList.add("block", "G5");
  blockH5Player1.classList.add("block", "H5");
  blockI5Player1.classList.add("block", "I5");
  blockJ5Player1.classList.add("block", "J5");
  rowNumber6Player1.classList.add("row-number");
  blockA6Player1.classList.add("block", "A6");
  blockB6Player1.classList.add("block", "B6");
  blockC6Player1.classList.add("block", "C6");
  blockD6Player1.classList.add("block", "D6");
  blockE6Player1.classList.add("block", "E6");
  blockF6Player1.classList.add("block", "F6");
  blockG6Player1.classList.add("block", "G6");
  blockH6Player1.classList.add("block", "H6");
  blockI6Player1.classList.add("block", "I6");
  blockJ6Player1.classList.add("block", "J6");
  rowNumber7Player1.classList.add("row-number");
  blockA7Player1.classList.add("block", "A7");
  blockB7Player1.classList.add("block", "B7");
  blockC7Player1.classList.add("block", "C7");
  blockD7Player1.classList.add("block", "D7");
  blockE7Player1.classList.add("block", "E7");
  blockF7Player1.classList.add("block", "F7");
  blockG7Player1.classList.add("block", "G7");
  blockH7Player1.classList.add("block", "H7");
  blockI7Player1.classList.add("block", "I7");
  blockJ7Player1.classList.add("block", "J7");
  rowNumber8Player1.classList.add("row-number");
  blockA8Player1.classList.add("block", "A8");
  blockB8Player1.classList.add("block", "B8");
  blockC8Player1.classList.add("block", "C8");
  blockD8Player1.classList.add("block", "D8");
  blockE8Player1.classList.add("block", "E8");
  blockF8Player1.classList.add("block", "F8");
  blockG8Player1.classList.add("block", "G8");
  blockH8Player1.classList.add("block", "H8");
  blockI8Player1.classList.add("block", "I8");
  blockJ8Player1.classList.add("block", "J8");
  rowNumber9Player1.classList.add("row-number");
  blockA9Player1.classList.add("block", "A9");
  blockB9Player1.classList.add("block", "B9");
  blockC9Player1.classList.add("block", "C9");
  blockD9Player1.classList.add("block", "D9");
  blockE9Player1.classList.add("block", "E9");
  blockF9Player1.classList.add("block", "F9");
  blockG9Player1.classList.add("block", "G9");
  blockH9Player1.classList.add("block", "H9");
  blockI9Player1.classList.add("block", "I9");
  blockJ9Player1.classList.add("block", "J9");
  rowNumber10Player1.classList.add("row-number");
  blockA10Player1.classList.add("block", "A10");
  blockB10Player1.classList.add("block", "B10");
  blockC10Player1.classList.add("block", "C10");
  blockD10Player1.classList.add("block", "D10");
  blockE10Player1.classList.add("block", "E10");
  blockF10Player1.classList.add("block", "F10");
  blockG10Player1.classList.add("block", "G10");
  blockH10Player1.classList.add("block", "H10");
  blockI10Player1.classList.add("block", "I10");
  blockJ10Player1.classList.add("block", "J10");

  playerWrapper2.setAttribute("id", "player-wrapper");
  overlay2.setAttribute("id", "overlay-2");
  player2Board.setAttribute("id", "player-2-board");
  emptySpace2.classList.add("empty-space");
  columnNumberAPlayer2.classList.add("column-number");
  columnNumberBPlayer2.classList.add("column-number");
  columnNumberCPlayer2.classList.add("column-number");
  columnNumberDPlayer2.classList.add("column-number");
  columnNumberEPlayer2.classList.add("column-number");
  columnNumberFPlayer2.classList.add("column-number");
  columnNumberGPlayer2.classList.add("column-number");
  columnNumberHPlayer2.classList.add("column-number");
  columnNumberIPlayer2.classList.add("column-number");
  columnNumberJPlayer2.classList.add("column-number");
  rowNumber1Player2.classList.add("row-number");
  blockA1Player2.classList.add("block", "A1");
  blockB1Player2.classList.add("block", "B1");
  blockC1Player2.classList.add("block", "C1");
  blockD1Player2.classList.add("block", "D1");
  blockE1Player2.classList.add("block", "E1");
  blockF1Player2.classList.add("block", "F1");
  blockG1Player2.classList.add("block", "G1");
  blockH1Player2.classList.add("block", "H1");
  blockI1Player2.classList.add("block", "I1");
  blockJ1Player2.classList.add("block", "J1");
  rowNumber2Player2.classList.add("row-number");
  blockA2Player2.classList.add("block", "A2");
  blockB2Player2.classList.add("block", "B2");
  blockC2Player2.classList.add("block", "C2");
  blockD2Player2.classList.add("block", "D2");
  blockE2Player2.classList.add("block", "E2");
  blockF2Player2.classList.add("block", "F2");
  blockG2Player2.classList.add("block", "G2");
  blockH2Player2.classList.add("block", "H2");
  blockI2Player2.classList.add("block", "I2");
  blockJ2Player2.classList.add("block", "J2");
  rowNumber3Player2.classList.add("row-number");
  blockA3Player2.classList.add("block", "A3");
  blockB3Player2.classList.add("block", "B3");
  blockC3Player2.classList.add("block", "C3");
  blockD3Player2.classList.add("block", "D3");
  blockE3Player2.classList.add("block", "E3");
  blockF3Player2.classList.add("block", "F3");
  blockG3Player2.classList.add("block", "G3");
  blockH3Player2.classList.add("block", "H3");
  blockI3Player2.classList.add("block", "I3");
  blockJ3Player2.classList.add("block", "J3");
  rowNumber4Player2.classList.add("row-number");
  blockA4Player2.classList.add("block", "A4");
  blockB4Player2.classList.add("block", "B4");
  blockC4Player2.classList.add("block", "C4");
  blockD4Player2.classList.add("block", "D4");
  blockE4Player2.classList.add("block", "E4");
  blockF4Player2.classList.add("block", "F4");
  blockG4Player2.classList.add("block", "G4");
  blockH4Player2.classList.add("block", "H4");
  blockI4Player2.classList.add("block", "I4");
  blockJ4Player2.classList.add("block", "J4");
  rowNumber5Player2.classList.add("row-number");
  blockA5Player2.classList.add("block", "A5");
  blockB5Player2.classList.add("block", "B5");
  blockC5Player2.classList.add("block", "C5");
  blockD5Player2.classList.add("block", "D5");
  blockE5Player2.classList.add("block", "E5");
  blockF5Player2.classList.add("block", "F5");
  blockG5Player2.classList.add("block", "G5");
  blockH5Player2.classList.add("block", "H5");
  blockI5Player2.classList.add("block", "I5");
  blockJ5Player2.classList.add("block", "J5");
  rowNumber6Player2.classList.add("row-number");
  blockA6Player2.classList.add("block", "A6");
  blockB6Player2.classList.add("block", "B6");
  blockC6Player2.classList.add("block", "C6");
  blockD6Player2.classList.add("block", "D6");
  blockE6Player2.classList.add("block", "E6");
  blockF6Player2.classList.add("block", "F6");
  blockG6Player2.classList.add("block", "G6");
  blockH6Player2.classList.add("block", "H6");
  blockI6Player2.classList.add("block", "I6");
  blockJ6Player2.classList.add("block", "J6");
  rowNumber7Player2.classList.add("row-number");
  blockA7Player2.classList.add("block", "A7");
  blockB7Player2.classList.add("block", "B7");
  blockC7Player2.classList.add("block", "C7");
  blockD7Player2.classList.add("block", "D7");
  blockE7Player2.classList.add("block", "E7");
  blockF7Player2.classList.add("block", "F7");
  blockG7Player2.classList.add("block", "G7");
  blockH7Player2.classList.add("block", "H7");
  blockI7Player2.classList.add("block", "I7");
  blockJ7Player2.classList.add("block", "J7");
  rowNumber8Player2.classList.add("row-number");
  blockA8Player2.classList.add("block", "A8");
  blockB8Player2.classList.add("block", "B8");
  blockC8Player2.classList.add("block", "C8");
  blockD8Player2.classList.add("block", "D8");
  blockE8Player2.classList.add("block", "E8");
  blockF8Player2.classList.add("block", "F8");
  blockG8Player2.classList.add("block", "G8");
  blockH8Player2.classList.add("block", "H8");
  blockI8Player2.classList.add("block", "I8");
  blockJ8Player2.classList.add("block", "J8");
  rowNumber9Player2.classList.add("row-number");
  blockA9Player2.classList.add("block", "A9");
  blockB9Player2.classList.add("block", "B9");
  blockC9Player2.classList.add("block", "C9");
  blockD9Player2.classList.add("block", "D9");
  blockE9Player2.classList.add("block", "E9");
  blockF9Player2.classList.add("block", "F9");
  blockG9Player2.classList.add("block", "G9");
  blockH9Player2.classList.add("block", "H9");
  blockI9Player2.classList.add("block", "I9");
  blockJ9Player2.classList.add("block", "J9");
  rowNumber10Player2.classList.add("row-number");
  blockA10Player2.classList.add("block", "A10");
  blockB10Player2.classList.add("block", "B10");
  blockC10Player2.classList.add("block", "C10");
  blockD10Player2.classList.add("block", "D10");
  blockE10Player2.classList.add("block", "E10");
  blockF10Player2.classList.add("block", "F10");
  blockG10Player2.classList.add("block", "G10");
  blockH10Player2.classList.add("block", "H10");
  blockI10Player2.classList.add("block", "I10");
  blockJ10Player2.classList.add("block", "J10");

  player2Ships.setAttribute("id", "player-2-ships");
  carrier2.classList.add("carrier", "ship");
  carrier2LifeBlock1.classList.add("life-block");
  carrier2LifeBlock2.classList.add("life-block");
  carrier2LifeBlock3.classList.add("life-block");
  carrier2LifeBlock4.classList.add("life-block");
  carrier2LifeBlock5.classList.add("life-block");
  battleship2.classList.add("battleship", "ship");
  battleship2LifeBlock1.classList.add("life-block");
  battleship2LifeBlock2.classList.add("life-block");
  battleship2LifeBlock3.classList.add("life-block");
  battleship2LifeBlock4.classList.add("life-block");
  cruiser2.classList.add("cruiser", "ship");
  cruiser2LifeBlock1.classList.add("life-block");
  cruiser2LifeBlock2.classList.add("life-block");
  cruiser2LifeBlock3.classList.add("life-block");
  submarine2.classList.add("submarine", "ship");
  submarine2LifeBlock1.classList.add("life-block");
  submarine2LifeBlock2.classList.add("life-block");
  submarine2LifeBlock3.classList.add("life-block");
  patrolBoat2.classList.add("patrolBoat", "ship");
  patrolBoat2LifeBlock1.classList.add("life-block");
  patrolBoat2LifeBlock2.classList.add("life-block");

  footer.setAttribute("id", "footer");

  // Append elements to dom
  body.appendChild(container);
  container.appendChild(header);
  header.appendChild(headerHeader);
  headerHeader.appendChild(headerTxt);
  container.appendChild(messageSection);
  container.appendChild(gameSection);
  gameSection.appendChild(playerWrapper1);

  playerWrapper1.appendChild(player1Ships);
  player1Ships.appendChild(carrier1);
  carrier1.appendChild(carrier1LifeBlock1);
  carrier1.appendChild(carrier1LifeBlock2);
  carrier1.appendChild(carrier1LifeBlock3);
  carrier1.appendChild(carrier1LifeBlock4);
  carrier1.appendChild(carrier1LifeBlock5);

  player1Ships.appendChild(battleship1);
  battleship1.appendChild(battleship1LifeBlock1);
  battleship1.appendChild(battleship1LifeBlock2);
  battleship1.appendChild(battleship1LifeBlock3);
  battleship1.appendChild(battleship1LifeBlock4);

  player1Ships.appendChild(cruiser1);
  cruiser1.appendChild(cruiser1LifeBlock1);
  cruiser1.appendChild(cruiser1LifeBlock2);
  cruiser1.appendChild(cruiser1LifeBlock3);

  player1Ships.appendChild(submarine1);
  submarine1.appendChild(submarine1LifeBlock1);
  submarine1.appendChild(submarine1LifeBlock2);
  submarine1.appendChild(submarine1LifeBlock3);

  player1Ships.appendChild(patrolBoat1);
  patrolBoat1.appendChild(patrolBoat1LifeBlock1);
  patrolBoat1.appendChild(patrolBoat1LifeBlock2);

  playerWrapper1.appendChild(player1Board);
  playerWrapper1.appendChild(overlay1);
  player1Board.appendChild(emptySpace1);
  player1Board.appendChild(columnNumberAPlayer1);
  columnNumberAPlayer1.appendChild(columnNumberAPlayer1Txt);
  player1Board.appendChild(columnNumberBPlayer1);
  columnNumberBPlayer1.appendChild(columnNumberBPlayer1Txt);
  player1Board.appendChild(columnNumberCPlayer1);
  columnNumberCPlayer1.appendChild(columnNumberCPlayer1Txt);
  player1Board.appendChild(columnNumberDPlayer1);
  columnNumberDPlayer1.appendChild(columnNumberDPlayer1Txt);
  player1Board.appendChild(columnNumberEPlayer1);
  columnNumberEPlayer1.appendChild(columnNumberEPlayer1Txt);
  player1Board.appendChild(columnNumberFPlayer1);
  columnNumberFPlayer1.appendChild(columnNumberFPlayer1Txt);
  player1Board.appendChild(columnNumberGPlayer1);
  columnNumberGPlayer1.appendChild(columnNumberGPlayer1Txt);
  player1Board.appendChild(columnNumberHPlayer1);
  columnNumberHPlayer1.appendChild(columnNumberHPlayer1Txt);
  player1Board.appendChild(columnNumberIPlayer1);
  columnNumberIPlayer1.appendChild(columnNumberIPlayer1Txt);
  player1Board.appendChild(columnNumberJPlayer1);
  columnNumberJPlayer1.appendChild(columnNumberJPlayer1Txt);

  player1Board.appendChild(rowNumber1Player1);
  rowNumber1Player1.appendChild(rowNumber1Player1Txt);
  player1Board.appendChild(blockA1Player1);
  player1Board.appendChild(blockB1Player1);
  player1Board.appendChild(blockC1Player1);
  player1Board.appendChild(blockD1Player1);
  player1Board.appendChild(blockE1Player1);
  player1Board.appendChild(blockF1Player1);
  player1Board.appendChild(blockG1Player1);
  player1Board.appendChild(blockH1Player1);
  player1Board.appendChild(blockI1Player1);
  player1Board.appendChild(blockJ1Player1);

  player1Board.appendChild(rowNumber2Player1);
  rowNumber2Player1.appendChild(rowNumber2Player1Txt);
  player1Board.appendChild(blockA2Player1);
  player1Board.appendChild(blockB2Player1);
  player1Board.appendChild(blockC2Player1);
  player1Board.appendChild(blockD2Player1);
  player1Board.appendChild(blockE2Player1);
  player1Board.appendChild(blockF2Player1);
  player1Board.appendChild(blockG2Player1);
  player1Board.appendChild(blockH2Player1);
  player1Board.appendChild(blockI2Player1);
  player1Board.appendChild(blockJ2Player1);

  player1Board.appendChild(rowNumber3Player1);
  rowNumber3Player1.appendChild(rowNumber3Player1Txt);
  player1Board.appendChild(blockA3Player1);
  player1Board.appendChild(blockB3Player1);
  player1Board.appendChild(blockC3Player1);
  player1Board.appendChild(blockD3Player1);
  player1Board.appendChild(blockE3Player1);
  player1Board.appendChild(blockF3Player1);
  player1Board.appendChild(blockG3Player1);
  player1Board.appendChild(blockH3Player1);
  player1Board.appendChild(blockI3Player1);
  player1Board.appendChild(blockJ3Player1);

  player1Board.appendChild(rowNumber4Player1);
  rowNumber4Player1.appendChild(rowNumber4Player1Txt);
  player1Board.appendChild(blockA4Player1);
  player1Board.appendChild(blockB4Player1);
  player1Board.appendChild(blockC4Player1);
  player1Board.appendChild(blockD4Player1);
  player1Board.appendChild(blockE4Player1);
  player1Board.appendChild(blockF4Player1);
  player1Board.appendChild(blockG4Player1);
  player1Board.appendChild(blockH4Player1);
  player1Board.appendChild(blockI4Player1);
  player1Board.appendChild(blockJ4Player1);

  player1Board.appendChild(rowNumber5Player1);
  rowNumber5Player1.appendChild(rowNumber5Player1Txt);
  player1Board.appendChild(blockA5Player1);
  player1Board.appendChild(blockB5Player1);
  player1Board.appendChild(blockC5Player1);
  player1Board.appendChild(blockD5Player1);
  player1Board.appendChild(blockE5Player1);
  player1Board.appendChild(blockF5Player1);
  player1Board.appendChild(blockG5Player1);
  player1Board.appendChild(blockH5Player1);
  player1Board.appendChild(blockI5Player1);
  player1Board.appendChild(blockJ5Player1);

  player1Board.appendChild(rowNumber6Player1);
  rowNumber6Player1.appendChild(rowNumber6Player1Txt);
  player1Board.appendChild(blockA6Player1);
  player1Board.appendChild(blockB6Player1);
  player1Board.appendChild(blockC6Player1);
  player1Board.appendChild(blockD6Player1);
  player1Board.appendChild(blockE6Player1);
  player1Board.appendChild(blockF6Player1);
  player1Board.appendChild(blockG6Player1);
  player1Board.appendChild(blockH6Player1);
  player1Board.appendChild(blockI6Player1);
  player1Board.appendChild(blockJ6Player1);

  player1Board.appendChild(rowNumber7Player1);
  rowNumber7Player1.appendChild(rowNumber7Player1Txt);
  player1Board.appendChild(blockA7Player1);
  player1Board.appendChild(blockB7Player1);
  player1Board.appendChild(blockC7Player1);
  player1Board.appendChild(blockD7Player1);
  player1Board.appendChild(blockE7Player1);
  player1Board.appendChild(blockF7Player1);
  player1Board.appendChild(blockG7Player1);
  player1Board.appendChild(blockH7Player1);
  player1Board.appendChild(blockI7Player1);
  player1Board.appendChild(blockJ7Player1);

  player1Board.appendChild(rowNumber8Player1);
  rowNumber8Player1.appendChild(rowNumber8Player1Txt);
  player1Board.appendChild(blockA8Player1);
  player1Board.appendChild(blockB8Player1);
  player1Board.appendChild(blockC8Player1);
  player1Board.appendChild(blockD8Player1);
  player1Board.appendChild(blockE8Player1);
  player1Board.appendChild(blockF8Player1);
  player1Board.appendChild(blockG8Player1);
  player1Board.appendChild(blockH8Player1);
  player1Board.appendChild(blockI8Player1);
  player1Board.appendChild(blockJ8Player1);

  player1Board.appendChild(rowNumber9Player1);
  rowNumber9Player1.appendChild(rowNumber9Player1Txt);
  player1Board.appendChild(blockA9Player1);
  player1Board.appendChild(blockB9Player1);
  player1Board.appendChild(blockC9Player1);
  player1Board.appendChild(blockD9Player1);
  player1Board.appendChild(blockE9Player1);
  player1Board.appendChild(blockF9Player1);
  player1Board.appendChild(blockG9Player1);
  player1Board.appendChild(blockH9Player1);
  player1Board.appendChild(blockI9Player1);
  player1Board.appendChild(blockJ9Player1);

  player1Board.appendChild(rowNumber10Player1);
  rowNumber10Player1.appendChild(rowNumber10Player1Txt);
  player1Board.appendChild(blockA10Player1);
  player1Board.appendChild(blockB10Player1);
  player1Board.appendChild(blockC10Player1);
  player1Board.appendChild(blockD10Player1);
  player1Board.appendChild(blockE10Player1);
  player1Board.appendChild(blockF10Player1);
  player1Board.appendChild(blockG10Player1);
  player1Board.appendChild(blockH10Player1);
  player1Board.appendChild(blockI10Player1);
  player1Board.appendChild(blockJ10Player1);

  gameSection.appendChild(playerWrapper2);
  playerWrapper2.appendChild(player2Board);
  playerWrapper2.appendChild(overlay2);
  player2Board.appendChild(emptySpace2);
  player2Board.appendChild(columnNumberAPlayer2);
  columnNumberAPlayer2.appendChild(columnNumberAPlayer2Txt);
  player2Board.appendChild(columnNumberBPlayer2);
  columnNumberBPlayer2.appendChild(columnNumberBPlayer2Txt);
  player2Board.appendChild(columnNumberCPlayer2);
  columnNumberCPlayer2.appendChild(columnNumberCPlayer2Txt);
  player2Board.appendChild(columnNumberDPlayer2);
  columnNumberDPlayer2.appendChild(columnNumberDPlayer2Txt);
  player2Board.appendChild(columnNumberEPlayer2);
  columnNumberEPlayer2.appendChild(columnNumberEPlayer2Txt);
  player2Board.appendChild(columnNumberFPlayer2);
  columnNumberFPlayer2.appendChild(columnNumberFPlayer2Txt);
  player2Board.appendChild(columnNumberGPlayer2);
  columnNumberGPlayer2.appendChild(columnNumberGPlayer2Txt);
  player2Board.appendChild(columnNumberHPlayer2);
  columnNumberHPlayer2.appendChild(columnNumberHPlayer2Txt);
  player2Board.appendChild(columnNumberIPlayer2);
  columnNumberIPlayer2.appendChild(columnNumberIPlayer2Txt);
  player2Board.appendChild(columnNumberJPlayer2);
  columnNumberJPlayer2.appendChild(columnNumberJPlayer2Txt);

  player2Board.appendChild(rowNumber1Player2);
  rowNumber1Player2.appendChild(rowNumber1Player2Txt);
  player2Board.appendChild(blockA1Player2);
  player2Board.appendChild(blockB1Player2);
  player2Board.appendChild(blockC1Player2);
  player2Board.appendChild(blockD1Player2);
  player2Board.appendChild(blockE1Player2);
  player2Board.appendChild(blockF1Player2);
  player2Board.appendChild(blockG1Player2);
  player2Board.appendChild(blockH1Player2);
  player2Board.appendChild(blockI1Player2);
  player2Board.appendChild(blockJ1Player2);

  player2Board.appendChild(rowNumber2Player2);
  rowNumber2Player2.appendChild(rowNumber2Player2Txt);
  player2Board.appendChild(blockA2Player2);
  player2Board.appendChild(blockB2Player2);
  player2Board.appendChild(blockC2Player2);
  player2Board.appendChild(blockD2Player2);
  player2Board.appendChild(blockE2Player2);
  player2Board.appendChild(blockF2Player2);
  player2Board.appendChild(blockG2Player2);
  player2Board.appendChild(blockH2Player2);
  player2Board.appendChild(blockI2Player2);
  player2Board.appendChild(blockJ2Player2);

  player2Board.appendChild(rowNumber3Player2);
  rowNumber3Player2.appendChild(rowNumber3Player2Txt);
  player2Board.appendChild(blockA3Player2);
  player2Board.appendChild(blockB3Player2);
  player2Board.appendChild(blockC3Player2);
  player2Board.appendChild(blockD3Player2);
  player2Board.appendChild(blockE3Player2);
  player2Board.appendChild(blockF3Player2);
  player2Board.appendChild(blockG3Player2);
  player2Board.appendChild(blockH3Player2);
  player2Board.appendChild(blockI3Player2);
  player2Board.appendChild(blockJ3Player2);

  player2Board.appendChild(rowNumber4Player2);
  rowNumber4Player2.appendChild(rowNumber4Player2Txt);
  player2Board.appendChild(blockA4Player2);
  player2Board.appendChild(blockB4Player2);
  player2Board.appendChild(blockC4Player2);
  player2Board.appendChild(blockD4Player2);
  player2Board.appendChild(blockE4Player2);
  player2Board.appendChild(blockF4Player2);
  player2Board.appendChild(blockG4Player2);
  player2Board.appendChild(blockH4Player2);
  player2Board.appendChild(blockI4Player2);
  player2Board.appendChild(blockJ4Player2);

  player2Board.appendChild(rowNumber5Player2);
  rowNumber5Player2.appendChild(rowNumber5Player2Txt);
  player2Board.appendChild(blockA5Player2);
  player2Board.appendChild(blockB5Player2);
  player2Board.appendChild(blockC5Player2);
  player2Board.appendChild(blockD5Player2);
  player2Board.appendChild(blockE5Player2);
  player2Board.appendChild(blockF5Player2);
  player2Board.appendChild(blockG5Player2);
  player2Board.appendChild(blockH5Player2);
  player2Board.appendChild(blockI5Player2);
  player2Board.appendChild(blockJ5Player2);

  player2Board.appendChild(rowNumber6Player2);
  rowNumber6Player2.appendChild(rowNumber6Player2Txt);
  player2Board.appendChild(blockA6Player2);
  player2Board.appendChild(blockB6Player2);
  player2Board.appendChild(blockC6Player2);
  player2Board.appendChild(blockD6Player2);
  player2Board.appendChild(blockE6Player2);
  player2Board.appendChild(blockF6Player2);
  player2Board.appendChild(blockG6Player2);
  player2Board.appendChild(blockH6Player2);
  player2Board.appendChild(blockI6Player2);
  player2Board.appendChild(blockJ6Player2);

  player2Board.appendChild(rowNumber7Player2);
  rowNumber7Player2.appendChild(rowNumber7Player2Txt);
  player2Board.appendChild(blockA7Player2);
  player2Board.appendChild(blockB7Player2);
  player2Board.appendChild(blockC7Player2);
  player2Board.appendChild(blockD7Player2);
  player2Board.appendChild(blockE7Player2);
  player2Board.appendChild(blockF7Player2);
  player2Board.appendChild(blockG7Player2);
  player2Board.appendChild(blockH7Player2);
  player2Board.appendChild(blockI7Player2);
  player2Board.appendChild(blockJ7Player2);

  player2Board.appendChild(rowNumber8Player2);
  rowNumber8Player2.appendChild(rowNumber8Player2Txt);
  player2Board.appendChild(blockA8Player2);
  player2Board.appendChild(blockB8Player2);
  player2Board.appendChild(blockC8Player2);
  player2Board.appendChild(blockD8Player2);
  player2Board.appendChild(blockE8Player2);
  player2Board.appendChild(blockF8Player2);
  player2Board.appendChild(blockG8Player2);
  player2Board.appendChild(blockH8Player2);
  player2Board.appendChild(blockI8Player2);
  player2Board.appendChild(blockJ8Player2);

  player2Board.appendChild(rowNumber9Player2);
  rowNumber9Player2.appendChild(rowNumber9Player2Txt);
  player2Board.appendChild(blockA9Player2);
  player2Board.appendChild(blockB9Player2);
  player2Board.appendChild(blockC9Player2);
  player2Board.appendChild(blockD9Player2);
  player2Board.appendChild(blockE9Player2);
  player2Board.appendChild(blockF9Player2);
  player2Board.appendChild(blockG9Player2);
  player2Board.appendChild(blockH9Player2);
  player2Board.appendChild(blockI9Player2);
  player2Board.appendChild(blockJ9Player2);

  player2Board.appendChild(rowNumber10Player2);
  rowNumber10Player2.appendChild(rowNumber10Player2Txt);
  player2Board.appendChild(blockA10Player2);
  player2Board.appendChild(blockB10Player2);
  player2Board.appendChild(blockC10Player2);
  player2Board.appendChild(blockD10Player2);
  player2Board.appendChild(blockE10Player2);
  player2Board.appendChild(blockF10Player2);
  player2Board.appendChild(blockG10Player2);
  player2Board.appendChild(blockH10Player2);
  player2Board.appendChild(blockI10Player2);
  player2Board.appendChild(blockJ10Player2);

  playerWrapper2.appendChild(player2Ships);
  player2Ships.appendChild(carrier2);
  carrier2.appendChild(carrier2LifeBlock1);
  carrier2.appendChild(carrier2LifeBlock2);
  carrier2.appendChild(carrier2LifeBlock3);
  carrier2.appendChild(carrier2LifeBlock4);
  carrier2.appendChild(carrier2LifeBlock5);

  player2Ships.appendChild(battleship2);
  battleship2.appendChild(battleship2LifeBlock1);
  battleship2.appendChild(battleship2LifeBlock2);
  battleship2.appendChild(battleship2LifeBlock3);
  battleship2.appendChild(battleship2LifeBlock4);

  player2Ships.appendChild(cruiser2);
  cruiser2.appendChild(cruiser2LifeBlock1);
  cruiser2.appendChild(cruiser2LifeBlock2);
  cruiser2.appendChild(cruiser2LifeBlock3);

  player2Ships.appendChild(submarine2);
  submarine2.appendChild(submarine2LifeBlock1);
  submarine2.appendChild(submarine2LifeBlock2);
  submarine2.appendChild(submarine2LifeBlock3);

  player2Ships.appendChild(patrolBoat2);
  patrolBoat2.appendChild(patrolBoat2LifeBlock1);
  patrolBoat2.appendChild(patrolBoat2LifeBlock2);

  container.appendChild(footer);
  footer.appendChild(creditsLine1);
  creditsLine1.appendChild(creditsLine1Txt);
  footer.appendChild(creditsLine2);
  creditsLine2.appendChild(creditsLine2Txt);
}
function displayPlayerShips(
  carrierCoordinates,
  battleshipCoordinates,
  cruiserCoordinates,
  submarineCoordinates,
  patrolBoatCoordinates
) {
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      const coordinate = arguments[i][j];
      const shipBlock = document.querySelector(
        `#player-1-board > .${coordinate}`
      );
      shipBlock.style.backgroundColor = "#021691";
    }
  }
}

function displayMiss(targetedBlock) {
  targetedBlock.style.backgroundColor = "#b5f7ea";
}

function displayHit(targetedBlock) {
  targetedBlock.style.backgroundColor = "red";
}

function removeShipLifeBlock(ship) {
  for (let i = 0; i < ship.children.length; i++) {
    if (
      getComputedStyle(ship.children[i]).backgroundColor ===
        "rgb(45, 212, 191)" ||
      ship.children[i].style.background === "rgb(45, 212, 191)"
    ) {
      ship.children[i].style.backgroundColor = "red";
      return;
    }
  }
}

function hideNonActivePlayerBoard(humanTurn, computerTurn) {
  const overlay1 = document.querySelector("#overlay-1");
  const overlay2 = document.querySelector("#overlay-2");
  if (humanTurn === true && computerTurn === false) {
    overlay1.style.display = "block";
    overlay2.style.display = "none";
  } else if (humanTurn === false && computerTurn === true) {
    overlay1.style.display = "none";
    overlay2.style.display = "block";
  }
}

function displayWinner(gameResult) {
  const messageSection = document.querySelector("#message-section");
  let winningMessage = undefined;
  if (gameResult === "player 1 wins") {
    winningMessage = document.createTextNode("YOU WIN");
  } else if (gameResult === "player 2 wins") {
    winningMessage = document.createTextNode("YOU LOSE");
  }
  messageSection.appendChild(winningMessage);
}




/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "randomizeShipPositions": () => (/* binding */ randomizeShipPositions)
/* harmony export */ });
function Ship(length, name) {
  let hitsTaken = 0;
  return {
    name: name,
    hit: function () {
      hitsTaken++;
    },
    isSunk: function () {
      if (hitsTaken === length) return true;
      else return false;
    },
  };
}

function GameBoard(
  carrierCoordinates,
  battleshipCoordinates,
  cruiserCoordinates,
  submarineCoordinates,
  patrolBoatCoordinates
) {
  // Create board
  const board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = "empty";
    }
  }

  const shipCoordinates = [];
  for (let i = 0; i < arguments.length && i < 5; i++) {
    shipCoordinates.push(arguments[i]);
  }
  const shipNames = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "patrolBoat",
  ];

  // Need to take coordinates of ships, and replace "empty" values in board with appropriate ship names for each ship coordinates
  for (let i = 0; i < shipCoordinates.length; i++) {
    for (let j = 0; j < shipCoordinates[i].length; j++) {
      // Use regex to extract x and y coordinates and ship name
      const regex1 = /[A-J]/i;
      const regex2 = /[1-9]\d*/;
      // Convert x coordinate to an ascii number and convert that to a number from 0 to 9
      // Convert y coordinate to a number from 0 to 9
      const xCoordinate =
        shipCoordinates[i][j].match(regex1)[0].charCodeAt(0) - 65;
      const yCoordinate = shipCoordinates[i][j].match(regex2)[0] - 1;
      const shipName = shipNames[i];
      // Replace "empty" value in board coordinate with ship name
      board[xCoordinate][yCoordinate] = shipName;
    }
  }
  // Create ship objects
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const cruiser = Ship(3, "cruiser");
  const submarine = Ship(3, "submarine");
  const patrolBoat = Ship(2, "patrolBoat");

  const ships = {
    carrier: carrier,
    battleship: battleship,
    cruiser: cruiser,
    submarine: submarine,
    patrolBoat: patrolBoat,
  };

  return {
    receiveAttack: function (coordinate) {
      // Initialize array to contain return values (attack status and hit ship)
      const result = [];
      // Convert x and y coordinates to numbers for board array
      const regex1 = /[A-J]/i;
      const regex2 = /[1-9]\d*/;
      const x = coordinate.match(regex1)[0].charCodeAt(0) - 65;
      const y = coordinate.match(regex2)[0] - 1;

      if (board[x][y] === "empty") {
        board[x][y] = "miss";
        result.push("miss");
        result.push(null);
        return result;
      } else if (board[x][y] !== "miss" && board[x][y] !== "hit") {
        // Execute attack on ship
        const shipName = board[x][y];
        if (coordinate === undefined) {
        } else {
          ships[shipName].hit();
          // Replace hit ship in board with "hit"
          board[x][y] = "hit";
          if (ships[shipName].isSunk()) {
            result.push("sink");
            result.push(shipName);
            return result;
          }
          result.push("hit");
          result.push(shipName);
          return result;
        }
      }
    },
    areShipsSunk: function () {
      for (let ship in ships) {
        if (ships[ship].isSunk() === false) {
          return false;
        }
      }
      return true;
    },
  };
}

function Player(playerType) {
  let turn = false;

  // AI board access
  const board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      const x = String.fromCharCode(i + 65);
      const y = j + 1;
      const coordinate = x + y;
      board[i][j] = coordinate;
    }
  }

  // AI list of legal moves
  const legalMoves = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      legalMoves.push(board[i][j]);
    }
  }

  // AI triangulation array (successful hits are recorded
  // until ship is destroyed. Then they are forgotten)
  const targetedShip = [];

  // AI records attacked coordinate, which will be used if the hit is a success
  let lastAttack;

  let attack;
  let receiveAttackInfo = undefined;

  if (playerType === "human") {
    attack = function (attackCoordinate) {
      return attackCoordinate;
    };
  }
  // 1. AI should randomly produce a coordinate to attack
  // 2. AI should record all previous hits, and only produce a coordinate to attack based on the
  // .. remaining spaces
  // 3. AI should prioritize attacking spaces adjacent to successful hits
  if (playerType === "computer") {
    attack = function (attackCoordinateOverride) {
      if (attackCoordinateOverride === undefined) {
        let attackCoordinate;
        // if targetedShip array length is 1, get a random adjacent coordinate (max 4 choices)
        if (targetedShip.length === 1) {
          const possibleMoves = [];
          const regex1 = /[A-J]/i;
          const regex2 = /[1-9]\d*/;
          const x = targetedShip[0].match(regex1)[0].charCodeAt(0) - 65;
          const y = targetedShip[0].match(regex2)[0] - 1;

          // Record all possible adjacent moves
          if (board[x + 1] !== undefined && board[x + 1][y] !== undefined)
            possibleMoves.push(board[x + 1][y]);
          if (board[x - 1] !== undefined && board[x - 1][y] !== undefined)
            possibleMoves.push(board[x - 1][y]);
          if (board[x] !== undefined && board[x][y + 1] !== undefined)
            possibleMoves.push(board[x][y + 1]);
          if (board[x] !== undefined && board[x][y - 1] !== undefined)
            possibleMoves.push(board[x][y - 1]);

          // Remove possible adjacent move if not possible
          for (let i = 0; i < possibleMoves.length; i++) {
            if (possibleMoves[i] === undefined) possibleMoves.splice(i, 1);
            let isLegal = false;
            legalMoveCheck: for (let j = 0; j < legalMoves.length; j++) {
              if (possibleMoves[i] === legalMoves[j]) {
                isLegal = true;
                break legalMoveCheck;
              }
            }
            if (isLegal === false) {
              possibleMoves.splice(i, 1);
              i--;
            }
          }

          // Choose random move from list of possible moves
          attackCoordinate =
            possibleMoves[
              Math.floor(Math.random() * (possibleMoves.length + 1))
            ];
        }
        // if targetedShip array is greater than 1, get a coordinate on the same line as those
        // .. recorded coordinates and is adjacent to either of the recorded coordinates in the
        // .. targetedShip array
        else if (targetedShip.length > 1) {
          const regex1 = /[A-J]/i;
          const regex2 = /[1-9]\d*/;
          // Record all targeted ship coordinates in array form
          const xCoordinates = [];
          const yCoordinates = [];
          for (let i = 0; i < targetedShip.length; i++) {
            xCoordinates.push(
              targetedShip[i].match(regex1)[0].charCodeAt(0) - 65
            );
            yCoordinates.push(targetedShip[i].match(regex2)[0] - 1);
          }
          // Establish line of attack
          const allEqual = (arr) => arr.every((v) => v === arr[0]);
          const xCoordinatesAllEqual = allEqual(xCoordinates); // Either true or false
          const yCoordinatesAllEqual = allEqual(yCoordinates); // Either true or false
          // Record all possible moves
          const possibleMoves = [];
          for (let i = 0; i < targetedShip.length; i++) {
            const x = xCoordinates[i];
            const y = yCoordinates[i];
            if (xCoordinatesAllEqual) {
              possibleMoves.push(board[x][y + 1]);
              possibleMoves.push(board[x][y - 1]);
            } else if (yCoordinatesAllEqual) {
              if (board[x + 1] !== undefined && board[x + 1][y] !== undefined)
                possibleMoves.push(board[x + 1][y]);
              if (board[x - 1] !== undefined && board[x - 1][y])
                possibleMoves.push(board[x - 1][y]);
            }
          }
          // Remove possible adjacent move if not possible
          const impossibleMoves = [];
          for (let i = 0; i < possibleMoves.length; i++) {
            if (possibleMoves[i] === undefined) possibleMoves.splice(i, 1);
            let isLegal = false;
            legalMoveCheck: for (let j = 0; j < legalMoves.length; j++) {
              if (possibleMoves[i] === legalMoves[j]) {
                isLegal = true;
                break legalMoveCheck;
              }
            }
            if (isLegal === false) {
              impossibleMoves.push(possibleMoves[i]);
            }
          }

          for (let i = 0; i < possibleMoves.length; i++) {
            if (impossibleMoves.includes(possibleMoves[i])) {
              possibleMoves.splice(i, 1);
              i--;
            }
          }
          // Choose random move from list of possible moves
          attackCoordinate =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        }
        // else, get random block from legalMoves array
        else {
          attackCoordinate =
            legalMoves[Math.floor(Math.random() * legalMoves.length)];
        }
        // Remove that coordinate from legalMoves array
        for (let i = 0; i < legalMoves.length; i++) {
          if (attackCoordinate === legalMoves[i]) {
            legalMoves.splice(i, 1);
          }
        }
        // Assign lastAttack variable the value of the to be attacked coordinate
        lastAttack = attackCoordinate;
        // return attacked coordinate
        return attackCoordinate;
      } else if (attackCoordinateOverride !== undefined) {
        // Remove that coordinate from legalMoves array
        for (let i = 0; i < legalMoves.length; i++) {
          if (attackCoordinateOverride === legalMoves[i])
            legalMoves.splice(i, 1);
        }
        // Assign lastAttack variable the value of the to be attacked coordinate
        lastAttack = attackCoordinateOverride;
        // return attacked coordinate
        return attackCoordinateOverride;
      }
    };
    receiveAttackInfo = function (receivedStatus) {
      if (receivedStatus === "hit") {
        targetedShip.push(lastAttack);
      }
      if (receivedStatus === "sink") {
        targetedShip.length = 0;
      }
    };
  }
  return {
    getTurn: function () {
      return turn;
    },
    setTurn: function (booleanValue) {
      turn = booleanValue;
    },
    attack: attack,
    receiveAttackInfo: receiveAttackInfo,
  };
}

function randomizeShipPositions() {
  const boardSize = 10; // The size of the battleship board
  const shipSizes = [5, 4, 3, 3, 2]; // The sizes of the ships that need to be placed
  const board = Array(boardSize)
    .fill()
    .map(() => Array(boardSize).fill(null)); // Initialize the board with null values
  const shipPositions = [];
  const carrierCoordinates = [];
  const battleshipCoordinate = [];
  const cruiserCoordinates = [];
  const submarineCoordinates = [];
  const patrolBoatCoordinates = [];
  shipPositions.push(carrierCoordinates);
  shipPositions.push(battleshipCoordinate);
  shipPositions.push(cruiserCoordinates);
  shipPositions.push(submarineCoordinates);
  shipPositions.push(patrolBoatCoordinates);

  for (let i = 0; i < shipSizes.length; i++) {
    let shipSize = shipSizes[i];
    let orientation = Math.floor(Math.random() * 2); // 0 = horizontal, 1 = vertical

    let row, col;
    if (orientation === 0) {
      // horizontal
      row = Math.floor(Math.random() * boardSize);
      col = Math.floor(Math.random() * (boardSize - shipSize + 1));
    } else {
      // vertical
      row = Math.floor(Math.random() * (boardSize - shipSize + 1));
      col = Math.floor(Math.random() * boardSize);
    }

    // check if the ship fits in the chosen position
    let validPosition = true;
    for (let j = 0; j < shipSize; j++) {
      if (
        orientation === 0 &&
        board[row][col + j] !== null // check if there's already a ship in the way
      ) {
        validPosition = false;
        break;
      } else if (
        orientation === 1 &&
        board[row + j][col] !== null // check if there's already a ship in the way
      ) {
        validPosition = false;
        break;
      }
    }

    // if the position is valid, place the ship on the board
    if (validPosition) {
      for (let j = 0; j < shipSize; j++) {
        if (orientation === 0) {
          board[row][col + j] = i;
        } else {
          board[row + j][col] = i;
        }
      }
    } else {
      // if the position is not valid, try again with this ship
      i--;
    }
  }

  // iterate through the board and extract the ship positions
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== null) {
        const x = String.fromCharCode(i + 65);
        const y = j + 1;
        const coordinate = x + y;
        shipPositions[board[i][j]].push(coordinate);
      }
    }
  }

  return shipPositions;
}




/***/ }),

/***/ "./src/Roboto/Roboto-Regular.ttf":
/*!***************************************!*\
  !*** ./src/Roboto/Roboto-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




async function gameLoop() {
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.gameBuilder)();

  // Initialize human player and computer player. Make human player start first
  const human = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.Player)("human");
  human.setTurn(true);
  const computer = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.Player)("computer");
  computer.setTurn(false);

  // Randomize ship positions for each board
  const gameBoard1 = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.randomizeShipPositions)();
  const gameBoard2 = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.randomizeShipPositions)();

  // Initialize human board and computer board
  const carrierCoordinatesHuman = gameBoard1[0];
  const battleshipCoordinatesHuman = gameBoard1[1];
  const cruiserCoordinatesHuman = gameBoard1[2];
  const submarineCoordinatesHuman = gameBoard1[3];
  const patrolBoatCoordinatesHuman = gameBoard1[4];

  const carrierCoordinatesComputer = gameBoard2[0];
  const battleshipCoordinatesComputer = gameBoard2[1];
  const cruiserCoordinatesComputer = gameBoard2[2];
  const submarineCoordinatesComputer = gameBoard2[3];
  const patrolBoatCoordinatesComputer = gameBoard2[4];

  const humanGameBoard = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard)(
    carrierCoordinatesHuman,
    battleshipCoordinatesHuman,
    cruiserCoordinatesHuman,
    submarineCoordinatesHuman,
    patrolBoatCoordinatesHuman
  );

  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayPlayerShips)(
    carrierCoordinatesHuman,
    battleshipCoordinatesHuman,
    cruiserCoordinatesHuman,
    submarineCoordinatesHuman,
    patrolBoatCoordinatesHuman
  );

  const computerGameBoard = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard)(
    carrierCoordinatesComputer,
    battleshipCoordinatesComputer,
    cruiserCoordinatesComputer,
    submarineCoordinatesComputer,
    patrolBoatCoordinatesComputer
  );

  // Create array of enemy board blocks with event listeners and return that array
  const board = document.getElementById("player-2-board");
  const clickedBlocks = [];
  const promises = [];

  board.addEventListener("click", function (event) {
    const block = event.target;
    if (
      block.classList.contains("block") &&
      !clickedBlocks.includes(block.classList[1])
    ) {
      const index = block.classList[1];
      const promise = new Promise((resolve) => {
        resolve(index);
      });
      clickedBlocks.push(index);
      promises.push(promise);
    }
  });

  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.hideNonActivePlayerBoard)(human.getTurn(), computer.getTurn());

  // Beginning of game loop
  while (true) {
    if (promises.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // wait for promises to be added
      continue; // start the while loop again
    }
    // Human attack
    const humanAttack = await Promise.race(promises);
    promises.length = 0;

    const humanAttackBlock = document.querySelector(
      `#player-2-board > .${humanAttack}`
    );

    // do stuff with human attack
    const humanAttackResult = computerGameBoard.receiveAttack(humanAttack); // should return hit status and ship hit
    if (humanAttackResult[0] === "miss") {
      human.setTurn(false);
      computer.setTurn(true);
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayMiss)(humanAttackBlock);
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.hideNonActivePlayerBoard)(human.getTurn(), computer.getTurn());
    }

    if (humanAttackResult[0] === "hit" || humanAttackResult[0] === "sink") {
      const shipBlocks = document.querySelector(
        `#player-2-ships > .${humanAttackResult[1]}`
      );

      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeShipLifeBlock)(shipBlocks);
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayHit)(humanAttackBlock);
    }

    if (computerGameBoard.areShipsSunk()) {
      (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayWinner)("player 1 wins");
      return; // Escape game loop
    }

    // Computer attack
    if (computer.getTurn() && !human.getTurn()) {
      let computerPlayAgain = true;
      do {
        await new Promise((resolve) => setTimeout(resolve, 500)); // add a delay of 1 second
        const computerAttack = computer.attack();
        if (computerAttack) {
          const computerAttackResult =
            humanGameBoard.receiveAttack(computerAttack); // should return hit status and ship hit
          computer.receiveAttackInfo(computerAttackResult[0]);

          const computerAttackBlock = document.querySelector(
            `#player-1-board > .${computerAttack}`
          );

          if (computerAttackResult[0] === "miss") {
            human.setTurn(true);
            computer.setTurn(false);
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayMiss)(computerAttackBlock);
            await new Promise((resolve) => setTimeout(resolve, 500)); // add a delay of 1 second
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.hideNonActivePlayerBoard)(human.getTurn(), computer.getTurn());
            computerPlayAgain = false;
          }

          if (
            computerAttackResult[0] === "hit" ||
            computerAttackResult[0] === "sink"
          ) {
            const shipBlocks = document.querySelector(
              `#player-1-ships > .${computerAttackResult[1]}`
            );

            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeShipLifeBlock)(shipBlocks);
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayHit)(computerAttackBlock);
          }

          if (humanGameBoard.areShipsSunk()) {
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayWinner)("player 2 wins");
            return; // Escape game loop
          }
        }
      } while (computerPlayAgain === true);
    }
  }
}

gameLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvREFBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRSwyRUFBd0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qzs7QUFFQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFXO0FBQ2pCLE1BQU0sMkVBQXdCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EOztBQUVBLE1BQU0sc0VBQW1CO0FBQ3pCLE1BQU0sNkRBQVU7QUFDaEI7O0FBRUE7QUFDQSxNQUFNLGdFQUFhO0FBQ25CLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFXO0FBQ3ZCLHNFQUFzRTtBQUN0RSxZQUFZLDJFQUF3QjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVEOztBQUVBLFlBQVksc0VBQW1CO0FBQy9CLFlBQVksNkRBQVU7QUFDdEI7O0FBRUE7QUFDQSxZQUFZLGdFQUFhO0FBQ3pCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTVweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZ2FtZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiA1MjVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNvdmVybGF5LTEsXFxuI292ZXJsYXktMiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jcGxheWVyLTEtc2hpcHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMjJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jcGxheWVyLTItc2hpcHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMjJweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG9yZGVyOiAyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLnNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5saWZlLWJsb2NrIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXG59XFxuXFxuI3BsYXllci0xLWJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjhweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMjhweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jcGxheWVyLTItYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyOHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyOHB4KTtcXG4gIG9yZGVyOiAxO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbHVtbi1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJvcmRlcjogc29saWQgI2I1ZjdlYTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBGb3Igc3dpdGNoaW5nIHRoZSBvcmRlciBvZiBwbGF5ZXIgMiBib2FyZCBhbmQgcGxheWVyIDIgc2hpcHMgd2hlbiB3cmFwcGluZyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDlweCkge1xcbiAgI3BsYXllci0yLXNoaXBzIHtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxuICAjcGxheWVyLTItYm9hcmQge1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICNwbGF5ZXItd3JhcHBlciB7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQXFDO0FBQ3ZDOztBQUVBOztFQUVFLFlBQVk7RUFDWixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUEsK0VBQStFO0FBQy9FO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybCguL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDExNXB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNtZXNzYWdlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNnYW1lLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbiNwbGF5ZXItd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDUyNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI292ZXJsYXktMSxcXG4jb3ZlcmxheS0yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNwbGF5ZXItMS1zaGlwcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbiNwbGF5ZXItMi1zaGlwcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgb3JkZXI6IDI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxpZmUtYmxvY2sge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkNGJmO1xcbn1cXG5cXG4jcGxheWVyLTEtYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyOHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyOHB4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNwbGF5ZXItMi1ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI4cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI4cHgpO1xcbiAgb3JkZXI6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29sdW1uLW51bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LW51bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgYm9yZGVyOiBzb2xpZCAjYjVmN2VhO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIEZvciBzd2l0Y2hpbmcgdGhlIG9yZGVyIG9mIHBsYXllciAyIGJvYXJkIGFuZCBwbGF5ZXIgMiBzaGlwcyB3aGVuIHdyYXBwaW5nICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0OXB4KSB7XFxuICAjcGxheWVyLTItc2hpcHMge1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG4gICNwbGF5ZXItMi1ib2FyZCB7XFxuICAgIG9yZGVyOiAyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgI3BsYXllci13cmFwcGVyIHtcXG4gICAgbWluLXdpZHRoOiB1bnNldDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBnYW1lQnVpbGRlcigpIHtcbiAgLy8gRGVjbGFyZSBlbGVtZW50c1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCYXR0bGVzaGlwXCIpO1xuICBjb25zdCBtZXNzYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGdhbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXJXcmFwcGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG92ZXJsYXkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxheWVyMVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMUxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMUxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMUxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMUxpZmVCbG9jazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMUxpZmVCbG9jazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAxTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAxTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAxTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAxTGlmZUJsb2NrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjFMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjFMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjFMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTFMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMUxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUxTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDFMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDFMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbXB0eVNwYWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQlBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkJcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQ1BsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRFBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkRcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkVcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRlBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyR1BsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySFBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlcklQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIklcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckpQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySlBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkpcIik7XG4gIGNvbnN0IHJvd051bWJlcjFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjFcIik7XG4gIGNvbnN0IGJsb2NrQTFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIyUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMlwiKTtcbiAgY29uc3QgYmxvY2tBMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjNQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIzXCIpO1xuICBjb25zdCBibG9ja0EzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0czUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0ozUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNFBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjRcIik7XG4gIGNvbnN0IGJsb2NrQTRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI1UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNVwiKTtcbiAgY29uc3QgYmxvY2tBNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjZQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI2XCIpO1xuICBjb25zdCBibG9ja0E2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyN1BsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjdcIik7XG4gIGNvbnN0IGJsb2NrQTdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI4UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiOFwiKTtcbiAgY29uc3QgYmxvY2tBOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSThQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjlQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI5XCIpO1xuICBjb25zdCBibG9ja0E5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjEwUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMTBcIik7XG4gIGNvbnN0IGJsb2NrQTEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjEwUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcGxheWVyV3JhcHBlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvdmVybGF5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVtcHR5U3BhY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJBUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJCUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQ1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJDUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ1wiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJEUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRFwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJFUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJGUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyR1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJHUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR1wiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJIUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSFwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJJUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJKUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMVwiKTtcbiAgY29uc3QgYmxvY2tBMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjJQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIyXCIpO1xuICBjb25zdCBibG9ja0EyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyM1BsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjNcIik7XG4gIGNvbnN0IGJsb2NrQTNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI0UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNFwiKTtcbiAgY29uc3QgYmxvY2tBNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjVQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI1XCIpO1xuICBjb25zdCBibG9ja0E1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNlBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjZcIik7XG4gIGNvbnN0IGJsb2NrQTZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI3UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiN1wiKTtcbiAgY29uc3QgYmxvY2tBN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjhQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI4XCIpO1xuICBjb25zdCBibG9ja0E4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRThQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjlcIik7XG4gIGNvbnN0IGJsb2NrQTlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMTBQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIxMFwiKTtcbiAgY29uc3QgYmxvY2tBMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMTBQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXIyU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyTGlmZUJsb2NrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyTGlmZUJsb2NrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDJMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDJMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDJMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDJMaWZlQmxvY2s0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMkxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMkxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMkxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMkxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUyTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTJMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MkxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MkxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNyZWRpdHNMaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNyZWRpdHNMaW5lMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiV2Vic2l0ZSBjcmVhdGVkIGJ5IERhbmllbCBCYWxsZXJpbmlcIlxuICApO1xuICBjb25zdCBjcmVkaXRzTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcmVkaXRzTGluZTJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBcIlByb2plY3QgaWRlYSBmcm9tIMKpIE9kaW4gUHJvamVjdFwiXG4gICk7XG5cbiAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIG1lc3NhZ2VTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZS1zZWN0aW9uXCIpO1xuICBnYW1lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtc2VjdGlvblwiKTtcbiAgcGxheWVyV3JhcHBlcjEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItd3JhcHBlclwiKTtcbiAgb3ZlcmxheTEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5LTFcIik7XG5cbiAgcGxheWVyMVNoaXBzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTEtc2hpcHNcIik7XG4gIGNhcnJpZXIxLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIsIFwic2hpcFwiKTtcbiAgY2FycmllcjFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIxTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjFMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMUxpZmVCbG9jazUuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAxLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIsIFwic2hpcFwiKTtcbiAgYmF0dGxlc2hpcDFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAxTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDFMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMS5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlclwiLCBcInNoaXBcIik7XG4gIGNydWlzZXIxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY3J1aXNlcjFMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTEuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiLCBcInNoaXBcIik7XG4gIHN1Ym1hcmluZTFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUxTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHBhdHJvbEJvYXQxLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2xCb2F0XCIsIFwic2hpcFwiKTtcbiAgcGF0cm9sQm9hdDFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBwYXRyb2xCb2F0MUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG5cbiAgcGxheWVyMUJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTEtYm9hcmRcIik7XG4gIGVtcHR5U3BhY2UxLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1zcGFjZVwiKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIHJvd051bWJlcjFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0ExUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMVwiKTtcbiAgYmxvY2tCMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjFcIik7XG4gIGJsb2NrQzFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxXCIpO1xuICBibG9ja0QxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMVwiKTtcbiAgYmxvY2tFMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTFcIik7XG4gIGJsb2NrRjFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxXCIpO1xuICBibG9ja0cxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMVwiKTtcbiAgYmxvY2tIMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDFcIik7XG4gIGJsb2NrSTFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxXCIpO1xuICBibG9ja0oxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMVwiKTtcbiAgcm93TnVtYmVyMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEyXCIpO1xuICBibG9ja0IyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMlwiKTtcbiAgYmxvY2tDMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzJcIik7XG4gIGJsb2NrRDJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQyXCIpO1xuICBibG9ja0UyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMlwiKTtcbiAgYmxvY2tGMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjJcIik7XG4gIGJsb2NrRzJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcyXCIpO1xuICBibG9ja0gyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMlwiKTtcbiAgYmxvY2tJMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTJcIik7XG4gIGJsb2NrSjJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoyXCIpO1xuICByb3dOdW1iZXIzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTNcIik7XG4gIGJsb2NrQjNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIzXCIpO1xuICBibG9ja0MzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDM1wiKTtcbiAgYmxvY2tEM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDNcIik7XG4gIGJsb2NrRTNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUzXCIpO1xuICBibG9ja0YzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGM1wiKTtcbiAgYmxvY2tHM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzNcIik7XG4gIGJsb2NrSDNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgzXCIpO1xuICBibG9ja0kzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJM1wiKTtcbiAgYmxvY2tKM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjNcIik7XG4gIHJvd051bWJlcjRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNFwiKTtcbiAgYmxvY2tCNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjRcIik7XG4gIGJsb2NrQzRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM0XCIpO1xuICBibG9ja0Q0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENFwiKTtcbiAgYmxvY2tFNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTRcIik7XG4gIGJsb2NrRjRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY0XCIpO1xuICBibG9ja0c0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNFwiKTtcbiAgYmxvY2tINFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDRcIik7XG4gIGJsb2NrSTRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk0XCIpO1xuICBibG9ja0o0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNFwiKTtcbiAgcm93TnVtYmVyNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE1XCIpO1xuICBibG9ja0I1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNVwiKTtcbiAgYmxvY2tDNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzVcIik7XG4gIGJsb2NrRDVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ1XCIpO1xuICBibG9ja0U1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNVwiKTtcbiAgYmxvY2tGNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjVcIik7XG4gIGJsb2NrRzVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc1XCIpO1xuICBibG9ja0g1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINVwiKTtcbiAgYmxvY2tJNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTVcIik7XG4gIGJsb2NrSjVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko1XCIpO1xuICByb3dOdW1iZXI2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTZcIik7XG4gIGJsb2NrQjZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI2XCIpO1xuICBibG9ja0M2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNlwiKTtcbiAgYmxvY2tENlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDZcIik7XG4gIGJsb2NrRTZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU2XCIpO1xuICBibG9ja0Y2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNlwiKTtcbiAgYmxvY2tHNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzZcIik7XG4gIGJsb2NrSDZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg2XCIpO1xuICBibG9ja0k2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNlwiKTtcbiAgYmxvY2tKNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjZcIik7XG4gIHJvd051bWJlcjdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBN1wiKTtcbiAgYmxvY2tCN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjdcIik7XG4gIGJsb2NrQzdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM3XCIpO1xuICBibG9ja0Q3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEN1wiKTtcbiAgYmxvY2tFN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTdcIik7XG4gIGJsb2NrRjdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY3XCIpO1xuICBibG9ja0c3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHN1wiKTtcbiAgYmxvY2tIN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDdcIik7XG4gIGJsb2NrSTdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk3XCIpO1xuICBibG9ja0o3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKN1wiKTtcbiAgcm93TnVtYmVyOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQThQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE4XCIpO1xuICBibG9ja0I4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOFwiKTtcbiAgYmxvY2tDOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzhcIik7XG4gIGJsb2NrRDhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ4XCIpO1xuICBibG9ja0U4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOFwiKTtcbiAgYmxvY2tGOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjhcIik7XG4gIGJsb2NrRzhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc4XCIpO1xuICBibG9ja0g4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOFwiKTtcbiAgYmxvY2tJOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSThcIik7XG4gIGJsb2NrSjhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko4XCIpO1xuICByb3dOdW1iZXI5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTlcIik7XG4gIGJsb2NrQjlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI5XCIpO1xuICBibG9ja0M5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDOVwiKTtcbiAgYmxvY2tEOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDlcIik7XG4gIGJsb2NrRTlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU5XCIpO1xuICBibG9ja0Y5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGOVwiKTtcbiAgYmxvY2tHOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzlcIik7XG4gIGJsb2NrSDlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg5XCIpO1xuICBibG9ja0k5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJOVwiKTtcbiAgYmxvY2tKOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjlcIik7XG4gIHJvd051bWJlcjEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkExMFwiKTtcbiAgYmxvY2tCMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxMFwiKTtcbiAgYmxvY2tDMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxMFwiKTtcbiAgYmxvY2tEMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQxMFwiKTtcbiAgYmxvY2tFMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxMFwiKTtcbiAgYmxvY2tGMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxMFwiKTtcbiAgYmxvY2tHMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcxMFwiKTtcbiAgYmxvY2tIMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxMFwiKTtcbiAgYmxvY2tJMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxMFwiKTtcbiAgYmxvY2tKMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoxMFwiKTtcblxuICBwbGF5ZXJXcmFwcGVyMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci13cmFwcGVyXCIpO1xuICBvdmVybGF5Mi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm92ZXJsYXktMlwiKTtcbiAgcGxheWVyMkJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTItYm9hcmRcIik7XG4gIGVtcHR5U3BhY2UyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1zcGFjZVwiKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIHJvd051bWJlcjFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0ExUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMVwiKTtcbiAgYmxvY2tCMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjFcIik7XG4gIGJsb2NrQzFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxXCIpO1xuICBibG9ja0QxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMVwiKTtcbiAgYmxvY2tFMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTFcIik7XG4gIGJsb2NrRjFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxXCIpO1xuICBibG9ja0cxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMVwiKTtcbiAgYmxvY2tIMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDFcIik7XG4gIGJsb2NrSTFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxXCIpO1xuICBibG9ja0oxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMVwiKTtcbiAgcm93TnVtYmVyMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEyXCIpO1xuICBibG9ja0IyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMlwiKTtcbiAgYmxvY2tDMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzJcIik7XG4gIGJsb2NrRDJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQyXCIpO1xuICBibG9ja0UyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMlwiKTtcbiAgYmxvY2tGMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjJcIik7XG4gIGJsb2NrRzJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcyXCIpO1xuICBibG9ja0gyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMlwiKTtcbiAgYmxvY2tJMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTJcIik7XG4gIGJsb2NrSjJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoyXCIpO1xuICByb3dOdW1iZXIzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTNcIik7XG4gIGJsb2NrQjNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIzXCIpO1xuICBibG9ja0MzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDM1wiKTtcbiAgYmxvY2tEM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDNcIik7XG4gIGJsb2NrRTNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUzXCIpO1xuICBibG9ja0YzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGM1wiKTtcbiAgYmxvY2tHM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzNcIik7XG4gIGJsb2NrSDNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgzXCIpO1xuICBibG9ja0kzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJM1wiKTtcbiAgYmxvY2tKM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjNcIik7XG4gIHJvd051bWJlcjRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNFwiKTtcbiAgYmxvY2tCNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjRcIik7XG4gIGJsb2NrQzRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM0XCIpO1xuICBibG9ja0Q0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENFwiKTtcbiAgYmxvY2tFNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTRcIik7XG4gIGJsb2NrRjRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY0XCIpO1xuICBibG9ja0c0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNFwiKTtcbiAgYmxvY2tINFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDRcIik7XG4gIGJsb2NrSTRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk0XCIpO1xuICBibG9ja0o0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNFwiKTtcbiAgcm93TnVtYmVyNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE1XCIpO1xuICBibG9ja0I1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNVwiKTtcbiAgYmxvY2tDNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzVcIik7XG4gIGJsb2NrRDVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ1XCIpO1xuICBibG9ja0U1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNVwiKTtcbiAgYmxvY2tGNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjVcIik7XG4gIGJsb2NrRzVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc1XCIpO1xuICBibG9ja0g1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINVwiKTtcbiAgYmxvY2tJNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTVcIik7XG4gIGJsb2NrSjVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko1XCIpO1xuICByb3dOdW1iZXI2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTZcIik7XG4gIGJsb2NrQjZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI2XCIpO1xuICBibG9ja0M2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNlwiKTtcbiAgYmxvY2tENlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDZcIik7XG4gIGJsb2NrRTZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU2XCIpO1xuICBibG9ja0Y2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNlwiKTtcbiAgYmxvY2tHNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzZcIik7XG4gIGJsb2NrSDZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg2XCIpO1xuICBibG9ja0k2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNlwiKTtcbiAgYmxvY2tKNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjZcIik7XG4gIHJvd051bWJlcjdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBN1wiKTtcbiAgYmxvY2tCN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjdcIik7XG4gIGJsb2NrQzdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM3XCIpO1xuICBibG9ja0Q3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEN1wiKTtcbiAgYmxvY2tFN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTdcIik7XG4gIGJsb2NrRjdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY3XCIpO1xuICBibG9ja0c3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHN1wiKTtcbiAgYmxvY2tIN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDdcIik7XG4gIGJsb2NrSTdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk3XCIpO1xuICBibG9ja0o3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKN1wiKTtcbiAgcm93TnVtYmVyOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQThQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE4XCIpO1xuICBibG9ja0I4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOFwiKTtcbiAgYmxvY2tDOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzhcIik7XG4gIGJsb2NrRDhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ4XCIpO1xuICBibG9ja0U4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOFwiKTtcbiAgYmxvY2tGOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjhcIik7XG4gIGJsb2NrRzhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc4XCIpO1xuICBibG9ja0g4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOFwiKTtcbiAgYmxvY2tJOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSThcIik7XG4gIGJsb2NrSjhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko4XCIpO1xuICByb3dOdW1iZXI5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTlcIik7XG4gIGJsb2NrQjlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI5XCIpO1xuICBibG9ja0M5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDOVwiKTtcbiAgYmxvY2tEOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDlcIik7XG4gIGJsb2NrRTlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU5XCIpO1xuICBibG9ja0Y5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGOVwiKTtcbiAgYmxvY2tHOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzlcIik7XG4gIGJsb2NrSDlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg5XCIpO1xuICBibG9ja0k5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJOVwiKTtcbiAgYmxvY2tKOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjlcIik7XG4gIHJvd051bWJlcjEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkExMFwiKTtcbiAgYmxvY2tCMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxMFwiKTtcbiAgYmxvY2tDMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxMFwiKTtcbiAgYmxvY2tEMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQxMFwiKTtcbiAgYmxvY2tFMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxMFwiKTtcbiAgYmxvY2tGMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxMFwiKTtcbiAgYmxvY2tHMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcxMFwiKTtcbiAgYmxvY2tIMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxMFwiKTtcbiAgYmxvY2tJMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxMFwiKTtcbiAgYmxvY2tKMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoxMFwiKTtcblxuICBwbGF5ZXIyU2hpcHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItMi1zaGlwc1wiKTtcbiAgY2FycmllcjIuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIiwgXCJzaGlwXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjJMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazQuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIyTGlmZUJsb2NrNS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDIuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIiwgXCJzaGlwXCIpO1xuICBiYXR0bGVzaGlwMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDJMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMkxpZmVCbG9jazQuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNydWlzZXIyLmNsYXNzTGlzdC5hZGQoXCJjcnVpc2VyXCIsIFwic2hpcFwiKTtcbiAgY3J1aXNlcjJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMkxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNydWlzZXIyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMi5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIsIFwic2hpcFwiKTtcbiAgc3VibWFyaW5lMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTJMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgcGF0cm9sQm9hdDIuY2xhc3NMaXN0LmFkZChcInBhdHJvbEJvYXRcIiwgXCJzaGlwXCIpO1xuICBwYXRyb2xCb2F0MkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHBhdHJvbEJvYXQyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcblxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySGVhZGVyKTtcbiAgaGVhZGVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclR4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU2VjdGlvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lU2VjdGlvbik7XG4gIGdhbWVTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllcldyYXBwZXIxKTtcblxuICBwbGF5ZXJXcmFwcGVyMS5hcHBlbmRDaGlsZChwbGF5ZXIxU2hpcHMpO1xuICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQoY2FycmllcjEpO1xuICBjYXJyaWVyMS5hcHBlbmRDaGlsZChjYXJyaWVyMUxpZmVCbG9jazEpO1xuICBjYXJyaWVyMS5hcHBlbmRDaGlsZChjYXJyaWVyMUxpZmVCbG9jazIpO1xuICBjYXJyaWVyMS5hcHBlbmRDaGlsZChjYXJyaWVyMUxpZmVCbG9jazMpO1xuICBjYXJyaWVyMS5hcHBlbmRDaGlsZChjYXJyaWVyMUxpZmVCbG9jazQpO1xuICBjYXJyaWVyMS5hcHBlbmRDaGlsZChjYXJyaWVyMUxpZmVCbG9jazUpO1xuXG4gIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMSk7XG4gIGJhdHRsZXNoaXAxLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxTGlmZUJsb2NrMSk7XG4gIGJhdHRsZXNoaXAxLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxTGlmZUJsb2NrMik7XG4gIGJhdHRsZXNoaXAxLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxTGlmZUJsb2NrMyk7XG4gIGJhdHRsZXNoaXAxLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxTGlmZUJsb2NrNCk7XG5cbiAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKGNydWlzZXIxKTtcbiAgY3J1aXNlcjEuYXBwZW5kQ2hpbGQoY3J1aXNlcjFMaWZlQmxvY2sxKTtcbiAgY3J1aXNlcjEuYXBwZW5kQ2hpbGQoY3J1aXNlcjFMaWZlQmxvY2syKTtcbiAgY3J1aXNlcjEuYXBwZW5kQ2hpbGQoY3J1aXNlcjFMaWZlQmxvY2szKTtcblxuICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMSk7XG4gIHN1Ym1hcmluZTEuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMUxpZmVCbG9jazEpO1xuICBzdWJtYXJpbmUxLmFwcGVuZENoaWxkKHN1Ym1hcmluZTFMaWZlQmxvY2syKTtcbiAgc3VibWFyaW5lMS5hcHBlbmRDaGlsZChzdWJtYXJpbmUxTGlmZUJsb2NrMyk7XG5cbiAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQxKTtcbiAgcGF0cm9sQm9hdDEuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDFMaWZlQmxvY2sxKTtcbiAgcGF0cm9sQm9hdDEuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDFMaWZlQmxvY2syKTtcblxuICBwbGF5ZXJXcmFwcGVyMS5hcHBlbmRDaGlsZChwbGF5ZXIxQm9hcmQpO1xuICBwbGF5ZXJXcmFwcGVyMS5hcHBlbmRDaGlsZChvdmVybGF5MSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChlbXB0eVNwYWNlMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJBUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckFQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckFQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckJQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyQlBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQlBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQ1BsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJDUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJEUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckRQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckRQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckVQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyRVBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRlBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJGUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJHUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckdQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckdQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckhQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVySFBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySFBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySVBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJJUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJKUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckpQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckpQbGF5ZXIxVHh0KTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMVBsYXllcjEpO1xuICByb3dOdW1iZXIxUGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXIxUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ExUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kxUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oxUGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjJQbGF5ZXIxKTtcbiAgcm93TnVtYmVyMlBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyMlBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMlBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIzUGxheWVyMSk7XG4gIHJvd051bWJlcjNQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjNQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTNQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjNQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNFBsYXllcjEpO1xuICByb3dOdW1iZXI0UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI0UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k0UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o0UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjVQbGF5ZXIxKTtcbiAgcm93TnVtYmVyNVBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyNVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNVBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI2UGxheWVyMSk7XG4gIHJvd051bWJlcjZQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjZQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTZQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjZQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyN1BsYXllcjEpO1xuICByb3dOdW1iZXI3UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI3UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k3UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o3UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjhQbGF5ZXIxKTtcbiAgcm93TnVtYmVyOFBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyOFBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJOFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKOFBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI5UGxheWVyMSk7XG4gIHJvd051bWJlcjlQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjlQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTlQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjlQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMTBQbGF5ZXIxKTtcbiAgcm93TnVtYmVyMTBQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjEwUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ExMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oxMFBsYXllcjEpO1xuXG4gIGdhbWVTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllcldyYXBwZXIyKTtcbiAgcGxheWVyV3JhcHBlcjIuYXBwZW5kQ2hpbGQocGxheWVyMkJvYXJkKTtcbiAgcGxheWVyV3JhcHBlcjIuYXBwZW5kQ2hpbGQob3ZlcmxheTIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoZW1wdHlTcGFjZTIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQVBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJBUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJBUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJCUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckJQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckNQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyQ1BsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQ1BsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRFBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJEUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJEUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJFUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckVQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckZQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyRlBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRlBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyR1BsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJHUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJHUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJIUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckhQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlcklQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVySVBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySlBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJKUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJKUGxheWVyMlR4dCk7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjFQbGF5ZXIyKTtcbiAgcm93TnVtYmVyMVBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyMVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMVBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIyUGxheWVyMik7XG4gIHJvd051bWJlcjJQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjJQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTJQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjJQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyM1BsYXllcjIpO1xuICByb3dOdW1iZXIzUGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXIzUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0EzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0czUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kzUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ozUGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjRQbGF5ZXIyKTtcbiAgcm93TnVtYmVyNFBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyNFBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNFBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI1UGxheWVyMik7XG4gIHJvd051bWJlcjVQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjVQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTVQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjVQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNlBsYXllcjIpO1xuICByb3dOdW1iZXI2UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI2UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k2UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o2UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjdQbGF5ZXIyKTtcbiAgcm93TnVtYmVyN1BsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyN1BsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJN1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKN1BsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI4UGxheWVyMik7XG4gIHJvd051bWJlcjhQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjhQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQThQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRThQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDhQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSThQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjhQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyOVBsYXllcjIpO1xuICByb3dOdW1iZXI5UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI5UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k5UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o5UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjEwUGxheWVyMik7XG4gIHJvd051bWJlcjEwUGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXIxMFBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMTBQbGF5ZXIyKTtcblxuICBwbGF5ZXJXcmFwcGVyMi5hcHBlbmRDaGlsZChwbGF5ZXIyU2hpcHMpO1xuICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQoY2FycmllcjIpO1xuICBjYXJyaWVyMi5hcHBlbmRDaGlsZChjYXJyaWVyMkxpZmVCbG9jazEpO1xuICBjYXJyaWVyMi5hcHBlbmRDaGlsZChjYXJyaWVyMkxpZmVCbG9jazIpO1xuICBjYXJyaWVyMi5hcHBlbmRDaGlsZChjYXJyaWVyMkxpZmVCbG9jazMpO1xuICBjYXJyaWVyMi5hcHBlbmRDaGlsZChjYXJyaWVyMkxpZmVCbG9jazQpO1xuICBjYXJyaWVyMi5hcHBlbmRDaGlsZChjYXJyaWVyMkxpZmVCbG9jazUpO1xuXG4gIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMik7XG4gIGJhdHRsZXNoaXAyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyTGlmZUJsb2NrMSk7XG4gIGJhdHRsZXNoaXAyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyTGlmZUJsb2NrMik7XG4gIGJhdHRsZXNoaXAyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyTGlmZUJsb2NrMyk7XG4gIGJhdHRsZXNoaXAyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyTGlmZUJsb2NrNCk7XG5cbiAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKGNydWlzZXIyKTtcbiAgY3J1aXNlcjIuYXBwZW5kQ2hpbGQoY3J1aXNlcjJMaWZlQmxvY2sxKTtcbiAgY3J1aXNlcjIuYXBwZW5kQ2hpbGQoY3J1aXNlcjJMaWZlQmxvY2syKTtcbiAgY3J1aXNlcjIuYXBwZW5kQ2hpbGQoY3J1aXNlcjJMaWZlQmxvY2szKTtcblxuICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMik7XG4gIHN1Ym1hcmluZTIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMkxpZmVCbG9jazEpO1xuICBzdWJtYXJpbmUyLmFwcGVuZENoaWxkKHN1Ym1hcmluZTJMaWZlQmxvY2syKTtcbiAgc3VibWFyaW5lMi5hcHBlbmRDaGlsZChzdWJtYXJpbmUyTGlmZUJsb2NrMyk7XG5cbiAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQyKTtcbiAgcGF0cm9sQm9hdDIuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDJMaWZlQmxvY2sxKTtcbiAgcGF0cm9sQm9hdDIuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDJMaWZlQmxvY2syKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHNMaW5lMSk7XG4gIGNyZWRpdHNMaW5lMS5hcHBlbmRDaGlsZChjcmVkaXRzTGluZTFUeHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0c0xpbmUyKTtcbiAgY3JlZGl0c0xpbmUyLmFwcGVuZENoaWxkKGNyZWRpdHNMaW5lMlR4dCk7XG59XG5mdW5jdGlvbiBkaXNwbGF5UGxheWVyU2hpcHMoXG4gIGNhcnJpZXJDb29yZGluYXRlcyxcbiAgYmF0dGxlc2hpcENvb3JkaW5hdGVzLFxuICBjcnVpc2VyQ29vcmRpbmF0ZXMsXG4gIHN1Ym1hcmluZUNvb3JkaW5hdGVzLFxuICBwYXRyb2xCb2F0Q29vcmRpbmF0ZXNcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJndW1lbnRzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCNwbGF5ZXItMS1ib2FyZCA+IC4ke2Nvb3JkaW5hdGV9YFxuICAgICAgKTtcbiAgICAgIHNoaXBCbG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMjE2OTFcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU1pc3ModGFyZ2V0ZWRCbG9jaykge1xuICB0YXJnZXRlZEJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2I1ZjdlYVwiO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGl0KHRhcmdldGVkQmxvY2spIHtcbiAgdGFyZ2V0ZWRCbG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwTGlmZUJsb2NrKHNoaXApIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzaGlwLmNoaWxkcmVuW2ldKS5iYWNrZ3JvdW5kQ29sb3IgPT09XG4gICAgICAgIFwicmdiKDQ1LCAyMTIsIDE5MSlcIiB8fFxuICAgICAgc2hpcC5jaGlsZHJlbltpXS5zdHlsZS5iYWNrZ3JvdW5kID09PSBcInJnYig0NSwgMjEyLCAxOTEpXCJcbiAgICApIHtcbiAgICAgIHNoaXAuY2hpbGRyZW5baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZU5vbkFjdGl2ZVBsYXllckJvYXJkKGh1bWFuVHVybiwgY29tcHV0ZXJUdXJuKSB7XG4gIGNvbnN0IG92ZXJsYXkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5LTFcIik7XG4gIGNvbnN0IG92ZXJsYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5LTJcIik7XG4gIGlmIChodW1hblR1cm4gPT09IHRydWUgJiYgY29tcHV0ZXJUdXJuID09PSBmYWxzZSkge1xuICAgIG92ZXJsYXkxLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgb3ZlcmxheTIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2UgaWYgKGh1bWFuVHVybiA9PT0gZmFsc2UgJiYgY29tcHV0ZXJUdXJuID09PSB0cnVlKSB7XG4gICAgb3ZlcmxheTEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG92ZXJsYXkyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcihnYW1lUmVzdWx0KSB7XG4gIGNvbnN0IG1lc3NhZ2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLXNlY3Rpb25cIik7XG4gIGxldCB3aW5uaW5nTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgaWYgKGdhbWVSZXN1bHQgPT09IFwicGxheWVyIDEgd2luc1wiKSB7XG4gICAgd2lubmluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIllPVSBXSU5cIik7XG4gIH0gZWxzZSBpZiAoZ2FtZVJlc3VsdCA9PT0gXCJwbGF5ZXIgMiB3aW5zXCIpIHtcbiAgICB3aW5uaW5nTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWU9VIExPU0VcIik7XG4gIH1cbiAgbWVzc2FnZVNlY3Rpb24uYXBwZW5kQ2hpbGQod2lubmluZ01lc3NhZ2UpO1xufVxuXG5leHBvcnQge1xuICBnYW1lQnVpbGRlcixcbiAgZGlzcGxheVBsYXllclNoaXBzLFxuICBkaXNwbGF5TWlzcyxcbiAgZGlzcGxheUhpdCxcbiAgcmVtb3ZlU2hpcExpZmVCbG9jayxcbiAgaGlkZU5vbkFjdGl2ZVBsYXllckJvYXJkLFxuICBkaXNwbGF5V2lubmVyLFxufTtcbiIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBuYW1lKSB7XG4gIGxldCBoaXRzVGFrZW4gPSAwO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXRzVGFrZW4rKztcbiAgICB9LFxuICAgIGlzU3VuazogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGhpdHNUYWtlbiA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIEdhbWVCb2FyZChcbiAgY2FycmllckNvb3JkaW5hdGVzLFxuICBiYXR0bGVzaGlwQ29vcmRpbmF0ZXMsXG4gIGNydWlzZXJDb29yZGluYXRlcyxcbiAgc3VibWFyaW5lQ29vcmRpbmF0ZXMsXG4gIHBhdHJvbEJvYXRDb29yZGluYXRlc1xuKSB7XG4gIC8vIENyZWF0ZSBib2FyZFxuICBjb25zdCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSBcImVtcHR5XCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAmJiBpIDwgNTsgaSsrKSB7XG4gICAgc2hpcENvb3JkaW5hdGVzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgXCJjYXJyaWVyXCIsXG4gICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgXCJjcnVpc2VyXCIsXG4gICAgXCJzdWJtYXJpbmVcIixcbiAgICBcInBhdHJvbEJvYXRcIixcbiAgXTtcblxuICAvLyBOZWVkIHRvIHRha2UgY29vcmRpbmF0ZXMgb2Ygc2hpcHMsIGFuZCByZXBsYWNlIFwiZW1wdHlcIiB2YWx1ZXMgaW4gYm9hcmQgd2l0aCBhcHByb3ByaWF0ZSBzaGlwIG5hbWVzIGZvciBlYWNoIHNoaXAgY29vcmRpbmF0ZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBDb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgLy8gVXNlIHJlZ2V4IHRvIGV4dHJhY3QgeCBhbmQgeSBjb29yZGluYXRlcyBhbmQgc2hpcCBuYW1lXG4gICAgICBjb25zdCByZWdleDEgPSAvW0EtSl0vaTtcbiAgICAgIGNvbnN0IHJlZ2V4MiA9IC9bMS05XVxcZCovO1xuICAgICAgLy8gQ29udmVydCB4IGNvb3JkaW5hdGUgdG8gYW4gYXNjaWkgbnVtYmVyIGFuZCBjb252ZXJ0IHRoYXQgdG8gYSBudW1iZXIgZnJvbSAwIHRvIDlcbiAgICAgIC8vIENvbnZlcnQgeSBjb29yZGluYXRlIHRvIGEgbnVtYmVyIGZyb20gMCB0byA5XG4gICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9XG4gICAgICAgIHNoaXBDb29yZGluYXRlc1tpXVtqXS5tYXRjaChyZWdleDEpWzBdLmNoYXJDb2RlQXQoMCkgLSA2NTtcbiAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gc2hpcENvb3JkaW5hdGVzW2ldW2pdLm1hdGNoKHJlZ2V4MilbMF0gLSAxO1xuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwTmFtZXNbaV07XG4gICAgICAvLyBSZXBsYWNlIFwiZW1wdHlcIiB2YWx1ZSBpbiBib2FyZCBjb29yZGluYXRlIHdpdGggc2hpcCBuYW1lXG4gICAgICBib2FyZFt4Q29vcmRpbmF0ZV1beUNvb3JkaW5hdGVdID0gc2hpcE5hbWU7XG4gICAgfVxuICB9XG4gIC8vIENyZWF0ZSBzaGlwIG9iamVjdHNcbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgXCJjYXJyaWVyXCIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBcImJhdHRsZXNoaXBcIik7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKDMsIFwiY3J1aXNlclwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMiwgXCJwYXRyb2xCb2F0XCIpO1xuXG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IGNhcnJpZXIsXG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcCxcbiAgICBjcnVpc2VyOiBjcnVpc2VyLFxuICAgIHN1Ym1hcmluZTogc3VibWFyaW5lLFxuICAgIHBhdHJvbEJvYXQ6IHBhdHJvbEJvYXQsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSBhcnJheSB0byBjb250YWluIHJldHVybiB2YWx1ZXMgKGF0dGFjayBzdGF0dXMgYW5kIGhpdCBzaGlwKVxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAvLyBDb252ZXJ0IHggYW5kIHkgY29vcmRpbmF0ZXMgdG8gbnVtYmVycyBmb3IgYm9hcmQgYXJyYXlcbiAgICAgIGNvbnN0IHJlZ2V4MSA9IC9bQS1KXS9pO1xuICAgICAgY29uc3QgcmVnZXgyID0gL1sxLTldXFxkKi87XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZS5tYXRjaChyZWdleDEpWzBdLmNoYXJDb2RlQXQoMCkgLSA2NTtcbiAgICAgIGNvbnN0IHkgPSBjb29yZGluYXRlLm1hdGNoKHJlZ2V4MilbMF0gLSAxO1xuXG4gICAgICBpZiAoYm9hcmRbeF1beV0gPT09IFwiZW1wdHlcIikge1xuICAgICAgICBib2FyZFt4XVt5XSA9IFwibWlzc1wiO1xuICAgICAgICByZXN1bHQucHVzaChcIm1pc3NcIik7XG4gICAgICAgIHJlc3VsdC5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XSAhPT0gXCJtaXNzXCIgJiYgYm9hcmRbeF1beV0gIT09IFwiaGl0XCIpIHtcbiAgICAgICAgLy8gRXhlY3V0ZSBhdHRhY2sgb24gc2hpcFxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hpcHNbc2hpcE5hbWVdLmhpdCgpO1xuICAgICAgICAgIC8vIFJlcGxhY2UgaGl0IHNoaXAgaW4gYm9hcmQgd2l0aCBcImhpdFwiXG4gICAgICAgICAgYm9hcmRbeF1beV0gPSBcImhpdFwiO1xuICAgICAgICAgIGlmIChzaGlwc1tzaGlwTmFtZV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwic2lua1wiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNoaXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiaGl0XCIpO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHNoaXBOYW1lKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhcmVTaGlwc1N1bms6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgaWYgKHNoaXBzW3NoaXBdLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gUGxheWVyKHBsYXllclR5cGUpIHtcbiAgbGV0IHR1cm4gPSBmYWxzZTtcblxuICAvLyBBSSBib2FyZCBhY2Nlc3NcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IHggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSk7XG4gICAgICBjb25zdCB5ID0gaiArIDE7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0geCArIHk7XG4gICAgICBib2FyZFtpXVtqXSA9IGNvb3JkaW5hdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gQUkgbGlzdCBvZiBsZWdhbCBtb3Zlc1xuICBjb25zdCBsZWdhbE1vdmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGVnYWxNb3Zlcy5wdXNoKGJvYXJkW2ldW2pdKTtcbiAgICB9XG4gIH1cblxuICAvLyBBSSB0cmlhbmd1bGF0aW9uIGFycmF5IChzdWNjZXNzZnVsIGhpdHMgYXJlIHJlY29yZGVkXG4gIC8vIHVudGlsIHNoaXAgaXMgZGVzdHJveWVkLiBUaGVuIHRoZXkgYXJlIGZvcmdvdHRlbilcbiAgY29uc3QgdGFyZ2V0ZWRTaGlwID0gW107XG5cbiAgLy8gQUkgcmVjb3JkcyBhdHRhY2tlZCBjb29yZGluYXRlLCB3aGljaCB3aWxsIGJlIHVzZWQgaWYgdGhlIGhpdCBpcyBhIHN1Y2Nlc3NcbiAgbGV0IGxhc3RBdHRhY2s7XG5cbiAgbGV0IGF0dGFjaztcbiAgbGV0IHJlY2VpdmVBdHRhY2tJbmZvID0gdW5kZWZpbmVkO1xuXG4gIGlmIChwbGF5ZXJUeXBlID09PSBcImh1bWFuXCIpIHtcbiAgICBhdHRhY2sgPSBmdW5jdGlvbiAoYXR0YWNrQ29vcmRpbmF0ZSkge1xuICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGU7XG4gICAgfTtcbiAgfVxuICAvLyAxLiBBSSBzaG91bGQgcmFuZG9tbHkgcHJvZHVjZSBhIGNvb3JkaW5hdGUgdG8gYXR0YWNrXG4gIC8vIDIuIEFJIHNob3VsZCByZWNvcmQgYWxsIHByZXZpb3VzIGhpdHMsIGFuZCBvbmx5IHByb2R1Y2UgYSBjb29yZGluYXRlIHRvIGF0dGFjayBiYXNlZCBvbiB0aGVcbiAgLy8gLi4gcmVtYWluaW5nIHNwYWNlc1xuICAvLyAzLiBBSSBzaG91bGQgcHJpb3JpdGl6ZSBhdHRhY2tpbmcgc3BhY2VzIGFkamFjZW50IHRvIHN1Y2Nlc3NmdWwgaGl0c1xuICBpZiAocGxheWVyVHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgYXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZSkge1xuICAgICAgaWYgKGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBhdHRhY2tDb29yZGluYXRlO1xuICAgICAgICAvLyBpZiB0YXJnZXRlZFNoaXAgYXJyYXkgbGVuZ3RoIGlzIDEsIGdldCBhIHJhbmRvbSBhZGphY2VudCBjb29yZGluYXRlIChtYXggNCBjaG9pY2VzKVxuICAgICAgICBpZiAodGFyZ2V0ZWRTaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgICBjb25zdCByZWdleDEgPSAvW0EtSl0vaTtcbiAgICAgICAgICBjb25zdCByZWdleDIgPSAvWzEtOV1cXGQqLztcbiAgICAgICAgICBjb25zdCB4ID0gdGFyZ2V0ZWRTaGlwWzBdLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgICAgIGNvbnN0IHkgPSB0YXJnZXRlZFNoaXBbMF0ubWF0Y2gocmVnZXgyKVswXSAtIDE7XG5cbiAgICAgICAgICAvLyBSZWNvcmQgYWxsIHBvc3NpYmxlIGFkamFjZW50IG1vdmVzXG4gICAgICAgICAgaWYgKGJvYXJkW3ggKyAxXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3ggKyAxXVt5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3ggKyAxXVt5XSk7XG4gICAgICAgICAgaWYgKGJvYXJkW3ggLSAxXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3ggLSAxXVt5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3ggLSAxXVt5XSk7XG4gICAgICAgICAgaWYgKGJvYXJkW3hdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeF1beSArIDFdICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeF1beSArIDFdKTtcbiAgICAgICAgICBpZiAoYm9hcmRbeF0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4XVt5IC0gMV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChib2FyZFt4XVt5IC0gMV0pO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHBvc3NpYmxlIGFkamFjZW50IG1vdmUgaWYgbm90IHBvc3NpYmxlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocG9zc2libGVNb3Zlc1tpXSA9PT0gdW5kZWZpbmVkKSBwb3NzaWJsZU1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGxldCBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgICBsZWdhbE1vdmVDaGVjazogZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbE1vdmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2ldID09PSBsZWdhbE1vdmVzW2pdKSB7XG4gICAgICAgICAgICAgICAgaXNMZWdhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWsgbGVnYWxNb3ZlQ2hlY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENob29zZSByYW5kb20gbW92ZSBmcm9tIGxpc3Qgb2YgcG9zc2libGUgbW92ZXNcbiAgICAgICAgICBhdHRhY2tDb29yZGluYXRlID1cbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXNbXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NzaWJsZU1vdmVzLmxlbmd0aCArIDEpKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0YXJnZXRlZFNoaXAgYXJyYXkgaXMgZ3JlYXRlciB0aGFuIDEsIGdldCBhIGNvb3JkaW5hdGUgb24gdGhlIHNhbWUgbGluZSBhcyB0aG9zZVxuICAgICAgICAvLyAuLiByZWNvcmRlZCBjb29yZGluYXRlcyBhbmQgaXMgYWRqYWNlbnQgdG8gZWl0aGVyIG9mIHRoZSByZWNvcmRlZCBjb29yZGluYXRlcyBpbiB0aGVcbiAgICAgICAgLy8gLi4gdGFyZ2V0ZWRTaGlwIGFycmF5XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldGVkU2hpcC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgcmVnZXgxID0gL1tBLUpdL2k7XG4gICAgICAgICAgY29uc3QgcmVnZXgyID0gL1sxLTldXFxkKi87XG4gICAgICAgICAgLy8gUmVjb3JkIGFsbCB0YXJnZXRlZCBzaGlwIGNvb3JkaW5hdGVzIGluIGFycmF5IGZvcm1cbiAgICAgICAgICBjb25zdCB4Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldGVkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeENvb3JkaW5hdGVzLnB1c2goXG4gICAgICAgICAgICAgIHRhcmdldGVkU2hpcFtpXS5tYXRjaChyZWdleDEpWzBdLmNoYXJDb2RlQXQoMCkgLSA2NVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHlDb29yZGluYXRlcy5wdXNoKHRhcmdldGVkU2hpcFtpXS5tYXRjaChyZWdleDIpWzBdIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEVzdGFibGlzaCBsaW5lIG9mIGF0dGFja1xuICAgICAgICAgIGNvbnN0IGFsbEVxdWFsID0gKGFycikgPT4gYXJyLmV2ZXJ5KCh2KSA9PiB2ID09PSBhcnJbMF0pO1xuICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlc0FsbEVxdWFsID0gYWxsRXF1YWwoeENvb3JkaW5hdGVzKTsgLy8gRWl0aGVyIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICBjb25zdCB5Q29vcmRpbmF0ZXNBbGxFcXVhbCA9IGFsbEVxdWFsKHlDb29yZGluYXRlcyk7IC8vIEVpdGhlciB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgLy8gUmVjb3JkIGFsbCBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldGVkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeCA9IHhDb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSB5Q29vcmRpbmF0ZXNbaV07XG4gICAgICAgICAgICBpZiAoeENvb3JkaW5hdGVzQWxsRXF1YWwpIHtcbiAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3hdW3kgKyAxXSk7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChib2FyZFt4XVt5IC0gMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh5Q29vcmRpbmF0ZXNBbGxFcXVhbCkge1xuICAgICAgICAgICAgICBpZiAoYm9hcmRbeCArIDFdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeCArIDFdW3ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3ggKyAxXVt5XSk7XG4gICAgICAgICAgICAgIGlmIChib2FyZFt4IC0gMV0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4IC0gMV1beV0pXG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3ggLSAxXVt5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlbW92ZSBwb3NzaWJsZSBhZGphY2VudCBtb3ZlIGlmIG5vdCBwb3NzaWJsZVxuICAgICAgICAgIGNvbnN0IGltcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaV0gPT09IHVuZGVmaW5lZCkgcG9zc2libGVNb3Zlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBsZXQgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgICAgbGVnYWxNb3ZlQ2hlY2s6IGZvciAobGV0IGogPSAwOyBqIDwgbGVnYWxNb3Zlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAocG9zc2libGVNb3Zlc1tpXSA9PT0gbGVnYWxNb3Zlc1tqXSkge1xuICAgICAgICAgICAgICAgIGlzTGVnYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrIGxlZ2FsTW92ZUNoZWNrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNMZWdhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaW1wb3NzaWJsZU1vdmVzLnB1c2gocG9zc2libGVNb3Zlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW1wb3NzaWJsZU1vdmVzLmluY2x1ZGVzKHBvc3NpYmxlTW92ZXNbaV0pKSB7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENob29zZSByYW5kb20gbW92ZSBmcm9tIGxpc3Qgb2YgcG9zc2libGUgbW92ZXNcbiAgICAgICAgICBhdHRhY2tDb29yZGluYXRlID1cbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlLCBnZXQgcmFuZG9tIGJsb2NrIGZyb20gbGVnYWxNb3ZlcyBhcnJheVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhdHRhY2tDb29yZGluYXRlID1cbiAgICAgICAgICAgIGxlZ2FsTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxNb3Zlcy5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgdGhhdCBjb29yZGluYXRlIGZyb20gbGVnYWxNb3ZlcyBhcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlZ2FsTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXR0YWNrQ29vcmRpbmF0ZSA9PT0gbGVnYWxNb3Zlc1tpXSkge1xuICAgICAgICAgICAgbGVnYWxNb3Zlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFzc2lnbiBsYXN0QXR0YWNrIHZhcmlhYmxlIHRoZSB2YWx1ZSBvZiB0aGUgdG8gYmUgYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICBsYXN0QXR0YWNrID0gYXR0YWNrQ29vcmRpbmF0ZTtcbiAgICAgICAgLy8gcmV0dXJuIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGU7XG4gICAgICB9IGVsc2UgaWYgKGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGF0IGNvb3JkaW5hdGUgZnJvbSBsZWdhbE1vdmVzIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVnYWxNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhdHRhY2tDb29yZGluYXRlT3ZlcnJpZGUgPT09IGxlZ2FsTW92ZXNbaV0pXG4gICAgICAgICAgICBsZWdhbE1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBc3NpZ24gbGFzdEF0dGFjayB2YXJpYWJsZSB0aGUgdmFsdWUgb2YgdGhlIHRvIGJlIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgICAgICAgbGFzdEF0dGFjayA9IGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZTtcbiAgICAgICAgLy8gcmV0dXJuIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlY2VpdmVBdHRhY2tJbmZvID0gZnVuY3Rpb24gKHJlY2VpdmVkU3RhdHVzKSB7XG4gICAgICBpZiAocmVjZWl2ZWRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgdGFyZ2V0ZWRTaGlwLnB1c2gobGFzdEF0dGFjayk7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZWRTdGF0dXMgPT09IFwic2lua1wiKSB7XG4gICAgICAgIHRhcmdldGVkU2hpcC5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRUdXJuOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHVybjtcbiAgICB9LFxuICAgIHNldFR1cm46IGZ1bmN0aW9uIChib29sZWFuVmFsdWUpIHtcbiAgICAgIHR1cm4gPSBib29sZWFuVmFsdWU7XG4gICAgfSxcbiAgICBhdHRhY2s6IGF0dGFjayxcbiAgICByZWNlaXZlQXR0YWNrSW5mbzogcmVjZWl2ZUF0dGFja0luZm8sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZVNoaXBQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IGJvYXJkU2l6ZSA9IDEwOyAvLyBUaGUgc2l6ZSBvZiB0aGUgYmF0dGxlc2hpcCBib2FyZFxuICBjb25zdCBzaGlwU2l6ZXMgPSBbNSwgNCwgMywgMywgMl07IC8vIFRoZSBzaXplcyBvZiB0aGUgc2hpcHMgdGhhdCBuZWVkIHRvIGJlIHBsYWNlZFxuICBjb25zdCBib2FyZCA9IEFycmF5KGJvYXJkU2l6ZSlcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpOyAvLyBJbml0aWFsaXplIHRoZSBib2FyZCB3aXRoIG51bGwgdmFsdWVzXG4gIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSBbXTtcbiAgY29uc3QgY2FycmllckNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IGJhdHRsZXNoaXBDb29yZGluYXRlID0gW107XG4gIGNvbnN0IGNydWlzZXJDb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCBzdWJtYXJpbmVDb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCBwYXRyb2xCb2F0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgc2hpcFBvc2l0aW9ucy5wdXNoKGNhcnJpZXJDb29yZGluYXRlcyk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChiYXR0bGVzaGlwQ29vcmRpbmF0ZSk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChjcnVpc2VyQ29vcmRpbmF0ZXMpO1xuICBzaGlwUG9zaXRpb25zLnB1c2goc3VibWFyaW5lQ29vcmRpbmF0ZXMpO1xuICBzaGlwUG9zaXRpb25zLnB1c2gocGF0cm9sQm9hdENvb3JkaW5hdGVzKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwU2l6ZSA9IHNoaXBTaXplc1tpXTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgLy8gMCA9IGhvcml6b250YWwsIDEgPSB2ZXJ0aWNhbFxuXG4gICAgbGV0IHJvdywgY29sO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChib2FyZFNpemUgLSBzaGlwU2l6ZSArIDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdmVydGljYWxcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChib2FyZFNpemUgLSBzaGlwU2l6ZSArIDEpKTtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgZml0cyBpbiB0aGUgY2hvc2VuIHBvc2l0aW9uXG4gICAgbGV0IHZhbGlkUG9zaXRpb24gPSB0cnVlO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcFNpemU7IGorKykge1xuICAgICAgaWYgKFxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gMCAmJlxuICAgICAgICBib2FyZFtyb3ddW2NvbCArIGpdICE9PSBudWxsIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYWxyZWFkeSBhIHNoaXAgaW4gdGhlIHdheVxuICAgICAgKSB7XG4gICAgICAgIHZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gMSAmJlxuICAgICAgICBib2FyZFtyb3cgKyBqXVtjb2xdICE9PSBudWxsIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYWxyZWFkeSBhIHNoaXAgaW4gdGhlIHdheVxuICAgICAgKSB7XG4gICAgICAgIHZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHBvc2l0aW9uIGlzIHZhbGlkLCBwbGFjZSB0aGUgc2hpcCBvbiB0aGUgYm9hcmRcbiAgICBpZiAodmFsaWRQb3NpdGlvbikge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwU2l6ZTsgaisrKSB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgal0gPSBpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvYXJkW3JvdyArIGpdW2NvbF0gPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZSBwb3NpdGlvbiBpcyBub3QgdmFsaWQsIHRyeSBhZ2FpbiB3aXRoIHRoaXMgc2hpcFxuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZXJhdGUgdGhyb3VnaCB0aGUgYm9hcmQgYW5kIGV4dHJhY3QgdGhlIHNoaXAgcG9zaXRpb25zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KTtcbiAgICAgICAgY29uc3QgeSA9IGogKyAxO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0geCArIHk7XG4gICAgICAgIHNoaXBQb3NpdGlvbnNbYm9hcmRbaV1bal1dLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNoaXBQb3NpdGlvbnM7XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVCb2FyZCwgUGxheWVyLCByYW5kb21pemVTaGlwUG9zaXRpb25zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVCb2FyZCwgUGxheWVyLCByYW5kb21pemVTaGlwUG9zaXRpb25zIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcbmltcG9ydCB7XG4gIGdhbWVCdWlsZGVyLFxuICBkaXNwbGF5UGxheWVyU2hpcHMsXG4gIGRpc3BsYXlNaXNzLFxuICBkaXNwbGF5SGl0LFxuICByZW1vdmVTaGlwTGlmZUJsb2NrLFxuICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQsXG4gIGRpc3BsYXlXaW5uZXIsXG59IGZyb20gXCIuL2RvbS1tYW5pcHVsYXRpb25cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBnYW1lQnVpbGRlcigpO1xuXG4gIC8vIEluaXRpYWxpemUgaHVtYW4gcGxheWVyIGFuZCBjb21wdXRlciBwbGF5ZXIuIE1ha2UgaHVtYW4gcGxheWVyIHN0YXJ0IGZpcnN0XG4gIGNvbnN0IGh1bWFuID0gUGxheWVyKFwiaHVtYW5cIik7XG4gIGh1bWFuLnNldFR1cm4odHJ1ZSk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gIGNvbXB1dGVyLnNldFR1cm4oZmFsc2UpO1xuXG4gIC8vIFJhbmRvbWl6ZSBzaGlwIHBvc2l0aW9ucyBmb3IgZWFjaCBib2FyZFxuICBjb25zdCBnYW1lQm9hcmQxID0gcmFuZG9taXplU2hpcFBvc2l0aW9ucygpO1xuICBjb25zdCBnYW1lQm9hcmQyID0gcmFuZG9taXplU2hpcFBvc2l0aW9ucygpO1xuXG4gIC8vIEluaXRpYWxpemUgaHVtYW4gYm9hcmQgYW5kIGNvbXB1dGVyIGJvYXJkXG4gIGNvbnN0IGNhcnJpZXJDb29yZGluYXRlc0h1bWFuID0gZ2FtZUJvYXJkMVswXTtcbiAgY29uc3QgYmF0dGxlc2hpcENvb3JkaW5hdGVzSHVtYW4gPSBnYW1lQm9hcmQxWzFdO1xuICBjb25zdCBjcnVpc2VyQ29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbMl07XG4gIGNvbnN0IHN1Ym1hcmluZUNvb3JkaW5hdGVzSHVtYW4gPSBnYW1lQm9hcmQxWzNdO1xuICBjb25zdCBwYXRyb2xCb2F0Q29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbNF07XG5cbiAgY29uc3QgY2FycmllckNvb3JkaW5hdGVzQ29tcHV0ZXIgPSBnYW1lQm9hcmQyWzBdO1xuICBjb25zdCBiYXR0bGVzaGlwQ29vcmRpbmF0ZXNDb21wdXRlciA9IGdhbWVCb2FyZDJbMV07XG4gIGNvbnN0IGNydWlzZXJDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMlsyXTtcbiAgY29uc3Qgc3VibWFyaW5lQ29vcmRpbmF0ZXNDb21wdXRlciA9IGdhbWVCb2FyZDJbM107XG4gIGNvbnN0IHBhdHJvbEJvYXRDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMls0XTtcblxuICBjb25zdCBodW1hbkdhbWVCb2FyZCA9IEdhbWVCb2FyZChcbiAgICBjYXJyaWVyQ29vcmRpbmF0ZXNIdW1hbixcbiAgICBiYXR0bGVzaGlwQ29vcmRpbmF0ZXNIdW1hbixcbiAgICBjcnVpc2VyQ29vcmRpbmF0ZXNIdW1hbixcbiAgICBzdWJtYXJpbmVDb29yZGluYXRlc0h1bWFuLFxuICAgIHBhdHJvbEJvYXRDb29yZGluYXRlc0h1bWFuXG4gICk7XG5cbiAgZGlzcGxheVBsYXllclNoaXBzKFxuICAgIGNhcnJpZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIGJhdHRsZXNoaXBDb29yZGluYXRlc0h1bWFuLFxuICAgIGNydWlzZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIHN1Ym1hcmluZUNvb3JkaW5hdGVzSHVtYW4sXG4gICAgcGF0cm9sQm9hdENvb3JkaW5hdGVzSHVtYW5cbiAgKTtcblxuICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IEdhbWVCb2FyZChcbiAgICBjYXJyaWVyQ29vcmRpbmF0ZXNDb21wdXRlcixcbiAgICBiYXR0bGVzaGlwQ29vcmRpbmF0ZXNDb21wdXRlcixcbiAgICBjcnVpc2VyQ29vcmRpbmF0ZXNDb21wdXRlcixcbiAgICBzdWJtYXJpbmVDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIHBhdHJvbEJvYXRDb29yZGluYXRlc0NvbXB1dGVyXG4gICk7XG5cbiAgLy8gQ3JlYXRlIGFycmF5IG9mIGVuZW15IGJvYXJkIGJsb2NrcyB3aXRoIGV2ZW50IGxpc3RlbmVycyBhbmQgcmV0dXJuIHRoYXQgYXJyYXlcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci0yLWJvYXJkXCIpO1xuICBjb25zdCBjbGlja2VkQmxvY2tzID0gW107XG4gIGNvbnN0IHByb21pc2VzID0gW107XG5cbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGJsb2NrID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhcImJsb2NrXCIpICYmXG4gICAgICAhY2xpY2tlZEJsb2Nrcy5pbmNsdWRlcyhibG9jay5jbGFzc0xpc3RbMV0pXG4gICAgKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGJsb2NrLmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICByZXNvbHZlKGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgY2xpY2tlZEJsb2Nrcy5wdXNoKGluZGV4KTtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICB9KTtcblxuICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQoaHVtYW4uZ2V0VHVybigpLCBjb21wdXRlci5nZXRUdXJuKCkpO1xuXG4gIC8vIEJlZ2lubmluZyBvZiBnYW1lIGxvb3BcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTsgLy8gd2FpdCBmb3IgcHJvbWlzZXMgdG8gYmUgYWRkZWRcbiAgICAgIGNvbnRpbnVlOyAvLyBzdGFydCB0aGUgd2hpbGUgbG9vcCBhZ2FpblxuICAgIH1cbiAgICAvLyBIdW1hbiBhdHRhY2tcbiAgICBjb25zdCBodW1hbkF0dGFjayA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgcHJvbWlzZXMubGVuZ3RoID0gMDtcblxuICAgIGNvbnN0IGh1bWFuQXR0YWNrQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCNwbGF5ZXItMi1ib2FyZCA+IC4ke2h1bWFuQXR0YWNrfWBcbiAgICApO1xuXG4gICAgLy8gZG8gc3R1ZmYgd2l0aCBodW1hbiBhdHRhY2tcbiAgICBjb25zdCBodW1hbkF0dGFja1Jlc3VsdCA9IGNvbXB1dGVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaHVtYW5BdHRhY2spOyAvLyBzaG91bGQgcmV0dXJuIGhpdCBzdGF0dXMgYW5kIHNoaXAgaGl0XG4gICAgaWYgKGh1bWFuQXR0YWNrUmVzdWx0WzBdID09PSBcIm1pc3NcIikge1xuICAgICAgaHVtYW4uc2V0VHVybihmYWxzZSk7XG4gICAgICBjb21wdXRlci5zZXRUdXJuKHRydWUpO1xuICAgICAgZGlzcGxheU1pc3MoaHVtYW5BdHRhY2tCbG9jayk7XG4gICAgICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQoaHVtYW4uZ2V0VHVybigpLCBjb21wdXRlci5nZXRUdXJuKCkpO1xuICAgIH1cblxuICAgIGlmIChodW1hbkF0dGFja1Jlc3VsdFswXSA9PT0gXCJoaXRcIiB8fCBodW1hbkF0dGFja1Jlc3VsdFswXSA9PT0gXCJzaW5rXCIpIHtcbiAgICAgIGNvbnN0IHNoaXBCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgI3BsYXllci0yLXNoaXBzID4gLiR7aHVtYW5BdHRhY2tSZXN1bHRbMV19YFxuICAgICAgKTtcblxuICAgICAgcmVtb3ZlU2hpcExpZmVCbG9jayhzaGlwQmxvY2tzKTtcbiAgICAgIGRpc3BsYXlIaXQoaHVtYW5BdHRhY2tCbG9jayk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXB1dGVyR2FtZUJvYXJkLmFyZVNoaXBzU3VuaygpKSB7XG4gICAgICBkaXNwbGF5V2lubmVyKFwicGxheWVyIDEgd2luc1wiKTtcbiAgICAgIHJldHVybjsgLy8gRXNjYXBlIGdhbWUgbG9vcFxuICAgIH1cblxuICAgIC8vIENvbXB1dGVyIGF0dGFja1xuICAgIGlmIChjb21wdXRlci5nZXRUdXJuKCkgJiYgIWh1bWFuLmdldFR1cm4oKSkge1xuICAgICAgbGV0IGNvbXB1dGVyUGxheUFnYWluID0gdHJ1ZTtcbiAgICAgIGRvIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7IC8vIGFkZCBhIGRlbGF5IG9mIDEgc2Vjb25kXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gY29tcHV0ZXIuYXR0YWNrKCk7XG4gICAgICAgIGlmIChjb21wdXRlckF0dGFjaykge1xuICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrUmVzdWx0ID1cbiAgICAgICAgICAgIGh1bWFuR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJBdHRhY2spOyAvLyBzaG91bGQgcmV0dXJuIGhpdCBzdGF0dXMgYW5kIHNoaXAgaGl0XG4gICAgICAgICAgY29tcHV0ZXIucmVjZWl2ZUF0dGFja0luZm8oY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0pO1xuXG4gICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2tCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgI3BsYXllci0xLWJvYXJkID4gLiR7Y29tcHV0ZXJBdHRhY2t9YFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBodW1hbi5zZXRUdXJuKHRydWUpO1xuICAgICAgICAgICAgY29tcHV0ZXIuc2V0VHVybihmYWxzZSk7XG4gICAgICAgICAgICBkaXNwbGF5TWlzcyhjb21wdXRlckF0dGFja0Jsb2NrKTtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpOyAvLyBhZGQgYSBkZWxheSBvZiAxIHNlY29uZFxuICAgICAgICAgICAgaGlkZU5vbkFjdGl2ZVBsYXllckJvYXJkKGh1bWFuLmdldFR1cm4oKSwgY29tcHV0ZXIuZ2V0VHVybigpKTtcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheUFnYWluID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0gPT09IFwiaGl0XCIgfHxcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrUmVzdWx0WzBdID09PSBcInNpbmtcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAjcGxheWVyLTEtc2hpcHMgPiAuJHtjb21wdXRlckF0dGFja1Jlc3VsdFsxXX1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZW1vdmVTaGlwTGlmZUJsb2NrKHNoaXBCbG9ja3MpO1xuICAgICAgICAgICAgZGlzcGxheUhpdChjb21wdXRlckF0dGFja0Jsb2NrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaHVtYW5HYW1lQm9hcmQuYXJlU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGRpc3BsYXlXaW5uZXIoXCJwbGF5ZXIgMiB3aW5zXCIpO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBFc2NhcGUgZ2FtZSBsb29wXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChjb21wdXRlclBsYXlBZ2FpbiA9PT0gdHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cbmdhbWVMb29wKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=