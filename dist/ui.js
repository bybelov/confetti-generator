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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*,\n:after,\n:before {\n  box-sizing: border-box; }\n\nbody {\n  font-size: 14px;\n  line-height: 1.42;\n  font-family: 'Roboto';\n  margin: 0;\n  padding: 0; }\n\n.hide {\n  display: none !important; }\n\nmain {\n  padding: 16px; }\n\nh2 {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 16px; }\n\nbutton {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all ease 0.25s; }\n  button + button {\n    margin-left: 16px; }\n  button.primary {\n    border-color: #2196f3;\n    color: #fff;\n    background-color: #2196f3; }\n    button.primary:hover {\n      background-color: #51adf6;\n      border-color: #51adf6; }\n  button.default {\n    border: 1px solid #ced4da;\n    color: #888;\n    background-color: transparent; }\n    button.default:hover {\n      background-color: #ced4da;\n      color: #333; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.row {\n  display: flex;\n  align-items: center; }\n  .row .text-field {\n    flex-basis: 50%; }\n    .row .text-field--single {\n      flex-basis: calc(50% - 8px); }\n    .row .text-field:last-child {\n      margin-left: 16px; }\n    .row .text-field:first-child {\n      margin-left: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n  .form-group__title {\n    font-weight: bold;\n    font-size: 12px;\n    margin-bottom: 6px; }\n\n.text-field {\n  position: relative; }\n  .text-field label {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    z-index: 1;\n    color: #888;\n    font-size: 12px;\n    line-height: 1.42;\n    margin: 0;\n    white-space: nowrap;\n    letter-spacing: 0.1em; }\n  .text-field input {\n    font-size: 1rem;\n    position: relative;\n    background: transparent;\n    font-weight: bold;\n    text-align: right;\n    height: 32px;\n    padding: 4px 8px 4px 72px;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    line-height: 1.42;\n    color: #495057;\n    border-radius: 2px;\n    border: 1px solid #ced4da;\n    transition: border-color .15s ease-in-out,\r box-shadow .15s ease-in-out,\r -webkit-box-shadow .15s ease-in-out; }\n    .text-field input::-webkit-outer-spin-button, .text-field input::-webkit-inner-spin-button {\n      margin-left: 8px; }\n\n.checkbox {\n  z-index: 0;\n  font-size: 12px;\n  position: relative;\n  display: inline-block;\n  color: #333;\n  line-height: 1.5;\n  font-weight: bold;\n  margin-bottom: 6px; }\n  .checkbox:hover > input {\n    opacity: 0.04; }\n    .checkbox:hover > input:focus {\n      opacity: 0.16; }\n  .checkbox > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -11px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(221, 221, 221, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s; }\n    .checkbox > input:checked, .checkbox > input:indeterminate {\n      background-color: #2196f3; }\n      .checkbox > input:checked + span::after, .checkbox > input:indeterminate + span::after {\n        border-color: #fff; }\n      .checkbox > input:checked + span::before, .checkbox > input:indeterminate + span::before {\n        border-color: #2196f3;\n        background-color: #2196f3; }\n    .checkbox > input:indeterminate + span::after {\n      border-left: none;\n      transform: translate(4px, 3px); }\n    .checkbox > input:focus {\n      opacity: 0.12; }\n    .checkbox > input:active {\n      opacity: 1;\n      transform: scale(0);\n      transition: transform 0s, opacity 0s; }\n      .checkbox > input:active + span::before {\n        border-color: #2196f3; }\n    .checkbox > input:checked:active + span::before {\n      border-color: transparent;\n      background-color: #ddd; }\n    .checkbox > input:disabled {\n      opacity: 0; }\n      .checkbox > input:disabled + span {\n        color: rgba(221, 221, 221, 0.38);\n        cursor: initial; }\n        .checkbox > input:disabled + span::before {\n          border-color: #ced4da; }\n    .checkbox > input:indeterminate:disabled + span:before, .checkbox > input:checked:disabled + span:before {\n      border-color: transparent;\n      background-color: #ced4da; }\n  .checkbox > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer; }\n    .checkbox > span::before {\n      content: \"\";\n      display: inline-block;\n      box-sizing: border-box;\n      margin: 0px 8px 2px 1px;\n      border: solid 1px #ced4da;\n      border-radius: 2px;\n      width: 18px;\n      height: 18px;\n      vertical-align: top;\n      transition: border-color 0.2s, background-color 0.2s; }\n    .checkbox > span::after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 1px;\n      left: 2px;\n      width: 10px;\n      height: 5px;\n      border: solid 2px transparent;\n      border-right: none;\n      border-top: none;\n      transform: translate(3px, 4px) rotate(-45deg); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.scss */ "./src/ui.scss");
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_scss__WEBPACK_IMPORTED_MODULE_0__);


