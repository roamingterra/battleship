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
  // const messageSectionTxt = document.createTextNode("YOU WIN");
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
    "With the help from © The Odin Project 2022"
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
  // messageSection.appendChild(messageSectionTxt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsb0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUUsMkVBQXdCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBVztBQUNqQixNQUFNLDJFQUF3QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDs7QUFFQSxNQUFNLHNFQUFtQjtBQUN6QixNQUFNLDZEQUFVO0FBQ2hCOztBQUVBO0FBQ0EsTUFBTSxnRUFBYTtBQUNuQixjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBVztBQUN2QixzRUFBc0U7QUFDdEUsWUFBWSwyRUFBd0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdCQUF3QjtBQUM1RDs7QUFFQSxZQUFZLHNFQUFtQjtBQUMvQixZQUFZLDZEQUFVO0FBQ3RCOztBQUVBO0FBQ0EsWUFBWSxnRUFBYTtBQUN6QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTE1cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI21lc3NhZ2Utc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2dhbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG59XFxuXFxuI3BsYXllci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNTI1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jb3ZlcmxheS0xLFxcbiNvdmVybGF5LTIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3BsYXllci0xLXNoaXBzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDIycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuI3BsYXllci0yLXNoaXBzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDIycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBvcmRlcjogMjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubGlmZS1ibG9jayB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQ0YmY7XFxufVxcblxcbiNwbGF5ZXItMS1ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI4cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI4cHgpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI3BsYXllci0yLWJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjhweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMjhweCk7XFxuICBvcmRlcjogMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb2x1bW4tbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ibG9jayB7XFxuICBib3JkZXI6IHNvbGlkICNiNWY3ZWE7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogRm9yIHN3aXRjaGluZyB0aGUgb3JkZXIgb2YgcGxheWVyIDIgYm9hcmQgYW5kIHBsYXllciAyIHNoaXBzIHdoZW4gd3JhcHBpbmcgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ5cHgpIHtcXG4gICNwbGF5ZXItMi1zaGlwcyB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgI3BsYXllci0yLWJvYXJkIHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAjcGxheWVyLXdyYXBwZXIge1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFxQztBQUN2Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBLCtFQUErRTtBQUMvRTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoLi9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTVweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jbWVzc2FnZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZ2FtZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4jcGxheWVyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLXdpZHRoOiA1MjVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNvdmVybGF5LTEsXFxuI292ZXJsYXktMiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jcGxheWVyLTEtc2hpcHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMjJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jcGxheWVyLTItc2hpcHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMjJweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG9yZGVyOiAyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLnNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5saWZlLWJsb2NrIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXG59XFxuXFxuI3BsYXllci0xLWJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjhweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMjhweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jcGxheWVyLTItYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyOHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyOHB4KTtcXG4gIG9yZGVyOiAxO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbHVtbi1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdy1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGJvcmRlcjogc29saWQgI2I1ZjdlYTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBGb3Igc3dpdGNoaW5nIHRoZSBvcmRlciBvZiBwbGF5ZXIgMiBib2FyZCBhbmQgcGxheWVyIDIgc2hpcHMgd2hlbiB3cmFwcGluZyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDlweCkge1xcbiAgI3BsYXllci0yLXNoaXBzIHtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxuICAjcGxheWVyLTItYm9hcmQge1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICNwbGF5ZXItd3JhcHBlciB7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZ2FtZUJ1aWxkZXIoKSB7XG4gIC8vIERlY2xhcmUgZWxlbWVudHNcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGhlYWRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQmF0dGxlc2hpcFwiKTtcbiAgY29uc3QgbWVzc2FnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBjb25zdCBtZXNzYWdlU2VjdGlvblR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWU9VIFdJTlwiKTtcbiAgY29uc3QgZ2FtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcldyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3ZlcmxheTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxTGlmZUJsb2NrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxTGlmZUJsb2NrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDFMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDFMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDFMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDFMaWZlQmxvY2s0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMUxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMUxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMUxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMUxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUxTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTFMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MUxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MUxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVtcHR5U3BhY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJBUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJCUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQ1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJDUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ1wiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJEUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRFwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJFUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJGUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyR1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJHUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR1wiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJIUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSFwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJJUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSVwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJKUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMVwiKTtcbiAgY29uc3QgYmxvY2tBMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjJQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIyXCIpO1xuICBjb25zdCBibG9ja0EyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyM1BsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjNcIik7XG4gIGNvbnN0IGJsb2NrQTNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI0UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNFwiKTtcbiAgY29uc3QgYmxvY2tBNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjVQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI1XCIpO1xuICBjb25zdCBibG9ja0E1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNlBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjZcIik7XG4gIGNvbnN0IGJsb2NrQTZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI3UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiN1wiKTtcbiAgY29uc3QgYmxvY2tBN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjhQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI4XCIpO1xuICBjb25zdCBibG9ja0E4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRThQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjlcIik7XG4gIGNvbnN0IGJsb2NrQTlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMTBQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIxMFwiKTtcbiAgY29uc3QgYmxvY2tBMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMTBQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXJXcmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG92ZXJsYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZW1wdHlTcGFjZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJBUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckFQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJCUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckJQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJDUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckNQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJEUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckRQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJFUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckVQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJFXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJGUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckZQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJHUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckdQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJIUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckhQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJJUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlcklQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJKUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckpQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJKXCIpO1xuICBjb25zdCByb3dOdW1iZXIxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjFQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIxXCIpO1xuICBjb25zdCBibG9ja0ExUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMlBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjJcIik7XG4gIGNvbnN0IGJsb2NrQTJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIzUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiM1wiKTtcbiAgY29uc3QgYmxvY2tBM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjRQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI0XCIpO1xuICBjb25zdCBibG9ja0E0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjVcIik7XG4gIGNvbnN0IGJsb2NrQTVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI2UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNlwiKTtcbiAgY29uc3QgYmxvY2tBNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjdQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI3XCIpO1xuICBjb25zdCBibG9ja0E3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOFBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjhcIik7XG4gIGNvbnN0IGJsb2NrQThQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI5UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiOVwiKTtcbiAgY29uc3QgYmxvY2tBOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxMFBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjEwXCIpO1xuICBjb25zdCBibG9ja0ExMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oxMFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcjJTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjJMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjJMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjJMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjJMaWZlQmxvY2s0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjJMaWZlQmxvY2s1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMkxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMkxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMkxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMkxpZmVCbG9jazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIyTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIyTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIyTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUyTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTJMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMkxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQyTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQyTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3JlZGl0c0xpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3JlZGl0c0xpbmUxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJXZWJzaXRlIGNyZWF0ZWQgYnkgRGFuaWVsIEJhbGxlcmluaVwiXG4gICk7XG4gIGNvbnN0IGNyZWRpdHNMaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNyZWRpdHNMaW5lMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiV2l0aCB0aGUgaGVscCBmcm9tIMKpIFRoZSBPZGluIFByb2plY3QgMjAyMlwiXG4gICk7XG5cbiAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIG1lc3NhZ2VTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZS1zZWN0aW9uXCIpO1xuICBnYW1lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtc2VjdGlvblwiKTtcbiAgcGxheWVyV3JhcHBlcjEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItd3JhcHBlclwiKTtcbiAgb3ZlcmxheTEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5LTFcIik7XG5cbiAgcGxheWVyMVNoaXBzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTEtc2hpcHNcIik7XG4gIGNhcnJpZXIxLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIsIFwic2hpcFwiKTtcbiAgY2FycmllcjFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIxTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjFMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMUxpZmVCbG9jazUuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAxLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIsIFwic2hpcFwiKTtcbiAgYmF0dGxlc2hpcDFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAxTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDFMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMS5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlclwiLCBcInNoaXBcIik7XG4gIGNydWlzZXIxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY3J1aXNlcjFMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTEuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiLCBcInNoaXBcIik7XG4gIHN1Ym1hcmluZTFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUxTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHBhdHJvbEJvYXQxLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2xCb2F0XCIsIFwic2hpcFwiKTtcbiAgcGF0cm9sQm9hdDFMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBwYXRyb2xCb2F0MUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG5cbiAgcGxheWVyMUJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTEtYm9hcmRcIik7XG4gIGVtcHR5U3BhY2UxLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1zcGFjZVwiKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIHJvd051bWJlcjFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0ExUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMVwiKTtcbiAgYmxvY2tCMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjFcIik7XG4gIGJsb2NrQzFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxXCIpO1xuICBibG9ja0QxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMVwiKTtcbiAgYmxvY2tFMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTFcIik7XG4gIGJsb2NrRjFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxXCIpO1xuICBibG9ja0cxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMVwiKTtcbiAgYmxvY2tIMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDFcIik7XG4gIGJsb2NrSTFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxXCIpO1xuICBibG9ja0oxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMVwiKTtcbiAgcm93TnVtYmVyMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEyXCIpO1xuICBibG9ja0IyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMlwiKTtcbiAgYmxvY2tDMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzJcIik7XG4gIGJsb2NrRDJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQyXCIpO1xuICBibG9ja0UyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMlwiKTtcbiAgYmxvY2tGMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjJcIik7XG4gIGJsb2NrRzJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcyXCIpO1xuICBibG9ja0gyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMlwiKTtcbiAgYmxvY2tJMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTJcIik7XG4gIGJsb2NrSjJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoyXCIpO1xuICByb3dOdW1iZXIzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTNcIik7XG4gIGJsb2NrQjNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIzXCIpO1xuICBibG9ja0MzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDM1wiKTtcbiAgYmxvY2tEM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDNcIik7XG4gIGJsb2NrRTNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUzXCIpO1xuICBibG9ja0YzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGM1wiKTtcbiAgYmxvY2tHM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzNcIik7XG4gIGJsb2NrSDNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgzXCIpO1xuICBibG9ja0kzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJM1wiKTtcbiAgYmxvY2tKM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjNcIik7XG4gIHJvd051bWJlcjRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNFwiKTtcbiAgYmxvY2tCNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjRcIik7XG4gIGJsb2NrQzRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM0XCIpO1xuICBibG9ja0Q0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENFwiKTtcbiAgYmxvY2tFNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTRcIik7XG4gIGJsb2NrRjRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY0XCIpO1xuICBibG9ja0c0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNFwiKTtcbiAgYmxvY2tINFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDRcIik7XG4gIGJsb2NrSTRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk0XCIpO1xuICBibG9ja0o0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNFwiKTtcbiAgcm93TnVtYmVyNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE1XCIpO1xuICBibG9ja0I1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNVwiKTtcbiAgYmxvY2tDNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzVcIik7XG4gIGJsb2NrRDVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ1XCIpO1xuICBibG9ja0U1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNVwiKTtcbiAgYmxvY2tGNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjVcIik7XG4gIGJsb2NrRzVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc1XCIpO1xuICBibG9ja0g1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINVwiKTtcbiAgYmxvY2tJNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTVcIik7XG4gIGJsb2NrSjVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko1XCIpO1xuICByb3dOdW1iZXI2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTZcIik7XG4gIGJsb2NrQjZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI2XCIpO1xuICBibG9ja0M2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNlwiKTtcbiAgYmxvY2tENlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDZcIik7XG4gIGJsb2NrRTZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU2XCIpO1xuICBibG9ja0Y2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNlwiKTtcbiAgYmxvY2tHNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzZcIik7XG4gIGJsb2NrSDZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg2XCIpO1xuICBibG9ja0k2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNlwiKTtcbiAgYmxvY2tKNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjZcIik7XG4gIHJvd051bWJlcjdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBN1wiKTtcbiAgYmxvY2tCN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjdcIik7XG4gIGJsb2NrQzdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM3XCIpO1xuICBibG9ja0Q3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEN1wiKTtcbiAgYmxvY2tFN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTdcIik7XG4gIGJsb2NrRjdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY3XCIpO1xuICBibG9ja0c3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHN1wiKTtcbiAgYmxvY2tIN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDdcIik7XG4gIGJsb2NrSTdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk3XCIpO1xuICBibG9ja0o3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKN1wiKTtcbiAgcm93TnVtYmVyOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQThQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE4XCIpO1xuICBibG9ja0I4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOFwiKTtcbiAgYmxvY2tDOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzhcIik7XG4gIGJsb2NrRDhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ4XCIpO1xuICBibG9ja0U4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOFwiKTtcbiAgYmxvY2tGOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjhcIik7XG4gIGJsb2NrRzhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc4XCIpO1xuICBibG9ja0g4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOFwiKTtcbiAgYmxvY2tJOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSThcIik7XG4gIGJsb2NrSjhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko4XCIpO1xuICByb3dOdW1iZXI5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTlcIik7XG4gIGJsb2NrQjlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI5XCIpO1xuICBibG9ja0M5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDOVwiKTtcbiAgYmxvY2tEOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDlcIik7XG4gIGJsb2NrRTlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU5XCIpO1xuICBibG9ja0Y5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGOVwiKTtcbiAgYmxvY2tHOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzlcIik7XG4gIGJsb2NrSDlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg5XCIpO1xuICBibG9ja0k5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJOVwiKTtcbiAgYmxvY2tKOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjlcIik7XG4gIHJvd051bWJlcjEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkExMFwiKTtcbiAgYmxvY2tCMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxMFwiKTtcbiAgYmxvY2tDMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxMFwiKTtcbiAgYmxvY2tEMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQxMFwiKTtcbiAgYmxvY2tFMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxMFwiKTtcbiAgYmxvY2tGMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxMFwiKTtcbiAgYmxvY2tHMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcxMFwiKTtcbiAgYmxvY2tIMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxMFwiKTtcbiAgYmxvY2tJMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxMFwiKTtcbiAgYmxvY2tKMTBQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoxMFwiKTtcblxuICBwbGF5ZXJXcmFwcGVyMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci13cmFwcGVyXCIpO1xuICBvdmVybGF5Mi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm92ZXJsYXktMlwiKTtcbiAgcGxheWVyMkJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTItYm9hcmRcIik7XG4gIGVtcHR5U3BhY2UyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1zcGFjZVwiKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIHJvd051bWJlcjFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0ExUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMVwiKTtcbiAgYmxvY2tCMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjFcIik7XG4gIGJsb2NrQzFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxXCIpO1xuICBibG9ja0QxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMVwiKTtcbiAgYmxvY2tFMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTFcIik7XG4gIGJsb2NrRjFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxXCIpO1xuICBibG9ja0cxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMVwiKTtcbiAgYmxvY2tIMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDFcIik7XG4gIGJsb2NrSTFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxXCIpO1xuICBibG9ja0oxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMVwiKTtcbiAgcm93TnVtYmVyMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEyXCIpO1xuICBibG9ja0IyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMlwiKTtcbiAgYmxvY2tDMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzJcIik7XG4gIGJsb2NrRDJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQyXCIpO1xuICBibG9ja0UyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMlwiKTtcbiAgYmxvY2tGMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjJcIik7XG4gIGJsb2NrRzJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcyXCIpO1xuICBibG9ja0gyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMlwiKTtcbiAgYmxvY2tJMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTJcIik7XG4gIGJsb2NrSjJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoyXCIpO1xuICByb3dOdW1iZXIzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTNcIik7XG4gIGJsb2NrQjNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIzXCIpO1xuICBibG9ja0MzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDM1wiKTtcbiAgYmxvY2tEM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDNcIik7XG4gIGJsb2NrRTNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUzXCIpO1xuICBibG9ja0YzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGM1wiKTtcbiAgYmxvY2tHM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzNcIik7XG4gIGJsb2NrSDNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgzXCIpO1xuICBibG9ja0kzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJM1wiKTtcbiAgYmxvY2tKM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjNcIik7XG4gIHJvd051bWJlcjRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNFwiKTtcbiAgYmxvY2tCNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjRcIik7XG4gIGJsb2NrQzRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM0XCIpO1xuICBibG9ja0Q0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENFwiKTtcbiAgYmxvY2tFNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTRcIik7XG4gIGJsb2NrRjRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY0XCIpO1xuICBibG9ja0c0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNFwiKTtcbiAgYmxvY2tINFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDRcIik7XG4gIGJsb2NrSTRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk0XCIpO1xuICBibG9ja0o0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNFwiKTtcbiAgcm93TnVtYmVyNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE1XCIpO1xuICBibG9ja0I1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNVwiKTtcbiAgYmxvY2tDNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzVcIik7XG4gIGJsb2NrRDVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ1XCIpO1xuICBibG9ja0U1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNVwiKTtcbiAgYmxvY2tGNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjVcIik7XG4gIGJsb2NrRzVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc1XCIpO1xuICBibG9ja0g1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINVwiKTtcbiAgYmxvY2tJNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTVcIik7XG4gIGJsb2NrSjVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko1XCIpO1xuICByb3dOdW1iZXI2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTZcIik7XG4gIGJsb2NrQjZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI2XCIpO1xuICBibG9ja0M2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNlwiKTtcbiAgYmxvY2tENlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDZcIik7XG4gIGJsb2NrRTZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU2XCIpO1xuICBibG9ja0Y2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNlwiKTtcbiAgYmxvY2tHNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzZcIik7XG4gIGJsb2NrSDZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg2XCIpO1xuICBibG9ja0k2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNlwiKTtcbiAgYmxvY2tKNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjZcIik7XG4gIHJvd051bWJlcjdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBN1wiKTtcbiAgYmxvY2tCN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjdcIik7XG4gIGJsb2NrQzdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM3XCIpO1xuICBibG9ja0Q3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEN1wiKTtcbiAgYmxvY2tFN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTdcIik7XG4gIGJsb2NrRjdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY3XCIpO1xuICBibG9ja0c3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHN1wiKTtcbiAgYmxvY2tIN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDdcIik7XG4gIGJsb2NrSTdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk3XCIpO1xuICBibG9ja0o3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKN1wiKTtcbiAgcm93TnVtYmVyOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQThQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE4XCIpO1xuICBibG9ja0I4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOFwiKTtcbiAgYmxvY2tDOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzhcIik7XG4gIGJsb2NrRDhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ4XCIpO1xuICBibG9ja0U4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOFwiKTtcbiAgYmxvY2tGOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjhcIik7XG4gIGJsb2NrRzhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc4XCIpO1xuICBibG9ja0g4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOFwiKTtcbiAgYmxvY2tJOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSThcIik7XG4gIGJsb2NrSjhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko4XCIpO1xuICByb3dOdW1iZXI5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTlcIik7XG4gIGJsb2NrQjlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI5XCIpO1xuICBibG9ja0M5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDOVwiKTtcbiAgYmxvY2tEOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDlcIik7XG4gIGJsb2NrRTlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU5XCIpO1xuICBibG9ja0Y5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGOVwiKTtcbiAgYmxvY2tHOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzlcIik7XG4gIGJsb2NrSDlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg5XCIpO1xuICBibG9ja0k5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJOVwiKTtcbiAgYmxvY2tKOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjlcIik7XG4gIHJvd051bWJlcjEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkExMFwiKTtcbiAgYmxvY2tCMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxMFwiKTtcbiAgYmxvY2tDMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMxMFwiKTtcbiAgYmxvY2tEMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQxMFwiKTtcbiAgYmxvY2tFMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxMFwiKTtcbiAgYmxvY2tGMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYxMFwiKTtcbiAgYmxvY2tHMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkcxMFwiKTtcbiAgYmxvY2tIMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxMFwiKTtcbiAgYmxvY2tJMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkxMFwiKTtcbiAgYmxvY2tKMTBQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkoxMFwiKTtcblxuICBwbGF5ZXIyU2hpcHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItMi1zaGlwc1wiKTtcbiAgY2FycmllcjIuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIiwgXCJzaGlwXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjJMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazQuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIyTGlmZUJsb2NrNS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDIuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIiwgXCJzaGlwXCIpO1xuICBiYXR0bGVzaGlwMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDJMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMkxpZmVCbG9jazQuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNydWlzZXIyLmNsYXNzTGlzdC5hZGQoXCJjcnVpc2VyXCIsIFwic2hpcFwiKTtcbiAgY3J1aXNlcjJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMkxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNydWlzZXIyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMi5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIsIFwic2hpcFwiKTtcbiAgc3VibWFyaW5lMkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTJMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgcGF0cm9sQm9hdDIuY2xhc3NMaXN0LmFkZChcInBhdHJvbEJvYXRcIiwgXCJzaGlwXCIpO1xuICBwYXRyb2xCb2F0MkxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHBhdHJvbEJvYXQyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcblxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGRvbVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySGVhZGVyKTtcbiAgaGVhZGVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclR4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU2VjdGlvbik7XG4gIC8vIG1lc3NhZ2VTZWN0aW9uLmFwcGVuZENoaWxkKG1lc3NhZ2VTZWN0aW9uVHh0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVTZWN0aW9uKTtcbiAgZ2FtZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyV3JhcHBlcjEpO1xuXG4gIHBsYXllcldyYXBwZXIxLmFwcGVuZENoaWxkKHBsYXllcjFTaGlwcyk7XG4gIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChjYXJyaWVyMSk7XG4gIGNhcnJpZXIxLmFwcGVuZENoaWxkKGNhcnJpZXIxTGlmZUJsb2NrMSk7XG4gIGNhcnJpZXIxLmFwcGVuZENoaWxkKGNhcnJpZXIxTGlmZUJsb2NrMik7XG4gIGNhcnJpZXIxLmFwcGVuZENoaWxkKGNhcnJpZXIxTGlmZUJsb2NrMyk7XG4gIGNhcnJpZXIxLmFwcGVuZENoaWxkKGNhcnJpZXIxTGlmZUJsb2NrNCk7XG4gIGNhcnJpZXIxLmFwcGVuZENoaWxkKGNhcnJpZXIxTGlmZUJsb2NrNSk7XG5cbiAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxKTtcbiAgYmF0dGxlc2hpcDEuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDFMaWZlQmxvY2sxKTtcbiAgYmF0dGxlc2hpcDEuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDFMaWZlQmxvY2syKTtcbiAgYmF0dGxlc2hpcDEuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDFMaWZlQmxvY2szKTtcbiAgYmF0dGxlc2hpcDEuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDFMaWZlQmxvY2s0KTtcblxuICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQoY3J1aXNlcjEpO1xuICBjcnVpc2VyMS5hcHBlbmRDaGlsZChjcnVpc2VyMUxpZmVCbG9jazEpO1xuICBjcnVpc2VyMS5hcHBlbmRDaGlsZChjcnVpc2VyMUxpZmVCbG9jazIpO1xuICBjcnVpc2VyMS5hcHBlbmRDaGlsZChjcnVpc2VyMUxpZmVCbG9jazMpO1xuXG4gIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChzdWJtYXJpbmUxKTtcbiAgc3VibWFyaW5lMS5hcHBlbmRDaGlsZChzdWJtYXJpbmUxTGlmZUJsb2NrMSk7XG4gIHN1Ym1hcmluZTEuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMUxpZmVCbG9jazIpO1xuICBzdWJtYXJpbmUxLmFwcGVuZENoaWxkKHN1Ym1hcmluZTFMaWZlQmxvY2szKTtcblxuICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDEpO1xuICBwYXRyb2xCb2F0MS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0MUxpZmVCbG9jazEpO1xuICBwYXRyb2xCb2F0MS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0MUxpZmVCbG9jazIpO1xuXG4gIHBsYXllcldyYXBwZXIxLmFwcGVuZENoaWxkKHBsYXllcjFCb2FyZCk7XG4gIHBsYXllcldyYXBwZXIxLmFwcGVuZENoaWxkKG92ZXJsYXkxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGVtcHR5U3BhY2UxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckFQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQlBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJCUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJCUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJDUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckNQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckNQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckRQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRFBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRVBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJFUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJFUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJGUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckZQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckZQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckdQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyR1BsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySFBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJIUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJIUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJJUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlcklQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlcklQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckpQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySlBsYXllcjFUeHQpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIxUGxheWVyMSk7XG4gIHJvd051bWJlcjFQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjFQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTFQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjFQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMlBsYXllcjEpO1xuICByb3dOdW1iZXIyUGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXIyUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0EyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kyUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oyUGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjNQbGF5ZXIxKTtcbiAgcm93TnVtYmVyM1BsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyM1BsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJM1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKM1BsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI0UGxheWVyMSk7XG4gIHJvd051bWJlcjRQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjRQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTRQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjRQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNVBsYXllcjEpO1xuICByb3dOdW1iZXI1UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI1UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k1UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o1UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjZQbGF5ZXIxKTtcbiAgcm93TnVtYmVyNlBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyNlBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNlBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNlBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI3UGxheWVyMSk7XG4gIHJvd051bWJlcjdQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjdQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTdQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjdQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyOFBsYXllcjEpO1xuICByb3dOdW1iZXI4UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI4UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k4UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o4UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjlQbGF5ZXIxKTtcbiAgcm93TnVtYmVyOVBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyOVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJOVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKOVBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIxMFBsYXllcjEpO1xuICByb3dOdW1iZXIxMFBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyMTBQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjEwUGxheWVyMSk7XG5cbiAgZ2FtZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyV3JhcHBlcjIpO1xuICBwbGF5ZXJXcmFwcGVyMi5hcHBlbmRDaGlsZChwbGF5ZXIyQm9hcmQpO1xuICBwbGF5ZXJXcmFwcGVyMi5hcHBlbmRDaGlsZChvdmVybGF5Mik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChlbXB0eVNwYWNlMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJBUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckFQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckFQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckJQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyQlBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQlBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQ1BsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJDUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJDUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJEUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckRQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckRQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckVQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyRVBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRlBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJGUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJGUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJHUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckdQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckdQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckhQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVySFBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySFBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySVBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJJUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJJUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJKUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckpQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckpQbGF5ZXIyVHh0KTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMVBsYXllcjIpO1xuICByb3dOdW1iZXIxUGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXIxUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ExUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kxUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oxUGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjJQbGF5ZXIyKTtcbiAgcm93TnVtYmVyMlBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyMlBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMlBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIzUGxheWVyMik7XG4gIHJvd051bWJlcjNQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjNQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTNQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjNQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNFBsYXllcjIpO1xuICByb3dOdW1iZXI0UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI0UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k0UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o0UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjVQbGF5ZXIyKTtcbiAgcm93TnVtYmVyNVBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyNVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNVBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI2UGxheWVyMik7XG4gIHJvd051bWJlcjZQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjZQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTZQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjZQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyN1BsYXllcjIpO1xuICByb3dOdW1iZXI3UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI3UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k3UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o3UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjhQbGF5ZXIyKTtcbiAgcm93TnVtYmVyOFBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyOFBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJOFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKOFBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI5UGxheWVyMik7XG4gIHJvd051bWJlcjlQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjlQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTlQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjlQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMTBQbGF5ZXIyKTtcbiAgcm93TnVtYmVyMTBQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjEwUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ExMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oxMFBsYXllcjIpO1xuXG4gIHBsYXllcldyYXBwZXIyLmFwcGVuZENoaWxkKHBsYXllcjJTaGlwcyk7XG4gIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChjYXJyaWVyMik7XG4gIGNhcnJpZXIyLmFwcGVuZENoaWxkKGNhcnJpZXIyTGlmZUJsb2NrMSk7XG4gIGNhcnJpZXIyLmFwcGVuZENoaWxkKGNhcnJpZXIyTGlmZUJsb2NrMik7XG4gIGNhcnJpZXIyLmFwcGVuZENoaWxkKGNhcnJpZXIyTGlmZUJsb2NrMyk7XG4gIGNhcnJpZXIyLmFwcGVuZENoaWxkKGNhcnJpZXIyTGlmZUJsb2NrNCk7XG4gIGNhcnJpZXIyLmFwcGVuZENoaWxkKGNhcnJpZXIyTGlmZUJsb2NrNSk7XG5cbiAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyKTtcbiAgYmF0dGxlc2hpcDIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDJMaWZlQmxvY2sxKTtcbiAgYmF0dGxlc2hpcDIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDJMaWZlQmxvY2syKTtcbiAgYmF0dGxlc2hpcDIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDJMaWZlQmxvY2szKTtcbiAgYmF0dGxlc2hpcDIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDJMaWZlQmxvY2s0KTtcblxuICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQoY3J1aXNlcjIpO1xuICBjcnVpc2VyMi5hcHBlbmRDaGlsZChjcnVpc2VyMkxpZmVCbG9jazEpO1xuICBjcnVpc2VyMi5hcHBlbmRDaGlsZChjcnVpc2VyMkxpZmVCbG9jazIpO1xuICBjcnVpc2VyMi5hcHBlbmRDaGlsZChjcnVpc2VyMkxpZmVCbG9jazMpO1xuXG4gIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChzdWJtYXJpbmUyKTtcbiAgc3VibWFyaW5lMi5hcHBlbmRDaGlsZChzdWJtYXJpbmUyTGlmZUJsb2NrMSk7XG4gIHN1Ym1hcmluZTIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMkxpZmVCbG9jazIpO1xuICBzdWJtYXJpbmUyLmFwcGVuZENoaWxkKHN1Ym1hcmluZTJMaWZlQmxvY2szKTtcblxuICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdDIpO1xuICBwYXRyb2xCb2F0Mi5hcHBlbmRDaGlsZChwYXRyb2xCb2F0MkxpZmVCbG9jazEpO1xuICBwYXRyb2xCb2F0Mi5hcHBlbmRDaGlsZChwYXRyb2xCb2F0MkxpZmVCbG9jazIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0c0xpbmUxKTtcbiAgY3JlZGl0c0xpbmUxLmFwcGVuZENoaWxkKGNyZWRpdHNMaW5lMVR4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzTGluZTIpO1xuICBjcmVkaXRzTGluZTIuYXBwZW5kQ2hpbGQoY3JlZGl0c0xpbmUyVHh0KTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJTaGlwcyhcbiAgY2FycmllckNvb3JkaW5hdGVzLFxuICBiYXR0bGVzaGlwQ29vcmRpbmF0ZXMsXG4gIGNydWlzZXJDb29yZGluYXRlcyxcbiAgc3VibWFyaW5lQ29vcmRpbmF0ZXMsXG4gIHBhdHJvbEJvYXRDb29yZGluYXRlc1xuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcmd1bWVudHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBhcmd1bWVudHNbaV1bal07XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgI3BsYXllci0xLWJvYXJkID4gLiR7Y29vcmRpbmF0ZX1gXG4gICAgICApO1xuICAgICAgc2hpcEJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAyMTY5MVwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWlzcyh0YXJnZXRlZEJsb2NrKSB7XG4gIHRhcmdldGVkQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYjVmN2VhXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIaXQodGFyZ2V0ZWRCbG9jaykge1xuICB0YXJnZXRlZEJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBMaWZlQmxvY2soc2hpcCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKHNoaXAuY2hpbGRyZW5baV0pLmJhY2tncm91bmRDb2xvciA9PT1cbiAgICAgICAgXCJyZ2IoNDUsIDIxMiwgMTkxKVwiIHx8XG4gICAgICBzaGlwLmNoaWxkcmVuW2ldLnN0eWxlLmJhY2tncm91bmQgPT09IFwicmdiKDQ1LCAyMTIsIDE5MSlcIlxuICAgICkge1xuICAgICAgc2hpcC5jaGlsZHJlbltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQoaHVtYW5UdXJuLCBjb21wdXRlclR1cm4pIHtcbiAgY29uc3Qgb3ZlcmxheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXktMVwiKTtcbiAgY29uc3Qgb3ZlcmxheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXktMlwiKTtcbiAgaWYgKGh1bWFuVHVybiA9PT0gdHJ1ZSAmJiBjb21wdXRlclR1cm4gPT09IGZhbHNlKSB7XG4gICAgb3ZlcmxheTEuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBvdmVybGF5Mi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSBpZiAoaHVtYW5UdXJuID09PSBmYWxzZSAmJiBjb21wdXRlclR1cm4gPT09IHRydWUpIHtcbiAgICBvdmVybGF5MS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgb3ZlcmxheTIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKGdhbWVSZXN1bHQpIHtcbiAgY29uc3QgbWVzc2FnZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2Utc2VjdGlvblwiKTtcbiAgbGV0IHdpbm5pbmdNZXNzYWdlID0gdW5kZWZpbmVkO1xuICBpZiAoZ2FtZVJlc3VsdCA9PT0gXCJwbGF5ZXIgMSB3aW5zXCIpIHtcbiAgICB3aW5uaW5nTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWU9VIFdJTlwiKTtcbiAgfSBlbHNlIGlmIChnYW1lUmVzdWx0ID09PSBcInBsYXllciAyIHdpbnNcIikge1xuICAgIHdpbm5pbmdNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJZT1UgTE9TRVwiKTtcbiAgfVxuICBtZXNzYWdlU2VjdGlvbi5hcHBlbmRDaGlsZCh3aW5uaW5nTWVzc2FnZSk7XG59XG5cbmV4cG9ydCB7XG4gIGdhbWVCdWlsZGVyLFxuICBkaXNwbGF5UGxheWVyU2hpcHMsXG4gIGRpc3BsYXlNaXNzLFxuICBkaXNwbGF5SGl0LFxuICByZW1vdmVTaGlwTGlmZUJsb2NrLFxuICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQsXG4gIGRpc3BsYXlXaW5uZXIsXG59O1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgbGV0IGhpdHNUYWtlbiA9IDA7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBoaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpdHNUYWtlbisrO1xuICAgIH0sXG4gICAgaXNTdW5rOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaGl0c1Rha2VuID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZUJvYXJkKFxuICBjYXJyaWVyQ29vcmRpbmF0ZXMsXG4gIGJhdHRsZXNoaXBDb29yZGluYXRlcyxcbiAgY3J1aXNlckNvb3JkaW5hdGVzLFxuICBzdWJtYXJpbmVDb29yZGluYXRlcyxcbiAgcGF0cm9sQm9hdENvb3JkaW5hdGVzXG4pIHtcbiAgLy8gQ3JlYXRlIGJvYXJkXG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IFwiZW1wdHlcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoICYmIGkgPCA1OyBpKyspIHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICBcImNhcnJpZXJcIixcbiAgICBcImJhdHRsZXNoaXBcIixcbiAgICBcImNydWlzZXJcIixcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIFwicGF0cm9sQm9hdFwiLFxuICBdO1xuXG4gIC8vIE5lZWQgdG8gdGFrZSBjb29yZGluYXRlcyBvZiBzaGlwcywgYW5kIHJlcGxhY2UgXCJlbXB0eVwiIHZhbHVlcyBpbiBib2FyZCB3aXRoIGFwcHJvcHJpYXRlIHNoaXAgbmFtZXMgZm9yIGVhY2ggc2hpcCBjb29yZGluYXRlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcENvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBVc2UgcmVnZXggdG8gZXh0cmFjdCB4IGFuZCB5IGNvb3JkaW5hdGVzIGFuZCBzaGlwIG5hbWVcbiAgICAgIGNvbnN0IHJlZ2V4MSA9IC9bQS1KXS9pO1xuICAgICAgY29uc3QgcmVnZXgyID0gL1sxLTldXFxkKi87XG4gICAgICAvLyBDb252ZXJ0IHggY29vcmRpbmF0ZSB0byBhbiBhc2NpaSBudW1iZXIgYW5kIGNvbnZlcnQgdGhhdCB0byBhIG51bWJlciBmcm9tIDAgdG8gOVxuICAgICAgLy8gQ29udmVydCB5IGNvb3JkaW5hdGUgdG8gYSBudW1iZXIgZnJvbSAwIHRvIDlcbiAgICAgIGNvbnN0IHhDb29yZGluYXRlID1cbiAgICAgICAgc2hpcENvb3JkaW5hdGVzW2ldW2pdLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSBzaGlwQ29vcmRpbmF0ZXNbaV1bal0ubWF0Y2gocmVnZXgyKVswXSAtIDE7XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBOYW1lc1tpXTtcbiAgICAgIC8vIFJlcGxhY2UgXCJlbXB0eVwiIHZhbHVlIGluIGJvYXJkIGNvb3JkaW5hdGUgd2l0aCBzaGlwIG5hbWVcbiAgICAgIGJvYXJkW3hDb29yZGluYXRlXVt5Q29vcmRpbmF0ZV0gPSBzaGlwTmFtZTtcbiAgICB9XG4gIH1cbiAgLy8gQ3JlYXRlIHNoaXAgb2JqZWN0c1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgXCJjcnVpc2VyXCIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcInBhdHJvbEJvYXRcIik7XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2FycmllcjogY2FycmllcixcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwLFxuICAgIGNydWlzZXI6IGNydWlzZXIsXG4gICAgc3VibWFyaW5lOiBzdWJtYXJpbmUsXG4gICAgcGF0cm9sQm9hdDogcGF0cm9sQm9hdCxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uIChjb29yZGluYXRlKSB7XG4gICAgICAvLyBJbml0aWFsaXplIGFycmF5IHRvIGNvbnRhaW4gcmV0dXJuIHZhbHVlcyAoYXR0YWNrIHN0YXR1cyBhbmQgaGl0IHNoaXApXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgIC8vIENvbnZlcnQgeCBhbmQgeSBjb29yZGluYXRlcyB0byBudW1iZXJzIGZvciBib2FyZCBhcnJheVxuICAgICAgY29uc3QgcmVnZXgxID0gL1tBLUpdL2k7XG4gICAgICBjb25zdCByZWdleDIgPSAvWzEtOV1cXGQqLztcbiAgICAgIGNvbnN0IHggPSBjb29yZGluYXRlLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGUubWF0Y2gocmVnZXgyKVswXSAtIDE7XG5cbiAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgIHJlc3VsdC5wdXNoKFwibWlzc1wiKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldICE9PSBcIm1pc3NcIiAmJiBib2FyZFt4XVt5XSAhPT0gXCJoaXRcIikge1xuICAgICAgICAvLyBFeGVjdXRlIGF0dGFjayBvbiBzaGlwXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChjb29yZGluYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwc1tzaGlwTmFtZV0uaGl0KCk7XG4gICAgICAgICAgLy8gUmVwbGFjZSBoaXQgc2hpcCBpbiBib2FyZCB3aXRoIFwiaGl0XCJcbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgaWYgKHNoaXBzW3NoaXBOYW1lXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCJzaW5rXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJoaXRcIik7XG4gICAgICAgICAgcmVzdWx0LnB1c2goc2hpcE5hbWUpO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuazogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICBpZiAoc2hpcHNbc2hpcF0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyVHlwZSkge1xuICBsZXQgdHVybiA9IGZhbHNlO1xuXG4gIC8vIEFJIGJvYXJkIGFjY2Vzc1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgeCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KTtcbiAgICAgIGNvbnN0IHkgPSBqICsgMTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB4ICsgeTtcbiAgICAgIGJvYXJkW2ldW2pdID0gY29vcmRpbmF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBBSSBsaXN0IG9mIGxlZ2FsIG1vdmVzXG4gIGNvbnN0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZWdhbE1vdmVzLnB1c2goYm9hcmRbaV1bal0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFJIHRyaWFuZ3VsYXRpb24gYXJyYXkgKHN1Y2Nlc3NmdWwgaGl0cyBhcmUgcmVjb3JkZWRcbiAgLy8gdW50aWwgc2hpcCBpcyBkZXN0cm95ZWQuIFRoZW4gdGhleSBhcmUgZm9yZ290dGVuKVxuICBjb25zdCB0YXJnZXRlZFNoaXAgPSBbXTtcblxuICAvLyBBSSByZWNvcmRzIGF0dGFja2VkIGNvb3JkaW5hdGUsIHdoaWNoIHdpbGwgYmUgdXNlZCBpZiB0aGUgaGl0IGlzIGEgc3VjY2Vzc1xuICBsZXQgbGFzdEF0dGFjaztcblxuICBsZXQgYXR0YWNrO1xuICBsZXQgcmVjZWl2ZUF0dGFja0luZm8gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHBsYXllclR5cGUgPT09IFwiaHVtYW5cIikge1xuICAgIGF0dGFjayA9IGZ1bmN0aW9uIChhdHRhY2tDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZTtcbiAgICB9O1xuICB9XG4gIC8vIDEuIEFJIHNob3VsZCByYW5kb21seSBwcm9kdWNlIGEgY29vcmRpbmF0ZSB0byBhdHRhY2tcbiAgLy8gMi4gQUkgc2hvdWxkIHJlY29yZCBhbGwgcHJldmlvdXMgaGl0cywgYW5kIG9ubHkgcHJvZHVjZSBhIGNvb3JkaW5hdGUgdG8gYXR0YWNrIGJhc2VkIG9uIHRoZVxuICAvLyAuLiByZW1haW5pbmcgc3BhY2VzXG4gIC8vIDMuIEFJIHNob3VsZCBwcmlvcml0aXplIGF0dGFja2luZyBzcGFjZXMgYWRqYWNlbnQgdG8gc3VjY2Vzc2Z1bCBoaXRzXG4gIGlmIChwbGF5ZXJUeXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICBhdHRhY2sgPSBmdW5jdGlvbiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlKSB7XG4gICAgICBpZiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGU7XG4gICAgICAgIC8vIGlmIHRhcmdldGVkU2hpcCBhcnJheSBsZW5ndGggaXMgMSwgZ2V0IGEgcmFuZG9tIGFkamFjZW50IGNvb3JkaW5hdGUgKG1heCA0IGNob2ljZXMpXG4gICAgICAgIGlmICh0YXJnZXRlZFNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHJlZ2V4MSA9IC9bQS1KXS9pO1xuICAgICAgICAgIGNvbnN0IHJlZ2V4MiA9IC9bMS05XVxcZCovO1xuICAgICAgICAgIGNvbnN0IHggPSB0YXJnZXRlZFNoaXBbMF0ubWF0Y2gocmVnZXgxKVswXS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gICAgICAgICAgY29uc3QgeSA9IHRhcmdldGVkU2hpcFswXS5tYXRjaChyZWdleDIpWzBdIC0gMTtcblxuICAgICAgICAgIC8vIFJlY29yZCBhbGwgcG9zc2libGUgYWRqYWNlbnQgbW92ZXNcbiAgICAgICAgICBpZiAoYm9hcmRbeCArIDFdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeCArIDFdW3ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCArIDFdW3ldKTtcbiAgICAgICAgICBpZiAoYm9hcmRbeCAtIDFdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeCAtIDFdW3ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgICAgICBpZiAoYm9hcmRbeF0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4XVt5ICsgMV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChib2FyZFt4XVt5ICsgMV0pO1xuICAgICAgICAgIGlmIChib2FyZFt4XSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3hdW3kgLSAxXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3hdW3kgLSAxXSk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgcG9zc2libGUgYWRqYWNlbnQgbW92ZSBpZiBub3QgcG9zc2libGVcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2ldID09PSB1bmRlZmluZWQpIHBvc3NpYmxlTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbGV0IGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZ2FsTW92ZUNoZWNrOiBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsTW92ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaV0gPT09IGxlZ2FsTW92ZXNbal0pIHtcbiAgICAgICAgICAgICAgICBpc0xlZ2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhayBsZWdhbE1vdmVDaGVjaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTGVnYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hvb3NlIHJhbmRvbSBtb3ZlIGZyb20gbGlzdCBvZiBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlc1tcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc3NpYmxlTW92ZXMubGVuZ3RoICsgMSkpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRhcmdldGVkU2hpcCBhcnJheSBpcyBncmVhdGVyIHRoYW4gMSwgZ2V0IGEgY29vcmRpbmF0ZSBvbiB0aGUgc2FtZSBsaW5lIGFzIHRob3NlXG4gICAgICAgIC8vIC4uIHJlY29yZGVkIGNvb3JkaW5hdGVzIGFuZCBpcyBhZGphY2VudCB0byBlaXRoZXIgb2YgdGhlIHJlY29yZGVkIGNvb3JkaW5hdGVzIGluIHRoZVxuICAgICAgICAvLyAuLiB0YXJnZXRlZFNoaXAgYXJyYXlcbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0ZWRTaGlwLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCByZWdleDEgPSAvW0EtSl0vaTtcbiAgICAgICAgICBjb25zdCByZWdleDIgPSAvWzEtOV1cXGQqLztcbiAgICAgICAgICAvLyBSZWNvcmQgYWxsIHRhcmdldGVkIHNoaXAgY29vcmRpbmF0ZXMgaW4gYXJyYXkgZm9ybVxuICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4Q29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAgICAgICAgdGFyZ2V0ZWRTaGlwW2ldLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgeUNvb3JkaW5hdGVzLnB1c2godGFyZ2V0ZWRTaGlwW2ldLm1hdGNoKHJlZ2V4MilbMF0gLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRXN0YWJsaXNoIGxpbmUgb2YgYXR0YWNrXG4gICAgICAgICAgY29uc3QgYWxsRXF1YWwgPSAoYXJyKSA9PiBhcnIuZXZlcnkoKHYpID0+IHYgPT09IGFyclswXSk7XG4gICAgICAgICAgY29uc3QgeENvb3JkaW5hdGVzQWxsRXF1YWwgPSBhbGxFcXVhbCh4Q29vcmRpbmF0ZXMpOyAvLyBFaXRoZXIgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlc0FsbEVxdWFsID0gYWxsRXF1YWwoeUNvb3JkaW5hdGVzKTsgLy8gRWl0aGVyIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAvLyBSZWNvcmQgYWxsIHBvc3NpYmxlIG1vdmVzXG4gICAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0geENvb3JkaW5hdGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeSA9IHlDb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNBbGxFcXVhbCkge1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeF1beSArIDFdKTtcbiAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3hdW3kgLSAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlDb29yZGluYXRlc0FsbEVxdWFsKSB7XG4gICAgICAgICAgICAgIGlmIChib2FyZFt4ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4ICsgMV1beV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCArIDFdW3ldKTtcbiAgICAgICAgICAgICAgaWYgKGJvYXJkW3ggLSAxXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3ggLSAxXVt5XSlcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVtb3ZlIHBvc3NpYmxlIGFkamFjZW50IG1vdmUgaWYgbm90IHBvc3NpYmxlXG4gICAgICAgICAgY29uc3QgaW1wb3NzaWJsZU1vdmVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocG9zc2libGVNb3Zlc1tpXSA9PT0gdW5kZWZpbmVkKSBwb3NzaWJsZU1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGxldCBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgICBsZWdhbE1vdmVDaGVjazogZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbE1vdmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2ldID09PSBsZWdhbE1vdmVzW2pdKSB7XG4gICAgICAgICAgICAgICAgaXNMZWdhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWsgbGVnYWxNb3ZlQ2hlY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpbXBvc3NpYmxlTW92ZXMucHVzaChwb3NzaWJsZU1vdmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbXBvc3NpYmxlTW92ZXMuaW5jbHVkZXMocG9zc2libGVNb3Zlc1tpXSkpIHtcbiAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hvb3NlIHJhbmRvbSBtb3ZlIGZyb20gbGlzdCBvZiBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmVzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UsIGdldCByYW5kb20gYmxvY2sgZnJvbSBsZWdhbE1vdmVzIGFycmF5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgbGVnYWxNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbE1vdmVzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0aGF0IGNvb3JkaW5hdGUgZnJvbSBsZWdhbE1vdmVzIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVnYWxNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhdHRhY2tDb29yZGluYXRlID09PSBsZWdhbE1vdmVzW2ldKSB7XG4gICAgICAgICAgICBsZWdhbE1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXNzaWduIGxhc3RBdHRhY2sgdmFyaWFibGUgdGhlIHZhbHVlIG9mIHRoZSB0byBiZSBhdHRhY2tlZCBjb29yZGluYXRlXG4gICAgICAgIGxhc3RBdHRhY2sgPSBhdHRhY2tDb29yZGluYXRlO1xuICAgICAgICAvLyByZXR1cm4gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoYXQgY29vcmRpbmF0ZSBmcm9tIGxlZ2FsTW92ZXMgYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWdhbE1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZSA9PT0gbGVnYWxNb3Zlc1tpXSlcbiAgICAgICAgICAgIGxlZ2FsTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFzc2lnbiBsYXN0QXR0YWNrIHZhcmlhYmxlIHRoZSB2YWx1ZSBvZiB0aGUgdG8gYmUgYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICBsYXN0QXR0YWNrID0gYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlO1xuICAgICAgICAvLyByZXR1cm4gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVjZWl2ZUF0dGFja0luZm8gPSBmdW5jdGlvbiAocmVjZWl2ZWRTdGF0dXMpIHtcbiAgICAgIGlmIChyZWNlaXZlZFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgICB0YXJnZXRlZFNoaXAucHVzaChsYXN0QXR0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlZFN0YXR1cyA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgdGFyZ2V0ZWRTaGlwLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldFR1cm46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0dXJuO1xuICAgIH0sXG4gICAgc2V0VHVybjogZnVuY3Rpb24gKGJvb2xlYW5WYWx1ZSkge1xuICAgICAgdHVybiA9IGJvb2xlYW5WYWx1ZTtcbiAgICB9LFxuICAgIGF0dGFjazogYXR0YWNrLFxuICAgIHJlY2VpdmVBdHRhY2tJbmZvOiByZWNlaXZlQXR0YWNrSW5mbyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplU2hpcFBvc2l0aW9ucygpIHtcbiAgY29uc3QgYm9hcmRTaXplID0gMTA7IC8vIFRoZSBzaXplIG9mIHRoZSBiYXR0bGVzaGlwIGJvYXJkXG4gIGNvbnN0IHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTsgLy8gVGhlIHNpemVzIG9mIHRoZSBzaGlwcyB0aGF0IG5lZWQgdG8gYmUgcGxhY2VkXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoYm9hcmRTaXplKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7IC8vIEluaXRpYWxpemUgdGhlIGJvYXJkIHdpdGggbnVsbCB2YWx1ZXNcbiAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBjYXJyaWVyQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgYmF0dGxlc2hpcENvb3JkaW5hdGUgPSBbXTtcbiAgY29uc3QgY3J1aXNlckNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHN1Ym1hcmluZUNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHBhdHJvbEJvYXRDb29yZGluYXRlcyA9IFtdO1xuICBzaGlwUG9zaXRpb25zLnB1c2goY2FycmllckNvb3JkaW5hdGVzKTtcbiAgc2hpcFBvc2l0aW9ucy5wdXNoKGJhdHRsZXNoaXBDb29yZGluYXRlKTtcbiAgc2hpcFBvc2l0aW9ucy5wdXNoKGNydWlzZXJDb29yZGluYXRlcyk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChzdWJtYXJpbmVDb29yZGluYXRlcyk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChwYXRyb2xCb2F0Q29vcmRpbmF0ZXMpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNoaXBTaXplID0gc2hpcFNpemVzW2ldO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyAvLyAwID0gaG9yaXpvbnRhbCwgMSA9IHZlcnRpY2FsXG5cbiAgICBsZXQgcm93LCBjb2w7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAvLyBob3Jpem9udGFsXG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkU2l6ZSAtIHNoaXBTaXplICsgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkU2l6ZSAtIHNoaXBTaXplICsgMSkpO1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBmaXRzIGluIHRoZSBjaG9zZW4gcG9zaXRpb25cbiAgICBsZXQgdmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwU2l6ZTsgaisrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9yaWVudGF0aW9uID09PSAwICYmXG4gICAgICAgIGJvYXJkW3Jvd11bY29sICsgal0gIT09IG51bGwgLy8gY2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgc2hpcCBpbiB0aGUgd2F5XG4gICAgICApIHtcbiAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG9yaWVudGF0aW9uID09PSAxICYmXG4gICAgICAgIGJvYXJkW3JvdyArIGpdW2NvbF0gIT09IG51bGwgLy8gY2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgc2hpcCBpbiB0aGUgd2F5XG4gICAgICApIHtcbiAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgcG9zaXRpb24gaXMgdmFsaWQsIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBib2FyZFxuICAgIGlmICh2YWxpZFBvc2l0aW9uKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBTaXplOyBqKyspIHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBqXSA9IGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9hcmRbcm93ICsgal1bY29sXSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlIHBvc2l0aW9uIGlzIG5vdCB2YWxpZCwgdHJ5IGFnYWluIHdpdGggdGhpcyBzaGlwXG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBib2FyZCBhbmQgZXh0cmFjdCB0aGUgc2hpcCBwb3NpdGlvbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB4ID0gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpO1xuICAgICAgICBjb25zdCB5ID0gaiArIDE7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB4ICsgeTtcbiAgICAgICAgc2hpcFBvc2l0aW9uc1tib2FyZFtpXVtqXV0ucHVzaChjb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcFBvc2l0aW9ucztcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHJhbmRvbWl6ZVNoaXBQb3NpdGlvbnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZUJvYXJkLCBQbGF5ZXIsIHJhbmRvbWl6ZVNoaXBQb3NpdGlvbnMgfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuaW1wb3J0IHtcbiAgZ2FtZUJ1aWxkZXIsXG4gIGRpc3BsYXlQbGF5ZXJTaGlwcyxcbiAgZGlzcGxheU1pc3MsXG4gIGRpc3BsYXlIaXQsXG4gIHJlbW92ZVNoaXBMaWZlQmxvY2ssXG4gIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZCxcbiAgZGlzcGxheVdpbm5lcixcbn0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGdhbWVCdWlsZGVyKCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBodW1hbiBwbGF5ZXIgYW5kIGNvbXB1dGVyIHBsYXllci4gTWFrZSBodW1hbiBwbGF5ZXIgc3RhcnQgZmlyc3RcbiAgY29uc3QgaHVtYW4gPSBQbGF5ZXIoXCJodW1hblwiKTtcbiAgaHVtYW4uc2V0VHVybih0cnVlKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgY29tcHV0ZXIuc2V0VHVybihmYWxzZSk7XG5cbiAgLy8gUmFuZG9taXplIHNoaXAgcG9zaXRpb25zIGZvciBlYWNoIGJvYXJkXG4gIGNvbnN0IGdhbWVCb2FyZDEgPSByYW5kb21pemVTaGlwUG9zaXRpb25zKCk7XG4gIGNvbnN0IGdhbWVCb2FyZDIgPSByYW5kb21pemVTaGlwUG9zaXRpb25zKCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBodW1hbiBib2FyZCBhbmQgY29tcHV0ZXIgYm9hcmRcbiAgY29uc3QgY2FycmllckNvb3JkaW5hdGVzSHVtYW4gPSBnYW1lQm9hcmQxWzBdO1xuICBjb25zdCBiYXR0bGVzaGlwQ29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbMV07XG4gIGNvbnN0IGNydWlzZXJDb29yZGluYXRlc0h1bWFuID0gZ2FtZUJvYXJkMVsyXTtcbiAgY29uc3Qgc3VibWFyaW5lQ29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbM107XG4gIGNvbnN0IHBhdHJvbEJvYXRDb29yZGluYXRlc0h1bWFuID0gZ2FtZUJvYXJkMVs0XTtcblxuICBjb25zdCBjYXJyaWVyQ29vcmRpbmF0ZXNDb21wdXRlciA9IGdhbWVCb2FyZDJbMF07XG4gIGNvbnN0IGJhdHRsZXNoaXBDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMlsxXTtcbiAgY29uc3QgY3J1aXNlckNvb3JkaW5hdGVzQ29tcHV0ZXIgPSBnYW1lQm9hcmQyWzJdO1xuICBjb25zdCBzdWJtYXJpbmVDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMlszXTtcbiAgY29uc3QgcGF0cm9sQm9hdENvb3JkaW5hdGVzQ29tcHV0ZXIgPSBnYW1lQm9hcmQyWzRdO1xuXG4gIGNvbnN0IGh1bWFuR2FtZUJvYXJkID0gR2FtZUJvYXJkKFxuICAgIGNhcnJpZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIGJhdHRsZXNoaXBDb29yZGluYXRlc0h1bWFuLFxuICAgIGNydWlzZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIHN1Ym1hcmluZUNvb3JkaW5hdGVzSHVtYW4sXG4gICAgcGF0cm9sQm9hdENvb3JkaW5hdGVzSHVtYW5cbiAgKTtcblxuICBkaXNwbGF5UGxheWVyU2hpcHMoXG4gICAgY2FycmllckNvb3JkaW5hdGVzSHVtYW4sXG4gICAgYmF0dGxlc2hpcENvb3JkaW5hdGVzSHVtYW4sXG4gICAgY3J1aXNlckNvb3JkaW5hdGVzSHVtYW4sXG4gICAgc3VibWFyaW5lQ29vcmRpbmF0ZXNIdW1hbixcbiAgICBwYXRyb2xCb2F0Q29vcmRpbmF0ZXNIdW1hblxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKFxuICAgIGNhcnJpZXJDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIGJhdHRsZXNoaXBDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIGNydWlzZXJDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIHN1Ym1hcmluZUNvb3JkaW5hdGVzQ29tcHV0ZXIsXG4gICAgcGF0cm9sQm9hdENvb3JkaW5hdGVzQ29tcHV0ZXJcbiAgKTtcblxuICAvLyBDcmVhdGUgYXJyYXkgb2YgZW5lbXkgYm9hcmQgYmxvY2tzIHdpdGggZXZlbnQgbGlzdGVuZXJzIGFuZCByZXR1cm4gdGhhdCBhcnJheVxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLTItYm9hcmRcIik7XG4gIGNvbnN0IGNsaWNrZWRCbG9ja3MgPSBbXTtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgYmxvY2sgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvY2tcIikgJiZcbiAgICAgICFjbGlja2VkQmxvY2tzLmluY2x1ZGVzKGJsb2NrLmNsYXNzTGlzdFsxXSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gYmxvY2suY2xhc3NMaXN0WzFdO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgICAgfSk7XG4gICAgICBjbGlja2VkQmxvY2tzLnB1c2goaW5kZXgpO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZChodW1hbi5nZXRUdXJuKCksIGNvbXB1dGVyLmdldFR1cm4oKSk7XG5cbiAgLy8gQmVnaW5uaW5nIG9mIGdhbWUgbG9vcFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpOyAvLyB3YWl0IGZvciBwcm9taXNlcyB0byBiZSBhZGRlZFxuICAgICAgY29udGludWU7IC8vIHN0YXJ0IHRoZSB3aGlsZSBsb29wIGFnYWluXG4gICAgfVxuICAgIC8vIEh1bWFuIGF0dGFja1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICBwcm9taXNlcy5sZW5ndGggPSAwO1xuXG4gICAgY29uc3QgaHVtYW5BdHRhY2tCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI3BsYXllci0yLWJvYXJkID4gLiR7aHVtYW5BdHRhY2t9YFxuICAgICk7XG5cbiAgICAvLyBkbyBzdHVmZiB3aXRoIGh1bWFuIGF0dGFja1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrUmVzdWx0ID0gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhodW1hbkF0dGFjayk7IC8vIHNob3VsZCByZXR1cm4gaGl0IHN0YXR1cyBhbmQgc2hpcCBoaXRcbiAgICBpZiAoaHVtYW5BdHRhY2tSZXN1bHRbMF0gPT09IFwibWlzc1wiKSB7XG4gICAgICBodW1hbi5zZXRUdXJuKGZhbHNlKTtcbiAgICAgIGNvbXB1dGVyLnNldFR1cm4odHJ1ZSk7XG4gICAgICBkaXNwbGF5TWlzcyhodW1hbkF0dGFja0Jsb2NrKTtcbiAgICAgIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZChodW1hbi5nZXRUdXJuKCksIGNvbXB1dGVyLmdldFR1cm4oKSk7XG4gICAgfVxuXG4gICAgaWYgKGh1bWFuQXR0YWNrUmVzdWx0WzBdID09PSBcImhpdFwiIHx8IGh1bWFuQXR0YWNrUmVzdWx0WzBdID09PSBcInNpbmtcIikge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjcGxheWVyLTItc2hpcHMgPiAuJHtodW1hbkF0dGFja1Jlc3VsdFsxXX1gXG4gICAgICApO1xuXG4gICAgICByZW1vdmVTaGlwTGlmZUJsb2NrKHNoaXBCbG9ja3MpO1xuICAgICAgZGlzcGxheUhpdChodW1hbkF0dGFja0Jsb2NrKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcHV0ZXJHYW1lQm9hcmQuYXJlU2hpcHNTdW5rKCkpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIoXCJwbGF5ZXIgMSB3aW5zXCIpO1xuICAgICAgcmV0dXJuOyAvLyBFc2NhcGUgZ2FtZSBsb29wXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZXIgYXR0YWNrXG4gICAgaWYgKGNvbXB1dGVyLmdldFR1cm4oKSAmJiAhaHVtYW4uZ2V0VHVybigpKSB7XG4gICAgICBsZXQgY29tcHV0ZXJQbGF5QWdhaW4gPSB0cnVlO1xuICAgICAgZG8ge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTsgLy8gYWRkIGEgZGVsYXkgb2YgMSBzZWNvbmRcbiAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBjb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyQXR0YWNrKSB7XG4gICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2tSZXN1bHQgPVxuICAgICAgICAgICAgaHVtYW5HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb21wdXRlckF0dGFjayk7IC8vIHNob3VsZCByZXR1cm4gaGl0IHN0YXR1cyBhbmQgc2hpcCBoaXRcbiAgICAgICAgICBjb21wdXRlci5yZWNlaXZlQXR0YWNrSW5mbyhjb21wdXRlckF0dGFja1Jlc3VsdFswXSk7XG5cbiAgICAgICAgICBjb25zdCBjb21wdXRlckF0dGFja0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjcGxheWVyLTEtYm9hcmQgPiAuJHtjb21wdXRlckF0dGFja31gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb21wdXRlckF0dGFja1Jlc3VsdFswXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgIGh1bWFuLnNldFR1cm4odHJ1ZSk7XG4gICAgICAgICAgICBjb21wdXRlci5zZXRUdXJuKGZhbHNlKTtcbiAgICAgICAgICAgIGRpc3BsYXlNaXNzKGNvbXB1dGVyQXR0YWNrQmxvY2spO1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7IC8vIGFkZCBhIGRlbGF5IG9mIDEgc2Vjb25kXG4gICAgICAgICAgICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQoaHVtYW4uZ2V0VHVybigpLCBjb21wdXRlci5nZXRUdXJuKCkpO1xuICAgICAgICAgICAgY29tcHV0ZXJQbGF5QWdhaW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb21wdXRlckF0dGFja1Jlc3VsdFswXSA9PT0gXCJoaXRcIiB8fFxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0gPT09IFwic2lua1wiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYCNwbGF5ZXItMS1zaGlwcyA+IC4ke2NvbXB1dGVyQXR0YWNrUmVzdWx0WzFdfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlbW92ZVNoaXBMaWZlQmxvY2soc2hpcEJsb2Nrcyk7XG4gICAgICAgICAgICBkaXNwbGF5SGl0KGNvbXB1dGVyQXR0YWNrQmxvY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChodW1hbkdhbWVCb2FyZC5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgZGlzcGxheVdpbm5lcihcInBsYXllciAyIHdpbnNcIik7XG4gICAgICAgICAgICByZXR1cm47IC8vIEVzY2FwZSBnYW1lIGxvb3BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKGNvbXB1dGVyUGxheUFnYWluID09PSB0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuZ2FtZUxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==