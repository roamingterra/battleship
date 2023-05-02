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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: \"Roboto\";\n  color: white;\n  background-color: black;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  height: 115px;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n#game-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 540px;\n  flex-wrap: wrap;\n}\n\n#player-wrapper {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  min-width: 525px;\n  z-index: 1;\n}\n\n#overlay-1,\n#overlay-2 {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#player-1-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-right: 10px;\n  z-index: 3;\n}\n\n#player-2-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-left: 10px;\n  order: 2;\n  z-index: 3;\n}\n\n.ship {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  padding: 10px;\n}\n\n.life-block {\n  width: 10px;\n  height: 10px;\n  background-color: #2dd4bf;\n}\n\n#player-1-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  z-index: 1;\n}\n\n#player-2-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  order: 1;\n  z-index: 1;\n}\n\n.column-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.block {\n  border: solid #b5f7ea;\n}\n\n#footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* For switching the order of player 2 board and player 2 ships when wrapping */\n@media screen and (max-width: 1049px) {\n  #player-2-ships {\n    order: 1;\n  }\n  #player-2-board {\n    order: 2;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAAqC;AACvC;;AAEA;;EAEE,YAAY;EACZ,SAAS;EACT,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,+EAA+E;AAC/E;EACE;IACE,QAAQ;EACV;EACA;IACE,QAAQ;EACV;AACF","sourcesContent":["@font-face {\n  font-family: Roboto;\n  src: url(./Roboto/Roboto-Regular.ttf);\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: \"Roboto\";\n  color: white;\n  background-color: black;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  height: 115px;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n#game-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 540px;\n  flex-wrap: wrap;\n}\n\n#player-wrapper {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  min-width: 525px;\n  z-index: 1;\n}\n\n#overlay-1,\n#overlay-2 {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#player-1-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-right: 10px;\n  z-index: 3;\n}\n\n#player-2-ships {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 22px;\n  padding-left: 10px;\n  order: 2;\n  z-index: 3;\n}\n\n.ship {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  padding: 10px;\n}\n\n.life-block {\n  width: 10px;\n  height: 10px;\n  background-color: #2dd4bf;\n}\n\n#player-1-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  z-index: 1;\n}\n\n#player-2-board {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(11, 28px);\n  grid-template-rows: repeat(12, 28px);\n  order: 1;\n  z-index: 1;\n}\n\n.column-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.block {\n  border: solid #b5f7ea;\n}\n\n#footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* For switching the order of player 2 board and player 2 ships when wrapping */\n@media screen and (max-width: 1049px) {\n  #player-2-ships {\n    order: 1;\n  }\n  #player-2-board {\n    order: 2;\n  }\n}\n"],"sourceRoot":""}]);
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
            return; // Escape game loop
          }
        }
      } while (computerPlayAgain === true);
    }
  }
}

gameLoop();