const data = {
  quantity: 10,
  opacity: {
    active: false,
    from: 0.5,
    to: 1
  },
  size: {
    active: false,
    from: null,
    to: null
  },
  rotation: {
    active: false,
    from: 0,
    to: 360
  }
};

function checkboxToggle(element, event){
  const toggleBlock = element.closest('.form-group').querySelector('.row')
  event.target.checked === true ? 
    toggleBlock.classList.remove('hide') : 
    toggleBlock.classList.add('hide')
}

function onChangeCheckbox(element){
  element.addEventListener('change', function(e){
    checkboxToggle(this, e)
  })
}

// quantity
const quantity = document.getElementById('quantity')

// opacity
const opacity = document.getElementById('opacity')
const opacityFrom = document.getElementById('opacityFrom')
const opacityTo = document.getElementById('opacityTo')

onChangeCheckbox(opacity)

// sizePPp
const size = document.getElementById('size')
const sizeFrom = document.getElementById('sizeFrom')
const sizeTo = document.getElementById('sizeTo')

onChangeCheckbox(size)

// rotation
const rotation = document.getElementById('rotation')
const rotationFrom = document.getElementById('rotationFrom')
const rotationTo = document.getElementById('rotationTo')

onChangeCheckbox(rotation)

document.getElementById('generate').onclick = () => {

  // quantity
  const quantityValue = parseInt(quantity.value, 10)
  data.quantity = quantityValue || 10;

  // opacity
  const opacityActive = opacity.checked ? true : false
  const opacityFromValue = parseFloat(opacityFrom.value)
  const opacityToValue = parseFloat(opacityTo.value)
  data.opacity.active = opacityActive || false
  data.opacity.from = opacityFromValue || 0.5
  data.opacity.to = opacityToValue || 1

  // size
  const sizeActive = size.checked ? true : false
  const sizeFromValue = parseInt(sizeFrom.value)
  const sizeToValue = parseInt(sizeTo.value)
  data.size.active = sizeActive || false
  data.size.from = sizeFromValue || null
  data.size.to = sizeToValue || null

  // rotation
  const rotationActive = rotation.checked ? true : false
  const rotationFromValue = parseInt(rotationFrom.value)
  const rotationToValue = parseInt(rotationTo.value)
  data.rotation.active = rotationActive || false
  data.rotation.from = rotationFromValue || null
  data.rotation.to = rotationToValue || null

  console.log(data);

  // const count = parseInt(textbox.value, 10)
  parent.postMessage({ pluginMessage: { type: 'generate-confetti', data } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}

/***/ }),

