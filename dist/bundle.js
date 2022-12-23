/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Roboto\";\n  background-color: #2d2e2f;\n  color: grey;\n  /* outline: 2px solid red; */\n}\n\n#a3 {\n  /* color: grey; */\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n}\n\n.zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title {\n  padding: 4vh 1vw;\n  font-size: 4rem;\n}\n\n#boards {\n  margin-top: 5vh;\n  display: flex;\n  width: 100vw;\n  justify-content: space-around;\n}\n\n.player {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.player div {\n  outline: solid grey 1px;\n  display: flex;\n  justify-content: center;\n  padding: 1.5vh 1.2vw;\n  background-color: darkblue;\n  color: darkblue;\n  user-select: none;\n}\n\n#player2 div {\n  cursor: pointer;\n}\n\n#player2 div:hover {\n  transform: scale(1.2);\n  background-color: violet;\n  color: violet;\n}\n\n.hidden {\n  display: none;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */\n  font-size: 6rem;\n}\n\n/* Modal Content */\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n\n#newGame {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n#buttonNewGame {\n  background-color: #596d48;\n  cursor: pointer;\n  color: white;\n  border: 0px solid;\n  border-radius: 4px;\n  padding: 10px 35px;\n  box-shadow: #cbd0d8 1.95px 1.95px 2.6px;\n}\n", "",{"version":3,"sources":["webpack://./src/dom/style.css"],"names":[],"mappings":"AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,kBAAkB,EAAE,wBAAwB;EAC5C,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;EAC3D,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,uCAAuC;AACzC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n\n* {\n  font-family: \"Roboto\";\n  background-color: #2d2e2f;\n  color: grey;\n  /* outline: 2px solid red; */\n}\n\n#a3 {\n  /* color: grey; */\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n}\n\n.zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title {\n  padding: 4vh 1vw;\n  font-size: 4rem;\n}\n\n#boards {\n  margin-top: 5vh;\n  display: flex;\n  width: 100vw;\n  justify-content: space-around;\n}\n\n.player {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.player div {\n  outline: solid grey 1px;\n  display: flex;\n  justify-content: center;\n  padding: 1.5vh 1.2vw;\n  background-color: darkblue;\n  color: darkblue;\n  user-select: none;\n}\n\n#player2 div {\n  cursor: pointer;\n}\n\n#player2 div:hover {\n  transform: scale(1.2);\n  background-color: violet;\n  color: violet;\n}\n\n.hidden {\n  display: none;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */\n  font-size: 6rem;\n}\n\n/* Modal Content */\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n\n#newGame {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n#buttonNewGame {\n  background-color: #596d48;\n  cursor: pointer;\n  color: white;\n  border: 0px solid;\n  border-radius: 4px;\n  padding: 10px 35px;\n  box-shadow: #cbd0d8 1.95px 1.95px 2.6px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dom/style.css":
/*!***************************!*\
  !*** ./src/dom/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/index.js */ "./src/dom/index.js");


// Ship factory function
const Ship = (shipLength) => {
  let numHits = 0;
  const isSunk = () => {
    return numHits >= shipLength;
  };
  const hit = () => {
    numHits += 1;
  };
  const showHits = () => {
    return numHits;
  };
  return { showHits, isSunk, hit };
};