console.log((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.randomizeShipPositions)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1JQUE4QztBQUMxRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0Qsd0JBQXdCLHlEQUF5RCxHQUFHLGlCQUFpQixpQkFBaUIsY0FBYyw0QkFBNEIsaUJBQWlCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLFFBQVEsb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHNCQUFzQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsNEJBQTRCLHFCQUFxQixlQUFlLEdBQUcsNkJBQTZCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQixlQUFlLHlDQUF5QyxHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQixzQkFBc0Isd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixhQUFhLGVBQWUsR0FBRyxXQUFXLGtCQUFrQixnQ0FBZ0MsY0FBYyxrQkFBa0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGVBQWUsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGFBQWEsZUFBZSxHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLDZIQUE2SCxxQkFBcUIsZUFBZSxLQUFLLHFCQUFxQixlQUFlLEtBQUssR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxxQ0FBcUMsd0JBQXdCLDBDQUEwQyxHQUFHLGlCQUFpQixpQkFBaUIsY0FBYyw0QkFBNEIsaUJBQWlCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLFFBQVEsb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHNCQUFzQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsNEJBQTRCLHFCQUFxQixlQUFlLEdBQUcsNkJBQTZCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQixlQUFlLHlDQUF5QyxHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQixzQkFBc0Isd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixhQUFhLGVBQWUsR0FBRyxXQUFXLGtCQUFrQixnQ0FBZ0MsY0FBYyxrQkFBa0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGVBQWUsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGFBQWEsZUFBZSxHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLDZIQUE2SCxxQkFBcUIsZUFBZSxLQUFLLHFCQUFxQixlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDNWdMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMza0NGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QyxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRCwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0EsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEMsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTJEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pZM0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0F1RTtBQVEzQztBQUNQOztBQUVyQjtBQUNBLEVBQUUsOERBQVc7O0FBRWI7QUFDQSxnQkFBZ0IsaURBQU07QUFDdEI7QUFDQSxtQkFBbUIsaURBQU07QUFDekI7O0FBRUE7QUFDQSxxQkFBcUIsaUVBQXNCO0FBQzNDLHFCQUFxQixpRUFBc0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvREFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxxRUFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvREFBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRSwyRUFBd0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qzs7QUFFQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFXO0FBQ2pCLE1BQU0sMkVBQXdCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EOztBQUVBLE1BQU0sc0VBQW1CO0FBQ3pCLE1BQU0sNkRBQVU7QUFDaEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBVztBQUN2QixzRUFBc0U7QUFDdEUsWUFBWSwyRUFBd0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdCQUF3QjtBQUM1RDs7QUFFQSxZQUFZLHNFQUFtQjtBQUMvQixZQUFZLDZEQUFVO0FBQ3RCOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVksaUVBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10ZXN0LTIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGVzdC0yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRlc3QtMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTVweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jZ2FtZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogNTQwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNwbGF5ZXItd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDUyNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI292ZXJsYXktMSxcXG4jb3ZlcmxheS0yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNwbGF5ZXItMS1zaGlwcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbiNwbGF5ZXItMi1zaGlwcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgb3JkZXI6IDI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxpZmUtYmxvY2sge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkNGJmO1xcbn1cXG5cXG4jcGxheWVyLTEtYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyOHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAyOHB4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNwbGF5ZXItMi1ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI4cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI4cHgpO1xcbiAgb3JkZXI6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29sdW1uLW51bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93LW51bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgYm9yZGVyOiBzb2xpZCAjYjVmN2VhO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogRm9yIHN3aXRjaGluZyB0aGUgb3JkZXIgb2YgcGxheWVyIDIgYm9hcmQgYW5kIHBsYXllciAyIHNoaXBzIHdoZW4gd3JhcHBpbmcgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQ5cHgpIHtcXG4gICNwbGF5ZXItMi1zaGlwcyB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgI3BsYXllci0yLWJvYXJkIHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQXFDO0FBQ3ZDOztBQUVBOztFQUVFLFlBQVk7RUFDWixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUEsK0VBQStFO0FBQy9FO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKC4vUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDExNXB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNnYW1lLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA1NDBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI3BsYXllci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNTI1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jb3ZlcmxheS0xLFxcbiNvdmVybGF5LTIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3BsYXllci0xLXNoaXBzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDIycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuI3BsYXllci0yLXNoaXBzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDIycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBvcmRlcjogMjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubGlmZS1ibG9jayB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQ0YmY7XFxufVxcblxcbiNwbGF5ZXItMS1ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDI4cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDI4cHgpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI3BsYXllci0yLWJvYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMjhweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMjhweCk7XFxuICBvcmRlcjogMTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb2x1bW4tbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3ctbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ibG9jayB7XFxuICBib3JkZXI6IHNvbGlkICNiNWY3ZWE7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBGb3Igc3dpdGNoaW5nIHRoZSBvcmRlciBvZiBwbGF5ZXIgMiBib2FyZCBhbmQgcGxheWVyIDIgc2hpcHMgd2hlbiB3cmFwcGluZyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDlweCkge1xcbiAgI3BsYXllci0yLXNoaXBzIHtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxuICAjcGxheWVyLTItYm9hcmQge1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBnYW1lQnVpbGRlcigpIHtcbiAgLy8gRGVjbGFyZSBlbGVtZW50c1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCYXR0bGVzaGlwXCIpO1xuICBjb25zdCBnYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcGxheWVyV3JhcHBlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvdmVybGF5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsYXllcjFTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcnJpZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjFMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjFMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjFMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjFMaWZlQmxvY2s0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjFMaWZlQmxvY2s1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMUxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMUxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMUxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMUxpZmVCbG9jazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcnVpc2VyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIxTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIxTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIxTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUxTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTFMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMUxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXRyb2xCb2F0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQxTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQxTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZW1wdHlTcGFjZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJBUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckFQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJCUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckJQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJDUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckNQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJEUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckRQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJFUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckVQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJFXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJGUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckZQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJHUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckdQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJIUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckhQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJJUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlcklQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJXCIpO1xuICBjb25zdCBjb2x1bW5OdW1iZXJKUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckpQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJKXCIpO1xuICBjb25zdCByb3dOdW1iZXIxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjFQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIxXCIpO1xuICBjb25zdCBibG9ja0ExUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDFQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJMVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oxUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMlBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjJcIik7XG4gIGNvbnN0IGJsb2NrQTJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kyUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjJQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIzUGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiM1wiKTtcbiAgY29uc3QgYmxvY2tBM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gzUGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTNQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKM1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjRQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI0XCIpO1xuICBjb25zdCBibG9ja0E0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDRQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o0UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNVBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjVcIik7XG4gIGNvbnN0IGJsb2NrQTVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k1UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjVQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI2UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNlwiKTtcbiAgY29uc3QgYmxvY2tBNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g2UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTZQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNlBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjdQbGF5ZXIxVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI3XCIpO1xuICBjb25zdCBibG9ja0E3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDdQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJN1BsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o3UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOFBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjhcIik7XG4gIGNvbnN0IGJsb2NrQThQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIOFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k4UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjhQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI5UGxheWVyMVR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiOVwiKTtcbiAgY29uc3QgYmxvY2tBOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g5UGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTlQbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKOVBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIxMFBsYXllcjFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjEwXCIpO1xuICBjb25zdCBibG9ja0ExMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0cxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0oxMFBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcldyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3ZlcmxheTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbXB0eVNwYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQlBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkJcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyQ1BsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRFBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkRcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkVcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyRlBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVyR1BsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySFBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlcklQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIklcIik7XG4gIGNvbnN0IGNvbHVtbk51bWJlckpQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29sdW1uTnVtYmVySlBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkpcIik7XG4gIGNvbnN0IHJvd051bWJlcjFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMVBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjFcIik7XG4gIGNvbnN0IGJsb2NrQTFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0MxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0YxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIMVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0kxUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjFQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIyUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMlwiKTtcbiAgY29uc3QgYmxvY2tBMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0IyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0UyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0gyUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTJQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKMlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXIzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjNQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIzXCIpO1xuICBjb25zdCBibG9ja0EzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0QzUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0czUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDNQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJM1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0ozUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNFBsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjRcIik7XG4gIGNvbnN0IGJsb2NrQTRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFNFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tINFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k0UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjRQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI1UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNVwiKTtcbiAgY29uc3QgYmxvY2tBNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tENVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g1UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTVQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKNVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjZQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI2XCIpO1xuICBjb25zdCBibG9ja0E2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDZQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJNlBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o2UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyN1BsYXllcjJUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjdcIik7XG4gIGNvbnN0IGJsb2NrQTdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tCN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0M3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tFN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Y3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tIN1BsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0k3UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjdQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm93TnVtYmVyOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI4UGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiOFwiKTtcbiAgY29uc3QgYmxvY2tBOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0I4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tEOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0U4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjhQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tHOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0g4UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSThQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tKOFBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByb3dOdW1iZXI5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjlQbGF5ZXIyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI5XCIpO1xuICBjb25zdCBibG9ja0E5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tDOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0Q5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tGOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0c5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDlQbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tJOVBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja0o5UGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvd051bWJlcjEwUGxheWVyMlR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMTBcIik7XG4gIGNvbnN0IGJsb2NrQTEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQjEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrQzEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRDEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRTEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRjEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrRzEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSDEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSTEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJsb2NrSjEwUGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgcGxheWVyMlNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FycmllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMkxpZmVCbG9jazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMkxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMkxpZmVCbG9jazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMkxpZmVCbG9jazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJyaWVyMkxpZmVCbG9jazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYXR0bGVzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAyTGlmZUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAyTGlmZUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAyTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAyTGlmZUJsb2NrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNydWlzZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjJMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjJMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3J1aXNlcjJMaWZlQmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1hcmluZTJMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWFyaW5lMkxpZmVCbG9jazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtYXJpbmUyTGlmZUJsb2NrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhdHJvbEJvYXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDJMaWZlQmxvY2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGF0cm9sQm9hdDJMaWZlQmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcmVkaXRzTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcmVkaXRzTGluZTFUeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBcIldlYnNpdGUgY3JlYXRlZCBieSBEYW5pZWwgQmFsbGVyaW5pXCJcbiAgKTtcbiAgY29uc3QgY3JlZGl0c0xpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3JlZGl0c0xpbmUyVHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJXaXRoIHRoZSBoZWxwIGZyb20gwqkgVGhlIE9kaW4gUHJvamVjdCAyMDIyXCJcbiAgKTtcblxuICAvLyBBZGQgYXR0cmlidXRlc1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgZ2FtZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLXNlY3Rpb25cIik7XG4gIHBsYXllcldyYXBwZXIxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLXdyYXBwZXJcIik7XG4gIG92ZXJsYXkxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3ZlcmxheS0xXCIpO1xuXG4gIHBsYXllcjFTaGlwcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci0xLXNoaXBzXCIpO1xuICBjYXJyaWVyMS5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiLCBcInNoaXBcIik7XG4gIGNhcnJpZXIxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjFMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIxTGlmZUJsb2NrNC5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjFMaWZlQmxvY2s1LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMS5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiLCBcInNoaXBcIik7XG4gIGJhdHRsZXNoaXAxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDFMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMUxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAxTGlmZUJsb2NrNC5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY3J1aXNlcjEuY2xhc3NMaXN0LmFkZChcImNydWlzZXJcIiwgXCJzaGlwXCIpO1xuICBjcnVpc2VyMUxpZmVCbG9jazEuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNydWlzZXIxTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY3J1aXNlcjFMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUxLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIiwgXCJzaGlwXCIpO1xuICBzdWJtYXJpbmUxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMUxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTFMaWZlQmxvY2szLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBwYXRyb2xCb2F0MS5jbGFzc0xpc3QuYWRkKFwicGF0cm9sQm9hdFwiLCBcInNoaXBcIik7XG4gIHBhdHJvbEJvYXQxTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgcGF0cm9sQm9hdDFMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuXG4gIHBsYXllcjFCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci0xLWJvYXJkXCIpO1xuICBlbXB0eVNwYWNlMS5jbGFzc0xpc3QuYWRkKFwiZW1wdHktc3BhY2VcIik7XG4gIGNvbHVtbk51bWJlckFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJCUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyQ1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJFUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJIUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckpQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICByb3dOdW1iZXIxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTFcIik7XG4gIGJsb2NrQjFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxXCIpO1xuICBibG9ja0MxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDMVwiKTtcbiAgYmxvY2tEMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDFcIik7XG4gIGJsb2NrRTFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxXCIpO1xuICBibG9ja0YxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGMVwiKTtcbiAgYmxvY2tHMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzFcIik7XG4gIGJsb2NrSDFQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxXCIpO1xuICBibG9ja0kxUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJMVwiKTtcbiAgYmxvY2tKMVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjFcIik7XG4gIHJvd051bWJlcjJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0EyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMlwiKTtcbiAgYmxvY2tCMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjJcIik7XG4gIGJsb2NrQzJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMyXCIpO1xuICBibG9ja0QyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMlwiKTtcbiAgYmxvY2tFMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTJcIik7XG4gIGJsb2NrRjJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYyXCIpO1xuICBibG9ja0cyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMlwiKTtcbiAgYmxvY2tIMlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDJcIik7XG4gIGJsb2NrSTJQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkyXCIpO1xuICBibG9ja0oyUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMlwiKTtcbiAgcm93TnVtYmVyM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEzXCIpO1xuICBibG9ja0IzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCM1wiKTtcbiAgYmxvY2tDM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzNcIik7XG4gIGJsb2NrRDNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQzXCIpO1xuICBibG9ja0UzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFM1wiKTtcbiAgYmxvY2tGM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjNcIik7XG4gIGJsb2NrRzNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkczXCIpO1xuICBibG9ja0gzUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIM1wiKTtcbiAgYmxvY2tJM1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTNcIik7XG4gIGJsb2NrSjNQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkozXCIpO1xuICByb3dOdW1iZXI0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTRcIik7XG4gIGJsb2NrQjRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI0XCIpO1xuICBibG9ja0M0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNFwiKTtcbiAgYmxvY2tENFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDRcIik7XG4gIGJsb2NrRTRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU0XCIpO1xuICBibG9ja0Y0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNFwiKTtcbiAgYmxvY2tHNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzRcIik7XG4gIGJsb2NrSDRQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg0XCIpO1xuICBibG9ja0k0UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNFwiKTtcbiAgYmxvY2tKNFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjRcIik7XG4gIHJvd051bWJlcjVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNVwiKTtcbiAgYmxvY2tCNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjVcIik7XG4gIGJsb2NrQzVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM1XCIpO1xuICBibG9ja0Q1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENVwiKTtcbiAgYmxvY2tFNVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTVcIik7XG4gIGJsb2NrRjVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY1XCIpO1xuICBibG9ja0c1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNVwiKTtcbiAgYmxvY2tINVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDVcIik7XG4gIGJsb2NrSTVQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk1XCIpO1xuICBibG9ja0o1UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNVwiKTtcbiAgcm93TnVtYmVyNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE2XCIpO1xuICBibG9ja0I2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNlwiKTtcbiAgYmxvY2tDNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzZcIik7XG4gIGJsb2NrRDZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ2XCIpO1xuICBibG9ja0U2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNlwiKTtcbiAgYmxvY2tGNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjZcIik7XG4gIGJsb2NrRzZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc2XCIpO1xuICBibG9ja0g2UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINlwiKTtcbiAgYmxvY2tJNlBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTZcIik7XG4gIGJsb2NrSjZQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko2XCIpO1xuICByb3dOdW1iZXI3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTdcIik7XG4gIGJsb2NrQjdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI3XCIpO1xuICBibG9ja0M3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDN1wiKTtcbiAgYmxvY2tEN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDdcIik7XG4gIGJsb2NrRTdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU3XCIpO1xuICBibG9ja0Y3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGN1wiKTtcbiAgYmxvY2tHN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzdcIik7XG4gIGJsb2NrSDdQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg3XCIpO1xuICBibG9ja0k3UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJN1wiKTtcbiAgYmxvY2tKN1BsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjdcIik7XG4gIHJvd051bWJlcjhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBOFwiKTtcbiAgYmxvY2tCOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjhcIik7XG4gIGJsb2NrQzhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM4XCIpO1xuICBibG9ja0Q4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEOFwiKTtcbiAgYmxvY2tFOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRThcIik7XG4gIGJsb2NrRjhQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY4XCIpO1xuICBibG9ja0c4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHOFwiKTtcbiAgYmxvY2tIOFBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDhcIik7XG4gIGJsb2NrSThQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk4XCIpO1xuICBibG9ja0o4UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKOFwiKTtcbiAgcm93TnVtYmVyOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE5XCIpO1xuICBibG9ja0I5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOVwiKTtcbiAgYmxvY2tDOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzlcIik7XG4gIGJsb2NrRDlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ5XCIpO1xuICBibG9ja0U5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOVwiKTtcbiAgYmxvY2tGOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjlcIik7XG4gIGJsb2NrRzlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc5XCIpO1xuICBibG9ja0g5UGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOVwiKTtcbiAgYmxvY2tJOVBsYXllcjEuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTlcIik7XG4gIGJsb2NrSjlQbGF5ZXIxLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko5XCIpO1xuICByb3dOdW1iZXIxMFBsYXllcjEuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMTBcIik7XG4gIGJsb2NrQjEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMTBcIik7XG4gIGJsb2NrQzEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDMTBcIik7XG4gIGJsb2NrRDEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMTBcIik7XG4gIGJsb2NrRTEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMTBcIik7XG4gIGJsb2NrRjEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGMTBcIik7XG4gIGJsb2NrRzEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMTBcIik7XG4gIGJsb2NrSDEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMTBcIik7XG4gIGJsb2NrSTEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJMTBcIik7XG4gIGJsb2NrSjEwUGxheWVyMS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMTBcIik7XG5cbiAgcGxheWVyV3JhcHBlcjIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItd3JhcHBlclwiKTtcbiAgb3ZlcmxheTIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5LTJcIik7XG4gIHBsYXllcjJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci0yLWJvYXJkXCIpO1xuICBlbXB0eVNwYWNlMi5jbGFzc0xpc3QuYWRkKFwiZW1wdHktc3BhY2VcIik7XG4gIGNvbHVtbk51bWJlckFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJCUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyQ1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJFUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVyRlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICBjb2x1bW5OdW1iZXJIUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uLW51bWJlclwiKTtcbiAgY29sdW1uTnVtYmVySVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImNvbHVtbi1udW1iZXJcIik7XG4gIGNvbHVtbk51bWJlckpQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW4tbnVtYmVyXCIpO1xuICByb3dOdW1iZXIxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTFcIik7XG4gIGJsb2NrQjFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkIxXCIpO1xuICBibG9ja0MxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDMVwiKTtcbiAgYmxvY2tEMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDFcIik7XG4gIGJsb2NrRTFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkUxXCIpO1xuICBibG9ja0YxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGMVwiKTtcbiAgYmxvY2tHMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzFcIik7XG4gIGJsb2NrSDFQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkgxXCIpO1xuICBibG9ja0kxUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJMVwiKTtcbiAgYmxvY2tKMVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjFcIik7XG4gIHJvd051bWJlcjJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0EyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMlwiKTtcbiAgYmxvY2tCMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjJcIik7XG4gIGJsb2NrQzJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkMyXCIpO1xuICBibG9ja0QyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMlwiKTtcbiAgYmxvY2tFMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTJcIik7XG4gIGJsb2NrRjJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkYyXCIpO1xuICBibG9ja0cyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMlwiKTtcbiAgYmxvY2tIMlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDJcIik7XG4gIGJsb2NrSTJQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkkyXCIpO1xuICBibG9ja0oyUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMlwiKTtcbiAgcm93TnVtYmVyM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkEzXCIpO1xuICBibG9ja0IzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCM1wiKTtcbiAgYmxvY2tDM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzNcIik7XG4gIGJsb2NrRDNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQzXCIpO1xuICBibG9ja0UzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFM1wiKTtcbiAgYmxvY2tGM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjNcIik7XG4gIGJsb2NrRzNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkczXCIpO1xuICBibG9ja0gzUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIM1wiKTtcbiAgYmxvY2tJM1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTNcIik7XG4gIGJsb2NrSjNQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkozXCIpO1xuICByb3dOdW1iZXI0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTRcIik7XG4gIGJsb2NrQjRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI0XCIpO1xuICBibG9ja0M0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDNFwiKTtcbiAgYmxvY2tENFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDRcIik7XG4gIGJsb2NrRTRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU0XCIpO1xuICBibG9ja0Y0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGNFwiKTtcbiAgYmxvY2tHNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzRcIik7XG4gIGJsb2NrSDRQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg0XCIpO1xuICBibG9ja0k0UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJNFwiKTtcbiAgYmxvY2tKNFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjRcIik7XG4gIHJvd051bWJlcjVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBNVwiKTtcbiAgYmxvY2tCNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjVcIik7XG4gIGJsb2NrQzVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM1XCIpO1xuICBibG9ja0Q1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJENVwiKTtcbiAgYmxvY2tFNVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRTVcIik7XG4gIGJsb2NrRjVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY1XCIpO1xuICBibG9ja0c1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHNVwiKTtcbiAgYmxvY2tINVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDVcIik7XG4gIGJsb2NrSTVQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk1XCIpO1xuICBibG9ja0o1UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKNVwiKTtcbiAgcm93TnVtYmVyNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE2XCIpO1xuICBibG9ja0I2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCNlwiKTtcbiAgYmxvY2tDNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzZcIik7XG4gIGJsb2NrRDZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ2XCIpO1xuICBibG9ja0U2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFNlwiKTtcbiAgYmxvY2tGNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjZcIik7XG4gIGJsb2NrRzZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc2XCIpO1xuICBibG9ja0g2UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJINlwiKTtcbiAgYmxvY2tJNlBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTZcIik7XG4gIGJsb2NrSjZQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko2XCIpO1xuICByb3dOdW1iZXI3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwicm93LW51bWJlclwiKTtcbiAgYmxvY2tBN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQTdcIik7XG4gIGJsb2NrQjdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkI3XCIpO1xuICBibG9ja0M3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDN1wiKTtcbiAgYmxvY2tEN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRDdcIik7XG4gIGJsb2NrRTdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkU3XCIpO1xuICBibG9ja0Y3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGN1wiKTtcbiAgYmxvY2tHN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRzdcIik7XG4gIGJsb2NrSDdQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkg3XCIpO1xuICBibG9ja0k3UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJN1wiKTtcbiAgYmxvY2tKN1BsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSjdcIik7XG4gIHJvd051bWJlcjhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbnVtYmVyXCIpO1xuICBibG9ja0E4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBOFwiKTtcbiAgYmxvY2tCOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQjhcIik7XG4gIGJsb2NrQzhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkM4XCIpO1xuICBibG9ja0Q4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEOFwiKTtcbiAgYmxvY2tFOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRThcIik7XG4gIGJsb2NrRjhQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkY4XCIpO1xuICBibG9ja0c4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHOFwiKTtcbiAgYmxvY2tIOFBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSDhcIik7XG4gIGJsb2NrSThQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkk4XCIpO1xuICBibG9ja0o4UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKOFwiKTtcbiAgcm93TnVtYmVyOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkE5XCIpO1xuICBibG9ja0I5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCOVwiKTtcbiAgYmxvY2tDOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiQzlcIik7XG4gIGJsb2NrRDlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkQ5XCIpO1xuICBibG9ja0U5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFOVwiKTtcbiAgYmxvY2tGOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiRjlcIik7XG4gIGJsb2NrRzlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIkc5XCIpO1xuICBibG9ja0g5UGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIOVwiKTtcbiAgYmxvY2tJOVBsYXllcjIuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsIFwiSTlcIik7XG4gIGJsb2NrSjlQbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCBcIko5XCIpO1xuICByb3dOdW1iZXIxMFBsYXllcjIuY2xhc3NMaXN0LmFkZChcInJvdy1udW1iZXJcIik7XG4gIGJsb2NrQTEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJBMTBcIik7XG4gIGJsb2NrQjEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJCMTBcIik7XG4gIGJsb2NrQzEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJDMTBcIik7XG4gIGJsb2NrRDEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJEMTBcIik7XG4gIGJsb2NrRTEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJFMTBcIik7XG4gIGJsb2NrRjEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJGMTBcIik7XG4gIGJsb2NrRzEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJHMTBcIik7XG4gIGJsb2NrSDEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJIMTBcIik7XG4gIGJsb2NrSTEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJJMTBcIik7XG4gIGJsb2NrSjEwUGxheWVyMi5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgXCJKMTBcIik7XG5cbiAgcGxheWVyMlNoaXBzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLTItc2hpcHNcIik7XG4gIGNhcnJpZXIyLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIsIFwic2hpcFwiKTtcbiAgY2FycmllcjJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGNhcnJpZXIyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY2FycmllcjJMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjYXJyaWVyMkxpZmVCbG9jazUuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAyLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIsIFwic2hpcFwiKTtcbiAgYmF0dGxlc2hpcDJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBiYXR0bGVzaGlwMkxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIGJhdHRsZXNoaXAyTGlmZUJsb2NrMy5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgYmF0dGxlc2hpcDJMaWZlQmxvY2s0LmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMi5jbGFzc0xpc3QuYWRkKFwiY3J1aXNlclwiLCBcInNoaXBcIik7XG4gIGNydWlzZXIyTGlmZUJsb2NrMS5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgY3J1aXNlcjJMaWZlQmxvY2syLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBjcnVpc2VyMkxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHN1Ym1hcmluZTIuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiLCBcInNoaXBcIik7XG4gIHN1Ym1hcmluZTJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBzdWJtYXJpbmUyTGlmZUJsb2NrMi5jbGFzc0xpc3QuYWRkKFwibGlmZS1ibG9ja1wiKTtcbiAgc3VibWFyaW5lMkxpZmVCbG9jazMuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG4gIHBhdHJvbEJvYXQyLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2xCb2F0XCIsIFwic2hpcFwiKTtcbiAgcGF0cm9sQm9hdDJMaWZlQmxvY2sxLmNsYXNzTGlzdC5hZGQoXCJsaWZlLWJsb2NrXCIpO1xuICBwYXRyb2xCb2F0MkxpZmVCbG9jazIuY2xhc3NMaXN0LmFkZChcImxpZmUtYmxvY2tcIik7XG5cbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyB0byBkb21cbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckhlYWRlcik7XG4gIGhlYWRlckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUeHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZVNlY3Rpb24pO1xuICBnYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJXcmFwcGVyMSk7XG5cbiAgcGxheWVyV3JhcHBlcjEuYXBwZW5kQ2hpbGQocGxheWVyMVNoaXBzKTtcbiAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKGNhcnJpZXIxKTtcbiAgY2FycmllcjEuYXBwZW5kQ2hpbGQoY2FycmllcjFMaWZlQmxvY2sxKTtcbiAgY2FycmllcjEuYXBwZW5kQ2hpbGQoY2FycmllcjFMaWZlQmxvY2syKTtcbiAgY2FycmllcjEuYXBwZW5kQ2hpbGQoY2FycmllcjFMaWZlQmxvY2szKTtcbiAgY2FycmllcjEuYXBwZW5kQ2hpbGQoY2FycmllcjFMaWZlQmxvY2s0KTtcbiAgY2FycmllcjEuYXBwZW5kQ2hpbGQoY2FycmllcjFMaWZlQmxvY2s1KTtcblxuICBwbGF5ZXIxU2hpcHMuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDEpO1xuICBiYXR0bGVzaGlwMS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMUxpZmVCbG9jazEpO1xuICBiYXR0bGVzaGlwMS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMUxpZmVCbG9jazIpO1xuICBiYXR0bGVzaGlwMS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMUxpZmVCbG9jazMpO1xuICBiYXR0bGVzaGlwMS5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMUxpZmVCbG9jazQpO1xuXG4gIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChjcnVpc2VyMSk7XG4gIGNydWlzZXIxLmFwcGVuZENoaWxkKGNydWlzZXIxTGlmZUJsb2NrMSk7XG4gIGNydWlzZXIxLmFwcGVuZENoaWxkKGNydWlzZXIxTGlmZUJsb2NrMik7XG4gIGNydWlzZXIxLmFwcGVuZENoaWxkKGNydWlzZXIxTGlmZUJsb2NrMyk7XG5cbiAgcGxheWVyMVNoaXBzLmFwcGVuZENoaWxkKHN1Ym1hcmluZTEpO1xuICBzdWJtYXJpbmUxLmFwcGVuZENoaWxkKHN1Ym1hcmluZTFMaWZlQmxvY2sxKTtcbiAgc3VibWFyaW5lMS5hcHBlbmRDaGlsZChzdWJtYXJpbmUxTGlmZUJsb2NrMik7XG4gIHN1Ym1hcmluZTEuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMUxpZmVCbG9jazMpO1xuXG4gIHBsYXllcjFTaGlwcy5hcHBlbmRDaGlsZChwYXRyb2xCb2F0MSk7XG4gIHBhdHJvbEJvYXQxLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQxTGlmZUJsb2NrMSk7XG4gIHBhdHJvbEJvYXQxLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQxTGlmZUJsb2NrMik7XG5cbiAgcGxheWVyV3JhcHBlcjEuYXBwZW5kQ2hpbGQocGxheWVyMUJvYXJkKTtcbiAgcGxheWVyV3JhcHBlcjEuYXBwZW5kQ2hpbGQob3ZlcmxheTEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoZW1wdHlTcGFjZTEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQVBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJBUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJBUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJCUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckJQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckJQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckNQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyQ1BsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQ1BsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRFBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJEUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJEUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJFUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckVQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckVQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckZQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVyRlBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRlBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyR1BsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJHUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJHUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJIUGxheWVyMSk7XG4gIGNvbHVtbk51bWJlckhQbGF5ZXIxLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckhQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlcklQbGF5ZXIxKTtcbiAgY29sdW1uTnVtYmVySVBsYXllcjEuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySlBsYXllcjEpO1xuICBjb2x1bW5OdW1iZXJKUGxheWVyMS5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJKUGxheWVyMVR4dCk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjFQbGF5ZXIxKTtcbiAgcm93TnVtYmVyMVBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyMVBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMVBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMVBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIyUGxheWVyMSk7XG4gIHJvd051bWJlcjJQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjJQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTJQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjJQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyM1BsYXllcjEpO1xuICByb3dOdW1iZXIzUGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXIzUGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0EzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0czUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kzUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0ozUGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjRQbGF5ZXIxKTtcbiAgcm93TnVtYmVyNFBsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyNFBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNFBsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI1UGxheWVyMSk7XG4gIHJvd051bWJlcjVQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjVQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTVQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjVQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNlBsYXllcjEpO1xuICByb3dOdW1iZXI2UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI2UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k2UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o2UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjdQbGF5ZXIxKTtcbiAgcm93TnVtYmVyN1BsYXllcjEuYXBwZW5kQ2hpbGQocm93TnVtYmVyN1BsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJN1BsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKN1BsYXllcjEpO1xuXG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI4UGxheWVyMSk7XG4gIHJvd051bWJlcjhQbGF5ZXIxLmFwcGVuZENoaWxkKHJvd051bWJlcjhQbGF5ZXIxVHh0KTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQThQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRThQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDhQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSThQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjhQbGF5ZXIxKTtcblxuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyOVBsYXllcjEpO1xuICByb3dOdW1iZXI5UGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXI5UGxheWVyMVR4dCk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k5UGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o5UGxheWVyMSk7XG5cbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjEwUGxheWVyMSk7XG4gIHJvd051bWJlcjEwUGxheWVyMS5hcHBlbmRDaGlsZChyb3dOdW1iZXIxMFBsYXllcjFUeHQpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHMTBQbGF5ZXIxKTtcbiAgcGxheWVyMUJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDEwUGxheWVyMSk7XG4gIHBsYXllcjFCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kxMFBsYXllcjEpO1xuICBwbGF5ZXIxQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKMTBQbGF5ZXIxKTtcblxuICBnYW1lU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJXcmFwcGVyMik7XG4gIHBsYXllcldyYXBwZXIyLmFwcGVuZENoaWxkKHBsYXllcjJCb2FyZCk7XG4gIHBsYXllcldyYXBwZXIyLmFwcGVuZENoaWxkKG92ZXJsYXkyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGVtcHR5U3BhY2UyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckFQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyQVBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyQlBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJCUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJCUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJDUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckNQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckNQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckRQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyRFBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRFBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyRVBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJFUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJFUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJGUGxheWVyMik7XG4gIGNvbHVtbk51bWJlckZQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckZQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckdQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVyR1BsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVyR1BsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySFBsYXllcjIpO1xuICBjb2x1bW5OdW1iZXJIUGxheWVyMi5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJIUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5OdW1iZXJJUGxheWVyMik7XG4gIGNvbHVtbk51bWJlcklQbGF5ZXIyLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlcklQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk51bWJlckpQbGF5ZXIyKTtcbiAgY29sdW1uTnVtYmVySlBsYXllcjIuYXBwZW5kQ2hpbGQoY29sdW1uTnVtYmVySlBsYXllcjJUeHQpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIxUGxheWVyMik7XG4gIHJvd051bWJlcjFQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjFQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTFQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjFQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyMlBsYXllcjIpO1xuICByb3dOdW1iZXIyUGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXIyUGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0EyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0MyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0QyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0YyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0cyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0kyUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0oyUGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjNQbGF5ZXIyKTtcbiAgcm93TnVtYmVyM1BsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyM1BsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJM1BsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKM1BsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI0UGxheWVyMik7XG4gIHJvd051bWJlcjRQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjRQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTRQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjRQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyNVBsYXllcjIpO1xuICByb3dOdW1iZXI1UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI1UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k1UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o1UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjZQbGF5ZXIyKTtcbiAgcm93TnVtYmVyNlBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyNlBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tENlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tINlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJNlBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKNlBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXI3UGxheWVyMik7XG4gIHJvd051bWJlcjdQbGF5ZXIyLmFwcGVuZENoaWxkKHJvd051bWJlcjdQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQjdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQzdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRTdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRjdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSDdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSTdQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjdQbGF5ZXIyKTtcblxuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQocm93TnVtYmVyOFBsYXllcjIpO1xuICByb3dOdW1iZXI4UGxheWVyMi5hcHBlbmRDaGlsZChyb3dOdW1iZXI4UGxheWVyMlR4dCk7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0E4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0I4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0M4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Q4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0U4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0Y4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0c4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0g4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0k4UGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0o4UGxheWVyMik7XG5cbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKHJvd051bWJlcjlQbGF5ZXIyKTtcbiAgcm93TnVtYmVyOVBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyOVBsYXllcjJUeHQpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tBOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tCOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tEOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tFOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tHOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tIOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJOVBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tKOVBsYXllcjIpO1xuXG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChyb3dOdW1iZXIxMFBsYXllcjIpO1xuICByb3dOdW1iZXIxMFBsYXllcjIuYXBwZW5kQ2hpbGQocm93TnVtYmVyMTBQbGF5ZXIyVHh0KTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrQTEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0IxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tDMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRDEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0UxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tGMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrRzEwUGxheWVyMik7XG4gIHBsYXllcjJCb2FyZC5hcHBlbmRDaGlsZChibG9ja0gxMFBsYXllcjIpO1xuICBwbGF5ZXIyQm9hcmQuYXBwZW5kQ2hpbGQoYmxvY2tJMTBQbGF5ZXIyKTtcbiAgcGxheWVyMkJvYXJkLmFwcGVuZENoaWxkKGJsb2NrSjEwUGxheWVyMik7XG5cbiAgcGxheWVyV3JhcHBlcjIuYXBwZW5kQ2hpbGQocGxheWVyMlNoaXBzKTtcbiAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKGNhcnJpZXIyKTtcbiAgY2FycmllcjIuYXBwZW5kQ2hpbGQoY2FycmllcjJMaWZlQmxvY2sxKTtcbiAgY2FycmllcjIuYXBwZW5kQ2hpbGQoY2FycmllcjJMaWZlQmxvY2syKTtcbiAgY2FycmllcjIuYXBwZW5kQ2hpbGQoY2FycmllcjJMaWZlQmxvY2szKTtcbiAgY2FycmllcjIuYXBwZW5kQ2hpbGQoY2FycmllcjJMaWZlQmxvY2s0KTtcbiAgY2FycmllcjIuYXBwZW5kQ2hpbGQoY2FycmllcjJMaWZlQmxvY2s1KTtcblxuICBwbGF5ZXIyU2hpcHMuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDIpO1xuICBiYXR0bGVzaGlwMi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMkxpZmVCbG9jazEpO1xuICBiYXR0bGVzaGlwMi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMkxpZmVCbG9jazIpO1xuICBiYXR0bGVzaGlwMi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMkxpZmVCbG9jazMpO1xuICBiYXR0bGVzaGlwMi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMkxpZmVCbG9jazQpO1xuXG4gIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChjcnVpc2VyMik7XG4gIGNydWlzZXIyLmFwcGVuZENoaWxkKGNydWlzZXIyTGlmZUJsb2NrMSk7XG4gIGNydWlzZXIyLmFwcGVuZENoaWxkKGNydWlzZXIyTGlmZUJsb2NrMik7XG4gIGNydWlzZXIyLmFwcGVuZENoaWxkKGNydWlzZXIyTGlmZUJsb2NrMyk7XG5cbiAgcGxheWVyMlNoaXBzLmFwcGVuZENoaWxkKHN1Ym1hcmluZTIpO1xuICBzdWJtYXJpbmUyLmFwcGVuZENoaWxkKHN1Ym1hcmluZTJMaWZlQmxvY2sxKTtcbiAgc3VibWFyaW5lMi5hcHBlbmRDaGlsZChzdWJtYXJpbmUyTGlmZUJsb2NrMik7XG4gIHN1Ym1hcmluZTIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMkxpZmVCbG9jazMpO1xuXG4gIHBsYXllcjJTaGlwcy5hcHBlbmRDaGlsZChwYXRyb2xCb2F0Mik7XG4gIHBhdHJvbEJvYXQyLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQyTGlmZUJsb2NrMSk7XG4gIHBhdHJvbEJvYXQyLmFwcGVuZENoaWxkKHBhdHJvbEJvYXQyTGlmZUJsb2NrMik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzTGluZTEpO1xuICBjcmVkaXRzTGluZTEuYXBwZW5kQ2hpbGQoY3JlZGl0c0xpbmUxVHh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHNMaW5lMik7XG4gIGNyZWRpdHNMaW5lMi5hcHBlbmRDaGlsZChjcmVkaXRzTGluZTJUeHQpO1xufVxuZnVuY3Rpb24gZGlzcGxheVBsYXllclNoaXBzKFxuICBjYXJyaWVyQ29vcmRpbmF0ZXMsXG4gIGJhdHRsZXNoaXBDb29yZGluYXRlcyxcbiAgY3J1aXNlckNvb3JkaW5hdGVzLFxuICBzdWJtYXJpbmVDb29yZGluYXRlcyxcbiAgcGF0cm9sQm9hdENvb3JkaW5hdGVzXG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyZ3VtZW50c1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGFyZ3VtZW50c1tpXVtqXTtcbiAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjcGxheWVyLTEtYm9hcmQgPiAuJHtjb29yZGluYXRlfWBcbiAgICAgICk7XG4gICAgICBzaGlwQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDIxNjkxXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNaXNzKHRhcmdldGVkQmxvY2spIHtcbiAgdGFyZ2V0ZWRCbG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiNWY3ZWFcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhpdCh0YXJnZXRlZEJsb2NrKSB7XG4gIHRhcmdldGVkQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcExpZmVCbG9jayhzaGlwKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoc2hpcC5jaGlsZHJlbltpXSkuYmFja2dyb3VuZENvbG9yID09PVxuICAgICAgICBcInJnYig0NSwgMjEyLCAxOTEpXCIgfHxcbiAgICAgIHNoaXAuY2hpbGRyZW5baV0uc3R5bGUuYmFja2dyb3VuZCA9PT0gXCJyZ2IoNDUsIDIxMiwgMTkxKVwiXG4gICAgKSB7XG4gICAgICBzaGlwLmNoaWxkcmVuW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZChodW1hblR1cm4sIGNvbXB1dGVyVHVybikge1xuICBjb25zdCBvdmVybGF5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0xXCIpO1xuICBjb25zdCBvdmVybGF5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0yXCIpO1xuICBpZiAoaHVtYW5UdXJuID09PSB0cnVlICYmIGNvbXB1dGVyVHVybiA9PT0gZmFsc2UpIHtcbiAgICBvdmVybGF5MS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG92ZXJsYXkyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIGlmIChodW1hblR1cm4gPT09IGZhbHNlICYmIGNvbXB1dGVyVHVybiA9PT0gdHJ1ZSkge1xuICAgIG92ZXJsYXkxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBvdmVybGF5Mi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdhbWVCdWlsZGVyLFxuICBkaXNwbGF5UGxheWVyU2hpcHMsXG4gIGRpc3BsYXlNaXNzLFxuICBkaXNwbGF5SGl0LFxuICByZW1vdmVTaGlwTGlmZUJsb2NrLFxuICBoaWRlTm9uQWN0aXZlUGxheWVyQm9hcmQsXG59O1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgbGV0IGhpdHNUYWtlbiA9IDA7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBoaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpdHNUYWtlbisrO1xuICAgIH0sXG4gICAgaXNTdW5rOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaGl0c1Rha2VuID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZUJvYXJkKFxuICBjYXJyaWVyQ29vcmRpbmF0ZXMsXG4gIGJhdHRsZXNoaXBDb29yZGluYXRlcyxcbiAgY3J1aXNlckNvb3JkaW5hdGVzLFxuICBzdWJtYXJpbmVDb29yZGluYXRlcyxcbiAgcGF0cm9sQm9hdENvb3JkaW5hdGVzXG4pIHtcbiAgLy8gQ3JlYXRlIGJvYXJkXG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IFwiZW1wdHlcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoICYmIGkgPCA1OyBpKyspIHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICBcImNhcnJpZXJcIixcbiAgICBcImJhdHRsZXNoaXBcIixcbiAgICBcImNydWlzZXJcIixcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIFwicGF0cm9sQm9hdFwiLFxuICBdO1xuXG4gIC8vIE5lZWQgdG8gdGFrZSBjb29yZGluYXRlcyBvZiBzaGlwcywgYW5kIHJlcGxhY2UgXCJlbXB0eVwiIHZhbHVlcyBpbiBib2FyZCB3aXRoIGFwcHJvcHJpYXRlIHNoaXAgbmFtZXMgZm9yIGVhY2ggc2hpcCBjb29yZGluYXRlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcENvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBVc2UgcmVnZXggdG8gZXh0cmFjdCB4IGFuZCB5IGNvb3JkaW5hdGVzIGFuZCBzaGlwIG5hbWVcbiAgICAgIGNvbnN0IHJlZ2V4MSA9IC9bQS1KXS9pO1xuICAgICAgY29uc3QgcmVnZXgyID0gL1sxLTldXFxkKi87XG4gICAgICAvLyBDb252ZXJ0IHggY29vcmRpbmF0ZSB0byBhbiBhc2NpaSBudW1iZXIgYW5kIGNvbnZlcnQgdGhhdCB0byBhIG51bWJlciBmcm9tIDAgdG8gOVxuICAgICAgLy8gQ29udmVydCB5IGNvb3JkaW5hdGUgdG8gYSBudW1iZXIgZnJvbSAwIHRvIDlcbiAgICAgIGNvbnN0IHhDb29yZGluYXRlID1cbiAgICAgICAgc2hpcENvb3JkaW5hdGVzW2ldW2pdLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSBzaGlwQ29vcmRpbmF0ZXNbaV1bal0ubWF0Y2gocmVnZXgyKVswXSAtIDE7XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBOYW1lc1tpXTtcbiAgICAgIC8vIFJlcGxhY2UgXCJlbXB0eVwiIHZhbHVlIGluIGJvYXJkIGNvb3JkaW5hdGUgd2l0aCBzaGlwIG5hbWVcbiAgICAgIGJvYXJkW3hDb29yZGluYXRlXVt5Q29vcmRpbmF0ZV0gPSBzaGlwTmFtZTtcbiAgICB9XG4gIH1cbiAgLy8gQ3JlYXRlIHNoaXAgb2JqZWN0c1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgXCJjcnVpc2VyXCIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcInBhdHJvbEJvYXRcIik7XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2FycmllcjogY2FycmllcixcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwLFxuICAgIGNydWlzZXI6IGNydWlzZXIsXG4gICAgc3VibWFyaW5lOiBzdWJtYXJpbmUsXG4gICAgcGF0cm9sQm9hdDogcGF0cm9sQm9hdCxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uIChjb29yZGluYXRlKSB7XG4gICAgICAvLyBJbml0aWFsaXplIGFycmF5IHRvIGNvbnRhaW4gcmV0dXJuIHZhbHVlcyAoYXR0YWNrIHN0YXR1cyBhbmQgaGl0IHNoaXApXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgIC8vIENvbnZlcnQgeCBhbmQgeSBjb29yZGluYXRlcyB0byBudW1iZXJzIGZvciBib2FyZCBhcnJheVxuICAgICAgY29uc3QgcmVnZXgxID0gL1tBLUpdL2k7XG4gICAgICBjb25zdCByZWdleDIgPSAvWzEtOV1cXGQqLztcbiAgICAgIGNvbnN0IHggPSBjb29yZGluYXRlLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGUubWF0Y2gocmVnZXgyKVswXSAtIDE7XG5cbiAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgIHJlc3VsdC5wdXNoKFwibWlzc1wiKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldICE9PSBcIm1pc3NcIiAmJiBib2FyZFt4XVt5XSAhPT0gXCJoaXRcIikge1xuICAgICAgICAvLyBFeGVjdXRlIGF0dGFjayBvbiBzaGlwXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChjb29yZGluYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwc1tzaGlwTmFtZV0uaGl0KCk7XG4gICAgICAgICAgLy8gUmVwbGFjZSBoaXQgc2hpcCBpbiBib2FyZCB3aXRoIFwiaGl0XCJcbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgaWYgKHNoaXBzW3NoaXBOYW1lXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCJzaW5rXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJoaXRcIik7XG4gICAgICAgICAgcmVzdWx0LnB1c2goc2hpcE5hbWUpO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuazogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICBpZiAoc2hpcHNbc2hpcF0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyVHlwZSkge1xuICBsZXQgdHVybiA9IGZhbHNlO1xuXG4gIC8vIEFJIGJvYXJkIGFjY2Vzc1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgeCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KTtcbiAgICAgIGNvbnN0IHkgPSBqICsgMTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB4ICsgeTtcbiAgICAgIGJvYXJkW2ldW2pdID0gY29vcmRpbmF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBBSSBsaXN0IG9mIGxlZ2FsIG1vdmVzXG4gIGNvbnN0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZWdhbE1vdmVzLnB1c2goYm9hcmRbaV1bal0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFJIHRyaWFuZ3VsYXRpb24gYXJyYXkgKHN1Y2Nlc3NmdWwgaGl0cyBhcmUgcmVjb3JkZWRcbiAgLy8gdW50aWwgc2hpcCBpcyBkZXN0cm95ZWQuIFRoZW4gdGhleSBhcmUgZm9yZ290dGVuKVxuICBjb25zdCB0YXJnZXRlZFNoaXAgPSBbXTtcblxuICAvLyBBSSByZWNvcmRzIGF0dGFja2VkIGNvb3JkaW5hdGUsIHdoaWNoIHdpbGwgYmUgdXNlZCBpZiB0aGUgaGl0IGlzIGEgc3VjY2Vzc1xuICBsZXQgbGFzdEF0dGFjaztcblxuICBsZXQgYXR0YWNrO1xuICBsZXQgcmVjZWl2ZUF0dGFja0luZm8gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHBsYXllclR5cGUgPT09IFwiaHVtYW5cIikge1xuICAgIGF0dGFjayA9IGZ1bmN0aW9uIChhdHRhY2tDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZTtcbiAgICB9O1xuICB9XG4gIC8vIDEuIEFJIHNob3VsZCByYW5kb21seSBwcm9kdWNlIGEgY29vcmRpbmF0ZSB0byBhdHRhY2tcbiAgLy8gMi4gQUkgc2hvdWxkIHJlY29yZCBhbGwgcHJldmlvdXMgaGl0cywgYW5kIG9ubHkgcHJvZHVjZSBhIGNvb3JkaW5hdGUgdG8gYXR0YWNrIGJhc2VkIG9uIHRoZVxuICAvLyAuLiByZW1haW5pbmcgc3BhY2VzXG4gIC8vIDMuIEFJIHNob3VsZCBwcmlvcml0aXplIGF0dGFja2luZyBzcGFjZXMgYWRqYWNlbnQgdG8gc3VjY2Vzc2Z1bCBoaXRzXG4gIGlmIChwbGF5ZXJUeXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICBhdHRhY2sgPSBmdW5jdGlvbiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlKSB7XG4gICAgICBpZiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGF0dGFja0Nvb3JkaW5hdGU7XG4gICAgICAgIC8vIGlmIHRhcmdldGVkU2hpcCBhcnJheSBsZW5ndGggaXMgMSwgZ2V0IGEgcmFuZG9tIGFkamFjZW50IGNvb3JkaW5hdGUgKG1heCA0IGNob2ljZXMpXG4gICAgICAgIGlmICh0YXJnZXRlZFNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHJlZ2V4MSA9IC9bQS1KXS9pO1xuICAgICAgICAgIGNvbnN0IHJlZ2V4MiA9IC9bMS05XVxcZCovO1xuICAgICAgICAgIGNvbnN0IHggPSB0YXJnZXRlZFNoaXBbMF0ubWF0Y2gocmVnZXgxKVswXS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gICAgICAgICAgY29uc3QgeSA9IHRhcmdldGVkU2hpcFswXS5tYXRjaChyZWdleDIpWzBdIC0gMTtcblxuICAgICAgICAgIC8vIFJlY29yZCBhbGwgcG9zc2libGUgYWRqYWNlbnQgbW92ZXNcbiAgICAgICAgICBpZiAoYm9hcmRbeCArIDFdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeCArIDFdW3ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCArIDFdW3ldKTtcbiAgICAgICAgICBpZiAoYm9hcmRbeCAtIDFdICE9PSB1bmRlZmluZWQgJiYgYm9hcmRbeCAtIDFdW3ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgICAgICBpZiAoYm9hcmRbeF0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4XVt5ICsgMV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChib2FyZFt4XVt5ICsgMV0pO1xuICAgICAgICAgIGlmIChib2FyZFt4XSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3hdW3kgLSAxXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3hdW3kgLSAxXSk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgcG9zc2libGUgYWRqYWNlbnQgbW92ZSBpZiBub3QgcG9zc2libGVcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2ldID09PSB1bmRlZmluZWQpIHBvc3NpYmxlTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbGV0IGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGxlZ2FsTW92ZUNoZWNrOiBmb3IgKGxldCBqID0gMDsgaiA8IGxlZ2FsTW92ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaV0gPT09IGxlZ2FsTW92ZXNbal0pIHtcbiAgICAgICAgICAgICAgICBpc0xlZ2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhayBsZWdhbE1vdmVDaGVjaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTGVnYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hvb3NlIHJhbmRvbSBtb3ZlIGZyb20gbGlzdCBvZiBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlc1tcbiAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc3NpYmxlTW92ZXMubGVuZ3RoICsgMSkpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRhcmdldGVkU2hpcCBhcnJheSBpcyBncmVhdGVyIHRoYW4gMSwgZ2V0IGEgY29vcmRpbmF0ZSBvbiB0aGUgc2FtZSBsaW5lIGFzIHRob3NlXG4gICAgICAgIC8vIC4uIHJlY29yZGVkIGNvb3JkaW5hdGVzIGFuZCBpcyBhZGphY2VudCB0byBlaXRoZXIgb2YgdGhlIHJlY29yZGVkIGNvb3JkaW5hdGVzIGluIHRoZVxuICAgICAgICAvLyAuLiB0YXJnZXRlZFNoaXAgYXJyYXlcbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0ZWRTaGlwLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCByZWdleDEgPSAvW0EtSl0vaTtcbiAgICAgICAgICBjb25zdCByZWdleDIgPSAvWzEtOV1cXGQqLztcbiAgICAgICAgICAvLyBSZWNvcmQgYWxsIHRhcmdldGVkIHNoaXAgY29vcmRpbmF0ZXMgaW4gYXJyYXkgZm9ybVxuICAgICAgICAgIGNvbnN0IHhDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4Q29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAgICAgICAgdGFyZ2V0ZWRTaGlwW2ldLm1hdGNoKHJlZ2V4MSlbMF0uY2hhckNvZGVBdCgwKSAtIDY1XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgeUNvb3JkaW5hdGVzLnB1c2godGFyZ2V0ZWRTaGlwW2ldLm1hdGNoKHJlZ2V4MilbMF0gLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRXN0YWJsaXNoIGxpbmUgb2YgYXR0YWNrXG4gICAgICAgICAgY29uc3QgYWxsRXF1YWwgPSAoYXJyKSA9PiBhcnIuZXZlcnkoKHYpID0+IHYgPT09IGFyclswXSk7XG4gICAgICAgICAgY29uc3QgeENvb3JkaW5hdGVzQWxsRXF1YWwgPSBhbGxFcXVhbCh4Q29vcmRpbmF0ZXMpOyAvLyBFaXRoZXIgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgIGNvbnN0IHlDb29yZGluYXRlc0FsbEVxdWFsID0gYWxsRXF1YWwoeUNvb3JkaW5hdGVzKTsgLy8gRWl0aGVyIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAvLyBSZWNvcmQgYWxsIHBvc3NpYmxlIG1vdmVzXG4gICAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0geENvb3JkaW5hdGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeSA9IHlDb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNBbGxFcXVhbCkge1xuICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeF1beSArIDFdKTtcbiAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKGJvYXJkW3hdW3kgLSAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlDb29yZGluYXRlc0FsbEVxdWFsKSB7XG4gICAgICAgICAgICAgIGlmIChib2FyZFt4ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBib2FyZFt4ICsgMV1beV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCArIDFdW3ldKTtcbiAgICAgICAgICAgICAgaWYgKGJvYXJkW3ggLSAxXSAhPT0gdW5kZWZpbmVkICYmIGJvYXJkW3ggLSAxXVt5XSlcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVtb3ZlIHBvc3NpYmxlIGFkamFjZW50IG1vdmUgaWYgbm90IHBvc3NpYmxlXG4gICAgICAgICAgY29uc3QgaW1wb3NzaWJsZU1vdmVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocG9zc2libGVNb3Zlc1tpXSA9PT0gdW5kZWZpbmVkKSBwb3NzaWJsZU1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGxldCBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgICBsZWdhbE1vdmVDaGVjazogZm9yIChsZXQgaiA9IDA7IGogPCBsZWdhbE1vdmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2ldID09PSBsZWdhbE1vdmVzW2pdKSB7XG4gICAgICAgICAgICAgICAgaXNMZWdhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWsgbGVnYWxNb3ZlQ2hlY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpbXBvc3NpYmxlTW92ZXMucHVzaChwb3NzaWJsZU1vdmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbXBvc3NpYmxlTW92ZXMuaW5jbHVkZXMocG9zc2libGVNb3Zlc1tpXSkpIHtcbiAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hvb3NlIHJhbmRvbSBtb3ZlIGZyb20gbGlzdCBvZiBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgcG9zc2libGVNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmVzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UsIGdldCByYW5kb20gYmxvY2sgZnJvbSBsZWdhbE1vdmVzIGFycmF5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGF0dGFja0Nvb3JkaW5hdGUgPVxuICAgICAgICAgICAgbGVnYWxNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbE1vdmVzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0aGF0IGNvb3JkaW5hdGUgZnJvbSBsZWdhbE1vdmVzIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVnYWxNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhdHRhY2tDb29yZGluYXRlID09PSBsZWdhbE1vdmVzW2ldKSB7XG4gICAgICAgICAgICBsZWdhbE1vdmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXNzaWduIGxhc3RBdHRhY2sgdmFyaWFibGUgdGhlIHZhbHVlIG9mIHRoZSB0byBiZSBhdHRhY2tlZCBjb29yZGluYXRlXG4gICAgICAgIGxhc3RBdHRhY2sgPSBhdHRhY2tDb29yZGluYXRlO1xuICAgICAgICAvLyByZXR1cm4gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoYXQgY29vcmRpbmF0ZSBmcm9tIGxlZ2FsTW92ZXMgYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWdhbE1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGF0dGFja0Nvb3JkaW5hdGVPdmVycmlkZSA9PT0gbGVnYWxNb3Zlc1tpXSlcbiAgICAgICAgICAgIGxlZ2FsTW92ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFzc2lnbiBsYXN0QXR0YWNrIHZhcmlhYmxlIHRoZSB2YWx1ZSBvZiB0aGUgdG8gYmUgYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICBsYXN0QXR0YWNrID0gYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlO1xuICAgICAgICAvLyByZXR1cm4gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZU92ZXJyaWRlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVjZWl2ZUF0dGFja0luZm8gPSBmdW5jdGlvbiAocmVjZWl2ZWRTdGF0dXMpIHtcbiAgICAgIGlmIChyZWNlaXZlZFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgICB0YXJnZXRlZFNoaXAucHVzaChsYXN0QXR0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlZFN0YXR1cyA9PT0gXCJzaW5rXCIpIHtcbiAgICAgICAgdGFyZ2V0ZWRTaGlwLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldFR1cm46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0dXJuO1xuICAgIH0sXG4gICAgc2V0VHVybjogZnVuY3Rpb24gKGJvb2xlYW5WYWx1ZSkge1xuICAgICAgdHVybiA9IGJvb2xlYW5WYWx1ZTtcbiAgICB9LFxuICAgIGF0dGFjazogYXR0YWNrLFxuICAgIHJlY2VpdmVBdHRhY2tJbmZvOiByZWNlaXZlQXR0YWNrSW5mbyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplU2hpcFBvc2l0aW9ucygpIHtcbiAgY29uc3QgYm9hcmRTaXplID0gMTA7IC8vIFRoZSBzaXplIG9mIHRoZSBiYXR0bGVzaGlwIGJvYXJkXG4gIGNvbnN0IHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTsgLy8gVGhlIHNpemVzIG9mIHRoZSBzaGlwcyB0aGF0IG5lZWQgdG8gYmUgcGxhY2VkXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoYm9hcmRTaXplKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7IC8vIEluaXRpYWxpemUgdGhlIGJvYXJkIHdpdGggbnVsbCB2YWx1ZXNcbiAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBjYXJyaWVyQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgYmF0dGxlc2hpcENvb3JkaW5hdGUgPSBbXTtcbiAgY29uc3QgY3J1aXNlckNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHN1Ym1hcmluZUNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHBhdHJvbEJvYXRDb29yZGluYXRlcyA9IFtdO1xuICBzaGlwUG9zaXRpb25zLnB1c2goY2FycmllckNvb3JkaW5hdGVzKTtcbiAgc2hpcFBvc2l0aW9ucy5wdXNoKGJhdHRsZXNoaXBDb29yZGluYXRlKTtcbiAgc2hpcFBvc2l0aW9ucy5wdXNoKGNydWlzZXJDb29yZGluYXRlcyk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChzdWJtYXJpbmVDb29yZGluYXRlcyk7XG4gIHNoaXBQb3NpdGlvbnMucHVzaChwYXRyb2xCb2F0Q29vcmRpbmF0ZXMpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNoaXBTaXplID0gc2hpcFNpemVzW2ldO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyAvLyAwID0gaG9yaXpvbnRhbCwgMSA9IHZlcnRpY2FsXG5cbiAgICBsZXQgcm93LCBjb2w7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAvLyBob3Jpem9udGFsXG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkU2l6ZSAtIHNoaXBTaXplICsgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkU2l6ZSAtIHNoaXBTaXplICsgMSkpO1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBmaXRzIGluIHRoZSBjaG9zZW4gcG9zaXRpb25cbiAgICBsZXQgdmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwU2l6ZTsgaisrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9yaWVudGF0aW9uID09PSAwICYmXG4gICAgICAgIGJvYXJkW3Jvd11bY29sICsgal0gIT09IG51bGwgLy8gY2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgc2hpcCBpbiB0aGUgd2F5XG4gICAgICApIHtcbiAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG9yaWVudGF0aW9uID09PSAxICYmXG4gICAgICAgIGJvYXJkW3JvdyArIGpdW2NvbF0gIT09IG51bGwgLy8gY2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgc2hpcCBpbiB0aGUgd2F5XG4gICAgICApIHtcbiAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgcG9zaXRpb24gaXMgdmFsaWQsIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBib2FyZFxuICAgIGlmICh2YWxpZFBvc2l0aW9uKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBTaXplOyBqKyspIHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgYm9hcmRbcm93XVtjb2wgKyBqXSA9IGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9hcmRbcm93ICsgal1bY29sXSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlIHBvc2l0aW9uIGlzIG5vdCB2YWxpZCwgdHJ5IGFnYWluIHdpdGggdGhpcyBzaGlwXG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBib2FyZCBhbmQgZXh0cmFjdCB0aGUgc2hpcCBwb3NpdGlvbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChib2FyZFtpXVtqXSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB4ID0gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpO1xuICAgICAgICBjb25zdCB5ID0gaiArIDE7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB4ICsgeTtcbiAgICAgICAgc2hpcFBvc2l0aW9uc1tib2FyZFtpXVtqXV0ucHVzaChjb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcFBvc2l0aW9ucztcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIsIHJhbmRvbWl6ZVNoaXBQb3NpdGlvbnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZUJvYXJkLCBQbGF5ZXIsIHJhbmRvbWl6ZVNoaXBQb3NpdGlvbnMgfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuaW1wb3J0IHtcbiAgZ2FtZUJ1aWxkZXIsXG4gIGRpc3BsYXlQbGF5ZXJTaGlwcyxcbiAgZGlzcGxheU1pc3MsXG4gIGRpc3BsYXlIaXQsXG4gIHJlbW92ZVNoaXBMaWZlQmxvY2ssXG4gIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZCxcbn0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGdhbWVCdWlsZGVyKCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBodW1hbiBwbGF5ZXIgYW5kIGNvbXB1dGVyIHBsYXllci4gTWFrZSBodW1hbiBwbGF5ZXIgc3RhcnQgZmlyc3RcbiAgY29uc3QgaHVtYW4gPSBQbGF5ZXIoXCJodW1hblwiKTtcbiAgaHVtYW4uc2V0VHVybih0cnVlKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgY29tcHV0ZXIuc2V0VHVybihmYWxzZSk7XG5cbiAgLy8gUmFuZG9taXplIHNoaXAgcG9zaXRpb25zIGZvciBlYWNoIGJvYXJkXG4gIGNvbnN0IGdhbWVCb2FyZDEgPSByYW5kb21pemVTaGlwUG9zaXRpb25zKCk7XG4gIGNvbnN0IGdhbWVCb2FyZDIgPSByYW5kb21pemVTaGlwUG9zaXRpb25zKCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBodW1hbiBib2FyZCBhbmQgY29tcHV0ZXIgYm9hcmRcbiAgY29uc3QgY2FycmllckNvb3JkaW5hdGVzSHVtYW4gPSBnYW1lQm9hcmQxWzBdO1xuICBjb25zdCBiYXR0bGVzaGlwQ29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbMV07XG4gIGNvbnN0IGNydWlzZXJDb29yZGluYXRlc0h1bWFuID0gZ2FtZUJvYXJkMVsyXTtcbiAgY29uc3Qgc3VibWFyaW5lQ29vcmRpbmF0ZXNIdW1hbiA9IGdhbWVCb2FyZDFbM107XG4gIGNvbnN0IHBhdHJvbEJvYXRDb29yZGluYXRlc0h1bWFuID0gZ2FtZUJvYXJkMVs0XTtcblxuICBjb25zdCBjYXJyaWVyQ29vcmRpbmF0ZXNDb21wdXRlciA9IGdhbWVCb2FyZDJbMF07XG4gIGNvbnN0IGJhdHRsZXNoaXBDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMlsxXTtcbiAgY29uc3QgY3J1aXNlckNvb3JkaW5hdGVzQ29tcHV0ZXIgPSBnYW1lQm9hcmQyWzJdO1xuICBjb25zdCBzdWJtYXJpbmVDb29yZGluYXRlc0NvbXB1dGVyID0gZ2FtZUJvYXJkMlszXTtcbiAgY29uc3QgcGF0cm9sQm9hdENvb3JkaW5hdGVzQ29tcHV0ZXIgPSBnYW1lQm9hcmQyWzRdO1xuXG4gIGNvbnN0IGh1bWFuR2FtZUJvYXJkID0gR2FtZUJvYXJkKFxuICAgIGNhcnJpZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIGJhdHRsZXNoaXBDb29yZGluYXRlc0h1bWFuLFxuICAgIGNydWlzZXJDb29yZGluYXRlc0h1bWFuLFxuICAgIHN1Ym1hcmluZUNvb3JkaW5hdGVzSHVtYW4sXG4gICAgcGF0cm9sQm9hdENvb3JkaW5hdGVzSHVtYW5cbiAgKTtcblxuICBkaXNwbGF5UGxheWVyU2hpcHMoXG4gICAgY2FycmllckNvb3JkaW5hdGVzSHVtYW4sXG4gICAgYmF0dGxlc2hpcENvb3JkaW5hdGVzSHVtYW4sXG4gICAgY3J1aXNlckNvb3JkaW5hdGVzSHVtYW4sXG4gICAgc3VibWFyaW5lQ29vcmRpbmF0ZXNIdW1hbixcbiAgICBwYXRyb2xCb2F0Q29vcmRpbmF0ZXNIdW1hblxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKFxuICAgIGNhcnJpZXJDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIGJhdHRsZXNoaXBDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIGNydWlzZXJDb29yZGluYXRlc0NvbXB1dGVyLFxuICAgIHN1Ym1hcmluZUNvb3JkaW5hdGVzQ29tcHV0ZXIsXG4gICAgcGF0cm9sQm9hdENvb3JkaW5hdGVzQ29tcHV0ZXJcbiAgKTtcblxuICAvLyBDcmVhdGUgYXJyYXkgb2YgZW5lbXkgYm9hcmQgYmxvY2tzIHdpdGggZXZlbnQgbGlzdGVuZXJzIGFuZCByZXR1cm4gdGhhdCBhcnJheVxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLTItYm9hcmRcIik7XG4gIGNvbnN0IGNsaWNrZWRCbG9ja3MgPSBbXTtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgYmxvY2sgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvY2tcIikgJiZcbiAgICAgICFjbGlja2VkQmxvY2tzLmluY2x1ZGVzKGJsb2NrLmNsYXNzTGlzdFsxXSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gYmxvY2suY2xhc3NMaXN0WzFdO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoaW5kZXgpO1xuICAgICAgfSk7XG4gICAgICBjbGlja2VkQmxvY2tzLnB1c2goaW5kZXgpO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZChodW1hbi5nZXRUdXJuKCksIGNvbXB1dGVyLmdldFR1cm4oKSk7XG5cbiAgLy8gQmVnaW5uaW5nIG9mIGdhbWUgbG9vcFxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpOyAvLyB3YWl0IGZvciBwcm9taXNlcyB0byBiZSBhZGRlZFxuICAgICAgY29udGludWU7IC8vIHN0YXJ0IHRoZSB3aGlsZSBsb29wIGFnYWluXG4gICAgfVxuICAgIC8vIEh1bWFuIGF0dGFja1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICBwcm9taXNlcy5sZW5ndGggPSAwO1xuXG4gICAgY29uc3QgaHVtYW5BdHRhY2tCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI3BsYXllci0yLWJvYXJkID4gLiR7aHVtYW5BdHRhY2t9YFxuICAgICk7XG5cbiAgICAvLyBkbyBzdHVmZiB3aXRoIGh1bWFuIGF0dGFja1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrUmVzdWx0ID0gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhodW1hbkF0dGFjayk7IC8vIHNob3VsZCByZXR1cm4gaGl0IHN0YXR1cyBhbmQgc2hpcCBoaXRcbiAgICBpZiAoaHVtYW5BdHRhY2tSZXN1bHRbMF0gPT09IFwibWlzc1wiKSB7XG4gICAgICBodW1hbi5zZXRUdXJuKGZhbHNlKTtcbiAgICAgIGNvbXB1dGVyLnNldFR1cm4odHJ1ZSk7XG4gICAgICBkaXNwbGF5TWlzcyhodW1hbkF0dGFja0Jsb2NrKTtcbiAgICAgIGhpZGVOb25BY3RpdmVQbGF5ZXJCb2FyZChodW1hbi5nZXRUdXJuKCksIGNvbXB1dGVyLmdldFR1cm4oKSk7XG4gICAgfVxuXG4gICAgaWYgKGh1bWFuQXR0YWNrUmVzdWx0WzBdID09PSBcImhpdFwiIHx8IGh1bWFuQXR0YWNrUmVzdWx0WzBdID09PSBcInNpbmtcIikge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjcGxheWVyLTItc2hpcHMgPiAuJHtodW1hbkF0dGFja1Jlc3VsdFsxXX1gXG4gICAgICApO1xuXG4gICAgICByZW1vdmVTaGlwTGlmZUJsb2NrKHNoaXBCbG9ja3MpO1xuICAgICAgZGlzcGxheUhpdChodW1hbkF0dGFja0Jsb2NrKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcHV0ZXJHYW1lQm9hcmQuYXJlU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybjsgLy8gRXNjYXBlIGdhbWUgbG9vcFxuICAgIH1cblxuICAgIC8vIENvbXB1dGVyIGF0dGFja1xuICAgIGlmIChjb21wdXRlci5nZXRUdXJuKCkgJiYgIWh1bWFuLmdldFR1cm4oKSkge1xuICAgICAgbGV0IGNvbXB1dGVyUGxheUFnYWluID0gdHJ1ZTtcbiAgICAgIGRvIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7IC8vIGFkZCBhIGRlbGF5IG9mIDEgc2Vjb25kXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gY29tcHV0ZXIuYXR0YWNrKCk7XG4gICAgICAgIGlmIChjb21wdXRlckF0dGFjaykge1xuICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrUmVzdWx0ID1cbiAgICAgICAgICAgIGh1bWFuR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJBdHRhY2spOyAvLyBzaG91bGQgcmV0dXJuIGhpdCBzdGF0dXMgYW5kIHNoaXAgaGl0XG4gICAgICAgICAgY29tcHV0ZXIucmVjZWl2ZUF0dGFja0luZm8oY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0pO1xuXG4gICAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2tCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgI3BsYXllci0xLWJvYXJkID4gLiR7Y29tcHV0ZXJBdHRhY2t9YFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBodW1hbi5zZXRUdXJuKHRydWUpO1xuICAgICAgICAgICAgY29tcHV0ZXIuc2V0VHVybihmYWxzZSk7XG4gICAgICAgICAgICBkaXNwbGF5TWlzcyhjb21wdXRlckF0dGFja0Jsb2NrKTtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpOyAvLyBhZGQgYSBkZWxheSBvZiAxIHNlY29uZFxuICAgICAgICAgICAgaGlkZU5vbkFjdGl2ZVBsYXllckJvYXJkKGh1bWFuLmdldFR1cm4oKSwgY29tcHV0ZXIuZ2V0VHVybigpKTtcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheUFnYWluID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2tSZXN1bHRbMF0gPT09IFwiaGl0XCIgfHxcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrUmVzdWx0WzBdID09PSBcInNpbmtcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAjcGxheWVyLTEtc2hpcHMgPiAuJHtjb21wdXRlckF0dGFja1Jlc3VsdFsxXX1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZW1vdmVTaGlwTGlmZUJsb2NrKHNoaXBCbG9ja3MpO1xuICAgICAgICAgICAgZGlzcGxheUhpdChjb21wdXRlckF0dGFja0Jsb2NrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaHVtYW5HYW1lQm9hcmQuYXJlU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRXNjYXBlIGdhbWUgbG9vcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoY29tcHV0ZXJQbGF5QWdhaW4gPT09IHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG5nYW1lTG9vcCgpO1xuXG5jb25zb2xlLmxvZyhyYW5kb21pemVTaGlwUG9zaXRpb25zKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9