/***/ "./src/ui.scss":
/*!*********************!*\
  !*** ./src/ui.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ui.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy91aS5zY3NzP2M2MGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsMkJBQTJCLEVBQUUsVUFBVSxvQkFBb0Isc0JBQXNCLDBCQUEwQixjQUFjLGVBQWUs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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUIsa0NBQWtDLEVBQUU7QUFDM0U7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCLGlCQUFpQixFQUFFO0FBQzFELEM7Ozs7Ozs7Ozs7O0FDaEdBLGNBQWMsbUJBQU8sQ0FBQyw2TEFBNEY7O0FBRWxIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAxNnB4OyB9XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4yNXM7IH1cXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4OyB9XFxuICBidXR0b24ucHJpbWFyeSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cXG4gICAgYnV0dG9uLnByaW1hcnk6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MWFkZjY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTFhZGY2OyB9XFxuICBidXR0b24uZGVmYXVsdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICBidXR0b24uZGVmYXVsdDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZDRkYTtcXG4gICAgICBjb2xvcjogIzMzMzsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5yb3cgLnRleHQtZmllbGQge1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7IH1cXG4gICAgLnJvdyAudGV4dC1maWVsZC0tc2luZ2xlIHtcXG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDhweCk7IH1cXG4gICAgLnJvdyAudGV4dC1maWVsZDpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDsgfVxcbiAgICAucm93IC50ZXh0LWZpZWxkOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG4gIC5mb3JtLWdyb3VwX190aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDsgfVxcblxcbi50ZXh0LWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnRleHQtZmllbGQgbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiA4cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTsgfVxcbiAgLnRleHQtZmllbGQgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCA3MnB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyO1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxcXHIgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0LFxcciAtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgfVxcbiAgICAudGV4dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgLnRleHQtZmllbGQgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXG5cXG4uY2hlY2tib3gge1xcbiAgei1pbmRleDogMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuICAuY2hlY2tib3g6aG92ZXIgPiBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDAuMDQ7IH1cXG4gICAgLmNoZWNrYm94OmhvdmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgICAgIG9wYWNpdHk6IDAuMTY7IH1cXG4gIC5jaGVja2JveCA+IGlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICB0b3A6IC0xMXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuMnM7IH1cXG4gICAgLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCwgLmNoZWNrYm94ID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxcbiAgICAgIC5jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgKyBzcGFuOjphZnRlciwgLmNoZWNrYm94ID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSArIHNwYW46OmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxcbiAgICAgIC5jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUsIC5jaGVja2JveCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxcbiAgICAuY2hlY2tib3ggPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgM3B4KTsgfVxcbiAgICAuY2hlY2tib3ggPiBpbnB1dDpmb2N1cyB7XFxuICAgICAgb3BhY2l0eTogMC4xMjsgfVxcbiAgICAuY2hlY2tib3ggPiBpbnB1dDphY3RpdmUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7IH1cXG4gICAgICAuY2hlY2tib3ggPiBpbnB1dDphY3RpdmUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzOyB9XFxuICAgIC5jaGVja2JveCA+IGlucHV0OmNoZWNrZWQ6YWN0aXZlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cXG4gICAgLmNoZWNrYm94ID4gaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAuY2hlY2tib3ggPiBpbnB1dDpkaXNhYmxlZCArIHNwYW4ge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4zOCk7XFxuICAgICAgICBjdXJzb3I6IGluaXRpYWw7IH1cXG4gICAgICAgIC5jaGVja2JveCA+IGlucHV0OmRpc2FibGVkICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhOyB9XFxuICAgIC5jaGVja2JveCA+IGlucHV0OmluZGV0ZXJtaW5hdGU6ZGlzYWJsZWQgKyBzcGFuOmJlZm9yZSwgLmNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZDpkaXNhYmxlZCArIHNwYW46YmVmb3JlIHtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7IH1cXG4gIC5jaGVja2JveCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNoZWNrYm94ID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICBtYXJnaW46IDBweCA4cHggMnB4IDFweDtcXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2VkNGRhO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICB3aWR0aDogMThweDtcXG4gICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzOyB9XFxuICAgIC5jaGVja2JveCA+IHNwYW46OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxcHg7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogNXB4O1xcbiAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgNHB4KSByb3RhdGUoLTQ1ZGVnKTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAnLi91aS5zY3NzJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgcXVhbnRpdHk6IDEwLFxyXG4gIG9wYWNpdHk6IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBmcm9tOiAwLjUsXHJcbiAgICB0bzogMVxyXG4gIH0sXHJcbiAgc2l6ZToge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGZyb206IG51bGwsXHJcbiAgICB0bzogbnVsbFxyXG4gIH0sXHJcbiAgcm90YXRpb246IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBmcm9tOiAwLFxyXG4gICAgdG86IDM2MFxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrYm94VG9nZ2xlKGVsZW1lbnQsIGV2ZW50KXtcclxuICBjb25zdCB0b2dnbGVCbG9jayA9IGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5xdWVyeVNlbGVjdG9yKCcucm93JylcclxuICBldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IFxyXG4gICAgdG9nZ2xlQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpIDogXHJcbiAgICB0b2dnbGVCbG9jay5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxufVxyXG5cclxuZnVuY3Rpb24gb25DaGFuZ2VDaGVja2JveChlbGVtZW50KXtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2hlY2tib3hUb2dnbGUodGhpcywgZSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBxdWFudGl0eVxyXG5jb25zdCBxdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpXHJcblxyXG4vLyBvcGFjaXR5XHJcbmNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BhY2l0eScpXHJcbmNvbnN0IG9wYWNpdHlGcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wYWNpdHlGcm9tJylcclxuY29uc3Qgb3BhY2l0eVRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wYWNpdHlUbycpXHJcblxyXG5vbkNoYW5nZUNoZWNrYm94KG9wYWNpdHkpXHJcblxyXG4vLyBzaXplUFBwXHJcbmNvbnN0IHNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpXHJcbmNvbnN0IHNpemVGcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVGcm9tJylcclxuY29uc3Qgc2l6ZVRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVUbycpXHJcblxyXG5vbkNoYW5nZUNoZWNrYm94KHNpemUpXHJcblxyXG4vLyByb3RhdGlvblxyXG5jb25zdCByb3RhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpXHJcbmNvbnN0IHJvdGF0aW9uRnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbkZyb20nKVxyXG5jb25zdCByb3RhdGlvblRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uVG8nKVxyXG5cclxub25DaGFuZ2VDaGVja2JveChyb3RhdGlvbilcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZScpLm9uY2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gIC8vIHF1YW50aXR5XHJcbiAgY29uc3QgcXVhbnRpdHlWYWx1ZSA9IHBhcnNlSW50KHF1YW50aXR5LnZhbHVlLCAxMClcclxuICBkYXRhLnF1YW50aXR5ID0gcXVhbnRpdHlWYWx1ZSB8fCAxMDtcclxuXHJcbiAgLy8gb3BhY2l0eVxyXG4gIGNvbnN0IG9wYWNpdHlBY3RpdmUgPSBvcGFjaXR5LmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcclxuICBjb25zdCBvcGFjaXR5RnJvbVZhbHVlID0gcGFyc2VGbG9hdChvcGFjaXR5RnJvbS52YWx1ZSlcclxuICBjb25zdCBvcGFjaXR5VG9WYWx1ZSA9IHBhcnNlRmxvYXQob3BhY2l0eVRvLnZhbHVlKVxyXG4gIGRhdGEub3BhY2l0eS5hY3RpdmUgPSBvcGFjaXR5QWN0aXZlIHx8IGZhbHNlXHJcbiAgZGF0YS5vcGFjaXR5LmZyb20gPSBvcGFjaXR5RnJvbVZhbHVlIHx8IDAuNVxyXG4gIGRhdGEub3BhY2l0eS50byA9IG9wYWNpdHlUb1ZhbHVlIHx8IDFcclxuXHJcbiAgLy8gc2l6ZVxyXG4gIGNvbnN0IHNpemVBY3RpdmUgPSBzaXplLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcclxuICBjb25zdCBzaXplRnJvbVZhbHVlID0gcGFyc2VJbnQoc2l6ZUZyb20udmFsdWUpXHJcbiAgY29uc3Qgc2l6ZVRvVmFsdWUgPSBwYXJzZUludChzaXplVG8udmFsdWUpXHJcbiAgZGF0YS5zaXplLmFjdGl2ZSA9IHNpemVBY3RpdmUgfHwgZmFsc2VcclxuICBkYXRhLnNpemUuZnJvbSA9IHNpemVGcm9tVmFsdWUgfHwgbnVsbFxyXG4gIGRhdGEuc2l6ZS50byA9IHNpemVUb1ZhbHVlIHx8IG51bGxcclxuXHJcbiAgLy8gcm90YXRpb25cclxuICBjb25zdCByb3RhdGlvbkFjdGl2ZSA9IHJvdGF0aW9uLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcclxuICBjb25zdCByb3RhdGlvbkZyb21WYWx1ZSA9IHBhcnNlSW50KHJvdGF0aW9uRnJvbS52YWx1ZSlcclxuICBjb25zdCByb3RhdGlvblRvVmFsdWUgPSBwYXJzZUludChyb3RhdGlvblRvLnZhbHVlKVxyXG4gIGRhdGEucm90YXRpb24uYWN0aXZlID0gcm90YXRpb25BY3RpdmUgfHwgZmFsc2VcclxuICBkYXRhLnJvdGF0aW9uLmZyb20gPSByb3RhdGlvbkZyb21WYWx1ZSB8fCBudWxsXHJcbiAgZGF0YS5yb3RhdGlvbi50byA9IHJvdGF0aW9uVG9WYWx1ZSB8fCBudWxsXHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAvLyBjb25zdCBjb3VudCA9IHBhcnNlSW50KHRleHRib3gudmFsdWUsIDEwKVxyXG4gIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2dlbmVyYXRlLWNvbmZldHRpJywgZGF0YSB9IH0sICcqJylcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnY2FuY2VsJyB9IH0sICcqJylcclxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9