// Gameboard factory function
const Gameboard = () => {
  // Ship types: 1-Carrier, 2-Battleship, 3-Destroyer, 4-Submarine
  // 5-Patrol Boat
  const shipSizes = [5, 4, 3, 3, 2];
  // Create a 10 x 10 board
  let map_ships = new Array(10);
  let map_shoots = new Array(10);
  for (let i = 0; i < map_ships.length; i++) {
    map_ships[i] = new Array(10);
    const falses = new Array(10);
    falses.fill(false);
    map_shoots[i] = falses;
  }
  // Create an array to store all ships objects on the board
  const ships = [];

  const placeShip = (shipType, startCoords, orientation) => {
    if (shipType < 1 || shipType > 5) {
      throw "Invalid ship type";
    }
    const shipSize = shipSizes[shipType - 1];
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (startCoords.some(outsideBoard)) {
      throw "Invalid start coordinates";
    }
    if (orientation == "h") {
      const endCoords = [startCoords[0] + shipSize, startCoords[1]];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be place within the board limits";
      } else {
        ships.push(Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          map_ships[startCoords[0]][startCoords[1] + i] = ships.length;
        }
      }
    } else if (orientation == "v") {
      const endCoords = [startCoords[0], startCoords[1] + shipSize];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be placed within the board limits";
      } else {
        ships.push(Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          map_ships[startCoords[0] + i][startCoords[1]] = ships.length;
        }
      }
    }
  };

  const getShipsMap = () => {
    return map_ships;
  };

  const getShootsMap = () => {
    return map_shoots;
  };

  const receiveAttack = (attackCoords, playerName) => {
    // Handle the case of cell ID instead of cell coordinates
    // Return codes:
    // 0: "The attack missed all ships!"
    // 1: "The attack has hit a ship!"
    // 2: "The attack has hit and sunk a ship!"
    const nonDigit = /\D/;
    let aCoords = "";
    if (nonDigit.test(attackCoords[0])) {
      const cellNum = attackCoords.match(/\d/g).join("");
      aCoords = [(cellNum - (cellNum % 10)) / 10, cellNum % 10];
    } else {
      aCoords = attackCoords;
    }
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (aCoords.some(outsideBoard)) {
      throw "Invalid attack coordinates";
    }
    if (map_shoots[aCoords[0]][aCoords[1]] === true) {
      throw "You can't attack the same coordinates twice";
    }
    map_shoots[aCoords[0]][aCoords[1]] = true;
    const attackedShipID = map_ships[aCoords[0]][aCoords[1]];
    if (typeof attackedShipID == "undefined") return 0;
    else {
      const hitShip = ships[attackedShipID - 1];
      hitShip.hit();
      if (hitShip.isSunk()) {
        // Generate the coordinates of the sunk ship to change its color
        let sunkShipCoords = [];
        for (let i = 0; i < map_ships.length; i++) {
          for (let j = 0; j < map_ships[0].length; j++)
            if (map_ships[i][j] == attackedShipID) sunkShipCoords.push([i, j]);
        }
        _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.domInter.colorSunkShip(sunkShipCoords, playerName);
        return 2;
      } else return 1;
    }
  };

  const allSunk = () => {
    const sunkShips = ships.map((elem) => elem.isSunk());
    return sunkShips.every(Boolean);
  };

  return { getShipsMap, getShootsMap, placeShip, receiveAttack, allSunk };
};

// Player factory function
const Player = (name = null) => {
  // Players can attack other players board
  // Players know which moves have already been made to avoid repeating
  const board = Gameboard();
  const attack = (opShootsMap) => {
    let attackCoords = null;
    opShootsMap.forEach((row, indRow) => {
      if (attackCoords == null) {
        row.forEach((pos, indCol) => {
          if (attackCoords == null) {
            if (pos == false) {
              // Attack the first unattacked position
              attackCoords = [indRow, indCol];
            }
          }
        });
      }
    });
    return attackCoords;
  };
  return { board, attack, name };
};

// Module that controls the game flow
const gameLoop = (() => {
  // Initialize DOM
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.domInter.renderUI();
  // Initialize player 1 and 2
  const player1 = Player("Player 1");
  const player2 = Player("Player 2");
  // hardcode some ships on p1 and p2 boards
  player1.board.placeShip(1, [0, 0], "h");
  player1.board.placeShip(1, [1, 3], "h");
  player2.board.placeShip(1, [1, 1], "v");
  //player2.board.placeShip(1, [0, 7], "v");
  let activePlayer = player1;
  return { player1, player2, activePlayer };
})();




/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domInter": () => (/* binding */ domInter)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/dom/style.css");
/* harmony import */ var _app_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/index.js */ "./src/app/index.js");

//import "@mdi/font/css/materialdesignicons.css";


// Create module domInter to interact with the DOM and create UI
const domInter = (() => {
  const announceWinner = (playerName) => {
    // Show the modal
    let modal = document.getElementById("myModal");
    let modalText = document.querySelector(".modal-content > p");
    modalText.textContent = `${playerName} is the winner!`;
    modal.style.display = "block";
    // Click anywhere to start a new game
    const button = document.getElementById("buttonNewGame");
    button.addEventListener("click", () => {
      location.reload();
    });
  };
  const renderUI = () => {
    const plainHTML = `
      <div id="content">
        <div id="boards">
          <div class="zone">
            <div class="title">Player 1</div>
            <div id="player1" class="player"></div>
          </div>
          <div class="zone">
            <div class="title">Computer</div>  
            <div id="player2" class="player"></div>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
      <!-- Modal content -->
        <div class="modal-content">
          <p></p>
          <div id="newGame">
            <button id="buttonNewGame">New Game</button>
          </div>
        </div>
      </div>`;
    document.body.innerHTML = plainHTML;
    const gridP1 = document.getElementById("player1");
    const gridP2 = document.getElementById("player2");
    const evListen = () => {
      const cellID = event.target.id;
      const res = _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player2.board.receiveAttack(
        cellID,
        _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player2.name
      );
      // Change cell color depending on attack result
      if (res == 0) {
        event.target.style.backgroundColor = "grey";
      } else if (res == 1) {
        event.target.style.backgroundColor = "red";
      } else if (res == 2) {
        event.target.style.backgroundColor = "purple";
        // Check if this was last floating ship
        if (_app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player2.board.allSunk()) {
          announceWinner(_app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player1.name);
        }
      }
      event.target.style.color = event.target.style.backgroundColor;
      // Wait 1 second and make computer attack player 1
      const wait1Sec = new Promise((r) => setTimeout(r, 1000));
      wait1Sec.then(() => {
        // Generate automatic attack coords
        const attackCoords = _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player2.attack(
          _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player1.board.getShootsMap()
        );
        // Attack player1 using the coords
        const res2 = _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player1.board.receiveAttack(
          attackCoords,
          _app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player1.name
        );
        // Change player 1 cell color depending on attack results,
        // change from coordinates to node id
        const cellInt = 10 * attackCoords[0] + attackCoords[1];
        const cell2ID = `a${cellInt}`;
        const attackedCell = document.getElementById(cell2ID);
        if (res2 == 0) {
          attackedCell.style.backgroundColor = "grey";
          attackedCell.style.color = "grey";
        } else if (res2 == 1) {
          attackedCell.style.backgroundColor = "red";
          attackedCell.style.color = "red";
        } else if (res2 == 2) {
          attackedCell.style.backgroundColor = "purple";
          attackedCell.style.color = "purple";
          // Check if this was last floating ship
          if (_app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player1.board.allSunk()) {
            announceWinner(_app_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop.player2.name);
          }
        }
      });
    };
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `a${i}`;
      cell.textContent = cell.id;
      gridP1.appendChild(cell);
    }
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `b${i}`;
      cell.textContent = cell.id;
      // Add click listener to register attacks
      cell.addEventListener("click", evListen);
      gridP2.appendChild(cell);
    }
  };
  const colorSunkShip = (coordsSet, playerName) => {
    coordsSet.forEach((coords) => {
      // change from coordinates to node id
      const cellInt = 10 * coords[0] + coords[1];
      let cell2ID = "";
      if (playerName == "Player 1") {
        cell2ID = `a${cellInt}`;
      }
      if (playerName == "Player 2") {
        cell2ID = `b${cellInt}`;
      }
      const cell = document.getElementById(cell2ID);
      cell.style.backgroundColor = "purple";
      cell.style.color = "purple";
    });
  };
  // Player 1 is active at start
  return {
    renderUI,
    colorSunkShip,
  };
})();




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
/* harmony import */ var _app_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/index.js */ "./src/app/index.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/index.js */ "./src/dom/index.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20vc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS9zdHlsZS5jc3M/YmI1ZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmUyZjtcXG4gIGNvbG9yOiBncmV5O1xcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuI2EzIHtcXG4gIC8qIGNvbG9yOiBncmV5OyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi56b25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDR2aCAxdnc7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNib2FyZHMge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ucGxheWVyIGRpdiB7XFxuICBvdXRsaW5lOiBzb2xpZCBncmV5IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXZoIDEuMnZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogZGFya2JsdWU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3BsYXllcjIgZGl2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsYXllcjIgZGl2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcXG4gIGNvbG9yOiB2aW9sZXQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3R2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jYnV0dG9uTmV3R2FtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2ZDQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxuICBib3gtc2hhZG93OiAjY2JkMGQ4IDEuOTVweCAxLjk1cHggMi42cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9kb20vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7RUFDM0QsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cXFwiKTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJlMmY7XFxuICBjb2xvcjogZ3JleTtcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbiNhMyB7XFxuICAvKiBjb2xvcjogZ3JleTsgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uem9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nOiA0dmggMXZ3O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnBsYXllciBkaXYge1xcbiAgb3V0bGluZTogc29saWQgZ3JleSAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjV2aCAxLjJ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNwbGF5ZXIyIGRpdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwbGF5ZXIyIGRpdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxuICBjb2xvcjogdmlvbGV0O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ld0dhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI2J1dHRvbk5ld0dhbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NmQ0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMHB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMTBweCAzNXB4O1xcbiAgYm94LXNoYWRvdzogI2NiZDBkOCAxLjk1cHggMS45NXB4IDIuNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRvbUludGVyIH0gZnJvbSBcIi4uL2RvbS9pbmRleC5qc1wiO1xuXG4vLyBTaGlwIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IFNoaXAgPSAoc2hpcExlbmd0aCkgPT4ge1xuICBsZXQgbnVtSGl0cyA9IDA7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtSGl0cyA+PSBzaGlwTGVuZ3RoO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgbnVtSGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBzaG93SGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtSGl0cztcbiAgfTtcbiAgcmV0dXJuIHsgc2hvd0hpdHMsIGlzU3VuaywgaGl0IH07XG59O1xuXG4vLyBHYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBTaGlwIHR5cGVzOiAxLUNhcnJpZXIsIDItQmF0dGxlc2hpcCwgMy1EZXN0cm95ZXIsIDQtU3VibWFyaW5lXG4gIC8vIDUtUGF0cm9sIEJvYXRcbiAgY29uc3Qgc2hpcFNpemVzID0gWzUsIDQsIDMsIDMsIDJdO1xuICAvLyBDcmVhdGUgYSAxMCB4IDEwIGJvYXJkXG4gIGxldCBtYXBfc2hpcHMgPSBuZXcgQXJyYXkoMTApO1xuICBsZXQgbWFwX3Nob290cyA9IG5ldyBBcnJheSgxMCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwX3NoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwX3NoaXBzW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICBjb25zdCBmYWxzZXMgPSBuZXcgQXJyYXkoMTApO1xuICAgIGZhbHNlcy5maWxsKGZhbHNlKTtcbiAgICBtYXBfc2hvb3RzW2ldID0gZmFsc2VzO1xuICB9XG4gIC8vIENyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSBhbGwgc2hpcHMgb2JqZWN0cyBvbiB0aGUgYm9hcmRcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcFR5cGUsIHN0YXJ0Q29vcmRzLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGlmIChzaGlwVHlwZSA8IDEgfHwgc2hpcFR5cGUgPiA1KSB7XG4gICAgICB0aHJvdyBcIkludmFsaWQgc2hpcCB0eXBlXCI7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBTaXplID0gc2hpcFNpemVzW3NoaXBUeXBlIC0gMV07XG4gICAgY29uc3Qgb3V0c2lkZUJvYXJkID0gKHYpID0+IHYgPCAwIHx8IHYgPj0gMTA7XG4gICAgaWYgKHN0YXJ0Q29vcmRzLnNvbWUob3V0c2lkZUJvYXJkKSkge1xuICAgICAgdGhyb3cgXCJJbnZhbGlkIHN0YXJ0IGNvb3JkaW5hdGVzXCI7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSBcImhcIikge1xuICAgICAgY29uc3QgZW5kQ29vcmRzID0gW3N0YXJ0Q29vcmRzWzBdICsgc2hpcFNpemUsIHN0YXJ0Q29vcmRzWzFdXTtcbiAgICAgIC8vIENoZWNrIHRoYXQgdGhlIHNoaXAgaXMgcGxhY2VkIHdpdGhpbiB0aGUgYm9hcmQgbGltaXRzXG4gICAgICBpZiAoZW5kQ29vcmRzLnNvbWUob3V0c2lkZUJvYXJkKSkge1xuICAgICAgICB0aHJvdyBcIlRoZSBzaGlwIG11c3QgYmUgcGxhY2Ugd2l0aGluIHRoZSBib2FyZCBsaW1pdHNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzLnB1c2goU2hpcChzaGlwU2l6ZXNbc2hpcFR5cGUgLSAxXSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICBtYXBfc2hpcHNbc3RhcnRDb29yZHNbMF1dW3N0YXJ0Q29vcmRzWzFdICsgaV0gPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09IFwidlwiKSB7XG4gICAgICBjb25zdCBlbmRDb29yZHMgPSBbc3RhcnRDb29yZHNbMF0sIHN0YXJ0Q29vcmRzWzFdICsgc2hpcFNpemVdO1xuICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgc2hpcCBpcyBwbGFjZWQgd2l0aGluIHRoZSBib2FyZCBsaW1pdHNcbiAgICAgIGlmIChlbmRDb29yZHMuc29tZShvdXRzaWRlQm9hcmQpKSB7XG4gICAgICAgIHRocm93IFwiVGhlIHNoaXAgbXVzdCBiZSBwbGFjZWQgd2l0aGluIHRoZSBib2FyZCBsaW1pdHNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzLnB1c2goU2hpcChzaGlwU2l6ZXNbc2hpcFR5cGUgLSAxXSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICBtYXBfc2hpcHNbc3RhcnRDb29yZHNbMF0gKyBpXVtzdGFydENvb3Jkc1sxXV0gPSBzaGlwcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcHNNYXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1hcF9zaGlwcztcbiAgfTtcblxuICBjb25zdCBnZXRTaG9vdHNNYXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1hcF9zaG9vdHM7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZHMsIHBsYXllck5hbWUpID0+IHtcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugb2YgY2VsbCBJRCBpbnN0ZWFkIG9mIGNlbGwgY29vcmRpbmF0ZXNcbiAgICAvLyBSZXR1cm4gY29kZXM6XG4gICAgLy8gMDogXCJUaGUgYXR0YWNrIG1pc3NlZCBhbGwgc2hpcHMhXCJcbiAgICAvLyAxOiBcIlRoZSBhdHRhY2sgaGFzIGhpdCBhIHNoaXAhXCJcbiAgICAvLyAyOiBcIlRoZSBhdHRhY2sgaGFzIGhpdCBhbmQgc3VuayBhIHNoaXAhXCJcbiAgICBjb25zdCBub25EaWdpdCA9IC9cXEQvO1xuICAgIGxldCBhQ29vcmRzID0gXCJcIjtcbiAgICBpZiAobm9uRGlnaXQudGVzdChhdHRhY2tDb29yZHNbMF0pKSB7XG4gICAgICBjb25zdCBjZWxsTnVtID0gYXR0YWNrQ29vcmRzLm1hdGNoKC9cXGQvZykuam9pbihcIlwiKTtcbiAgICAgIGFDb29yZHMgPSBbKGNlbGxOdW0gLSAoY2VsbE51bSAlIDEwKSkgLyAxMCwgY2VsbE51bSAlIDEwXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYUNvb3JkcyA9IGF0dGFja0Nvb3JkcztcbiAgICB9XG4gICAgY29uc3Qgb3V0c2lkZUJvYXJkID0gKHYpID0+IHYgPCAwIHx8IHYgPj0gMTA7XG4gICAgaWYgKGFDb29yZHMuc29tZShvdXRzaWRlQm9hcmQpKSB7XG4gICAgICB0aHJvdyBcIkludmFsaWQgYXR0YWNrIGNvb3JkaW5hdGVzXCI7XG4gICAgfVxuICAgIGlmIChtYXBfc2hvb3RzW2FDb29yZHNbMF1dW2FDb29yZHNbMV1dID09PSB0cnVlKSB7XG4gICAgICB0aHJvdyBcIllvdSBjYW4ndCBhdHRhY2sgdGhlIHNhbWUgY29vcmRpbmF0ZXMgdHdpY2VcIjtcbiAgICB9XG4gICAgbWFwX3Nob290c1thQ29vcmRzWzBdXVthQ29vcmRzWzFdXSA9IHRydWU7XG4gICAgY29uc3QgYXR0YWNrZWRTaGlwSUQgPSBtYXBfc2hpcHNbYUNvb3Jkc1swXV1bYUNvb3Jkc1sxXV07XG4gICAgaWYgKHR5cGVvZiBhdHRhY2tlZFNoaXBJRCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gMDtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGhpdFNoaXAgPSBzaGlwc1thdHRhY2tlZFNoaXBJRCAtIDFdO1xuICAgICAgaGl0U2hpcC5oaXQoKTtcbiAgICAgIGlmIChoaXRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgc3VuayBzaGlwIHRvIGNoYW5nZSBpdHMgY29sb3JcbiAgICAgICAgbGV0IHN1bmtTaGlwQ29vcmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwX3NoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXBfc2hpcHNbMF0ubGVuZ3RoOyBqKyspXG4gICAgICAgICAgICBpZiAobWFwX3NoaXBzW2ldW2pdID09IGF0dGFja2VkU2hpcElEKSBzdW5rU2hpcENvb3Jkcy5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tSW50ZXIuY29sb3JTdW5rU2hpcChzdW5rU2hpcENvb3JkcywgcGxheWVyTmFtZSk7XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgfSBlbHNlIHJldHVybiAxO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtTaGlwcyA9IHNoaXBzLm1hcCgoZWxlbSkgPT4gZWxlbS5pc1N1bmsoKSk7XG4gICAgcmV0dXJuIHN1bmtTaGlwcy5ldmVyeShCb29sZWFuKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRTaGlwc01hcCwgZ2V0U2hvb3RzTWFwLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbn07XG5cbi8vIFBsYXllciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBQbGF5ZXIgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgLy8gUGxheWVycyBjYW4gYXR0YWNrIG90aGVyIHBsYXllcnMgYm9hcmRcbiAgLy8gUGxheWVycyBrbm93IHdoaWNoIG1vdmVzIGhhdmUgYWxyZWFkeSBiZWVuIG1hZGUgdG8gYXZvaWQgcmVwZWF0aW5nXG4gIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGF0dGFjayA9IChvcFNob290c01hcCkgPT4ge1xuICAgIGxldCBhdHRhY2tDb29yZHMgPSBudWxsO1xuICAgIG9wU2hvb3RzTWFwLmZvckVhY2goKHJvdywgaW5kUm93KSA9PiB7XG4gICAgICBpZiAoYXR0YWNrQ29vcmRzID09IG51bGwpIHtcbiAgICAgICAgcm93LmZvckVhY2goKHBvcywgaW5kQ29sKSA9PiB7XG4gICAgICAgICAgaWYgKGF0dGFja0Nvb3JkcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocG9zID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vIEF0dGFjayB0aGUgZmlyc3QgdW5hdHRhY2tlZCBwb3NpdGlvblxuICAgICAgICAgICAgICBhdHRhY2tDb29yZHMgPSBbaW5kUm93LCBpbmRDb2xdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGF0dGFja0Nvb3JkcztcbiAgfTtcbiAgcmV0dXJuIHsgYm9hcmQsIGF0dGFjaywgbmFtZSB9O1xufTtcblxuLy8gTW9kdWxlIHRoYXQgY29udHJvbHMgdGhlIGdhbWUgZmxvd1xuY29uc3QgZ2FtZUxvb3AgPSAoKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIERPTVxuICBkb21JbnRlci5yZW5kZXJVSSgpO1xuICAvLyBJbml0aWFsaXplIHBsYXllciAxIGFuZCAyXG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJQbGF5ZXIgMVwiKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcihcIlBsYXllciAyXCIpO1xuICAvLyBoYXJkY29kZSBzb21lIHNoaXBzIG9uIHAxIGFuZCBwMiBib2FyZHNcbiAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoMSwgWzAsIDBdLCBcImhcIik7XG4gIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKDEsIFsxLCAzXSwgXCJoXCIpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCgxLCBbMSwgMV0sIFwidlwiKTtcbiAgLy9wbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCgxLCBbMCwgN10sIFwidlwiKTtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcjE7XG4gIHJldHVybiB7IHBsYXllcjEsIHBsYXllcjIsIGFjdGl2ZVBsYXllciB9O1xufSkoKTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIGdhbWVMb29wIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy9pbXBvcnQgXCJAbWRpL2ZvbnQvY3NzL21hdGVyaWFsZGVzaWduaWNvbnMuY3NzXCI7XG5pbXBvcnQgeyBnYW1lTG9vcCB9IGZyb20gXCIuLi9hcHAvaW5kZXguanNcIjtcblxuLy8gQ3JlYXRlIG1vZHVsZSBkb21JbnRlciB0byBpbnRlcmFjdCB3aXRoIHRoZSBET00gYW5kIGNyZWF0ZSBVSVxuY29uc3QgZG9tSW50ZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhbm5vdW5jZVdpbm5lciA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gICAgLy8gU2hvdyB0aGUgbW9kYWxcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbGV0IG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudCA+IHBcIik7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0gaXMgdGhlIHdpbm5lciFgO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy8gQ2xpY2sgYW55d2hlcmUgdG8gc3RhcnQgYSBuZXcgZ2FtZVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uTmV3R2FtZVwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW5kZXJVSSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFpbkhUTUwgPSBgXG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGlkPVwiYm9hcmRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInpvbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlBsYXllciAxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyMVwiIGNsYXNzPVwicGxheWVyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInpvbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkNvbXB1dGVyPC9kaXY+ICBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXIyXCIgY2xhc3M9XCJwbGF5ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPCEtLSBNb2RhbCBjb250ZW50IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICA8ZGl2IGlkPVwibmV3R2FtZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvbk5ld0dhbWVcIj5OZXcgR2FtZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBwbGFpbkhUTUw7XG4gICAgY29uc3QgZ3JpZFAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxXCIpO1xuICAgIGNvbnN0IGdyaWRQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMlwiKTtcbiAgICBjb25zdCBldkxpc3RlbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgIGNvbnN0IHJlcyA9IGdhbWVMb29wLnBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgY2VsbElELFxuICAgICAgICBnYW1lTG9vcC5wbGF5ZXIyLm5hbWVcbiAgICAgICk7XG4gICAgICAvLyBDaGFuZ2UgY2VsbCBjb2xvciBkZXBlbmRpbmcgb24gYXR0YWNrIHJlc3VsdFxuICAgICAgaWYgKHJlcyA9PSAwKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVzID09IDEpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlcyA9PSAyKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInB1cnBsZVwiO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHdhcyBsYXN0IGZsb2F0aW5nIHNoaXBcbiAgICAgICAgaWYgKGdhbWVMb29wLnBsYXllcjIuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgYW5ub3VuY2VXaW5uZXIoZ2FtZUxvb3AucGxheWVyMS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIC8vIFdhaXQgMSBzZWNvbmQgYW5kIG1ha2UgY29tcHV0ZXIgYXR0YWNrIHBsYXllciAxXG4gICAgICBjb25zdCB3YWl0MVNlYyA9IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMDApKTtcbiAgICAgIHdhaXQxU2VjLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBHZW5lcmF0ZSBhdXRvbWF0aWMgYXR0YWNrIGNvb3Jkc1xuICAgICAgICBjb25zdCBhdHRhY2tDb29yZHMgPSBnYW1lTG9vcC5wbGF5ZXIyLmF0dGFjayhcbiAgICAgICAgICBnYW1lTG9vcC5wbGF5ZXIxLmJvYXJkLmdldFNob290c01hcCgpXG4gICAgICAgICk7XG4gICAgICAgIC8vIEF0dGFjayBwbGF5ZXIxIHVzaW5nIHRoZSBjb29yZHNcbiAgICAgICAgY29uc3QgcmVzMiA9IGdhbWVMb29wLnBsYXllcjEuYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICBhdHRhY2tDb29yZHMsXG4gICAgICAgICAgZ2FtZUxvb3AucGxheWVyMS5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIC8vIENoYW5nZSBwbGF5ZXIgMSBjZWxsIGNvbG9yIGRlcGVuZGluZyBvbiBhdHRhY2sgcmVzdWx0cyxcbiAgICAgICAgLy8gY2hhbmdlIGZyb20gY29vcmRpbmF0ZXMgdG8gbm9kZSBpZFxuICAgICAgICBjb25zdCBjZWxsSW50ID0gMTAgKiBhdHRhY2tDb29yZHNbMF0gKyBhdHRhY2tDb29yZHNbMV07XG4gICAgICAgIGNvbnN0IGNlbGwySUQgPSBgYSR7Y2VsbEludH1gO1xuICAgICAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsMklEKTtcbiAgICAgICAgaWYgKHJlczIgPT0gMCkge1xuICAgICAgICAgIGF0dGFja2VkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgICBhdHRhY2tlZENlbGwuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMyID09IDEpIHtcbiAgICAgICAgICBhdHRhY2tlZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICBhdHRhY2tlZENlbGwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlczIgPT0gMikge1xuICAgICAgICAgIGF0dGFja2VkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInB1cnBsZVwiO1xuICAgICAgICAgIGF0dGFja2VkQ2VsbC5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YXMgbGFzdCBmbG9hdGluZyBzaGlwXG4gICAgICAgICAgaWYgKGdhbWVMb29wLnBsYXllcjEuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBhbm5vdW5jZVdpbm5lcihnYW1lTG9vcC5wbGF5ZXIyLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmlkID0gYGEke2l9YDtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmlkO1xuICAgICAgZ3JpZFAxLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmlkID0gYGIke2l9YDtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjZWxsLmlkO1xuICAgICAgLy8gQWRkIGNsaWNrIGxpc3RlbmVyIHRvIHJlZ2lzdGVyIGF0dGFja3NcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2TGlzdGVuKTtcbiAgICAgIGdyaWRQMi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbG9yU3Vua1NoaXAgPSAoY29vcmRzU2V0LCBwbGF5ZXJOYW1lKSA9PiB7XG4gICAgY29vcmRzU2V0LmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgLy8gY2hhbmdlIGZyb20gY29vcmRpbmF0ZXMgdG8gbm9kZSBpZFxuICAgICAgY29uc3QgY2VsbEludCA9IDEwICogY29vcmRzWzBdICsgY29vcmRzWzFdO1xuICAgICAgbGV0IGNlbGwySUQgPSBcIlwiO1xuICAgICAgaWYgKHBsYXllck5hbWUgPT0gXCJQbGF5ZXIgMVwiKSB7XG4gICAgICAgIGNlbGwySUQgPSBgYSR7Y2VsbEludH1gO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllck5hbWUgPT0gXCJQbGF5ZXIgMlwiKSB7XG4gICAgICAgIGNlbGwySUQgPSBgYiR7Y2VsbEludH1gO1xuICAgICAgfVxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwySUQpO1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInB1cnBsZVwiO1xuICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgfSk7XG4gIH07XG4gIC8vIFBsYXllciAxIGlzIGFjdGl2ZSBhdCBzdGFydFxuICByZXR1cm4ge1xuICAgIHJlbmRlclVJLFxuICAgIGNvbG9yU3Vua1NoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21JbnRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBkb21JbnRlciB9IGZyb20gXCIuL2RvbS9pbmRleC5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9