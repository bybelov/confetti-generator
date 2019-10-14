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
exports.push([module.i, "*,\n:after,\n:before {\n  box-sizing: border-box; }\n\nbody {\n  font-size: 14px;\n  line-height: 1.42;\n  font-family: 'Roboto';\n  margin: 0;\n  padding: 0; }\n\n.hide {\n  display: none !important; }\n\nmain {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  main header {\n    flex: 0; }\n  main body {\n    flex: 1; }\n  main footer {\n    flex: 0;\n    margin-top: auto; }\n\nh2 {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 16px; }\n\nbutton {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all ease 0.25s; }\n  button + button {\n    margin-left: 16px; }\n  button.primary {\n    border-color: #2196f3;\n    color: #fff;\n    background-color: #2196f3; }\n    button.primary:hover {\n      background-color: #51adf6;\n      border-color: #51adf6; }\n  button.default {\n    border: 1px solid #ced4da;\n    color: #888;\n    background-color: transparent; }\n    button.default:hover {\n      background-color: #ebeef0;\n      color: #333; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.row {\n  display: flex;\n  align-items: center; }\n  .row .text-field {\n    flex-basis: 50%; }\n    .row .text-field--single {\n      flex-basis: calc(50% - 8px); }\n    .row .text-field:last-child {\n      margin-left: 16px; }\n    .row .text-field:first-child {\n      margin-left: 0; }\n\n.form-group {\n  margin-bottom: 16px; }\n  .form-group__title {\n    font-weight: bold;\n    font-size: 12px;\n    margin-bottom: 6px; }\n\n.text-field {\n  position: relative; }\n  .text-field label {\n    position: absolute;\n    top: 8px;\n    left: 8px;\n    z-index: 1;\n    color: #888;\n    font-size: 12px;\n    line-height: 1.42;\n    margin: 0;\n    white-space: nowrap;\n    letter-spacing: 0.1em; }\n  .text-field input {\n    font-size: 1rem;\n    position: relative;\n    background: transparent;\n    font-weight: bold;\n    text-align: right;\n    height: 32px;\n    padding: 4px 8px 4px 72px;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    line-height: 1.42;\n    color: #495057;\n    border-radius: 2px;\n    border: 1px solid #ced4da;\n    transition: border-color .15s ease-in-out,\r box-shadow .15s ease-in-out,\r -webkit-box-shadow .15s ease-in-out; }\n    .text-field input::-webkit-outer-spin-button, .text-field input::-webkit-inner-spin-button {\n      margin-left: 8px; }\n\n.checkbox {\n  margin-bottom: 6px;\n  padding-left: 24px;\n  color: #333;\n  margin-top: 0;\n  cursor: pointer;\n  position: relative;\n  text-transform: none;\n  z-index: 0;\n  display: inline-block; }\n  .checkbox__input {\n    position: absolute;\n    left: -9999px;\n    appearance: none; }\n    .checkbox__input:checked ~ .checkbox__label:before {\n      border-width: 0;\n      background-color: #2196f3;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' /%3E%3C/svg%3E\"); }\n    .checkbox__input:focus ~ .checkbox__label:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 18px;\n      height: 18px;\n      border-radius: 50%;\n      animation: press 0.75s 1; }\n    .checkbox__input:disabled ~ .checkbox__label:before {\n      cursor: not-allowed;\n      border-color: #888; }\n    .checkbox__input:disabled:checked ~ .checkbox__label {\n      cursor: not-allowed; }\n      .checkbox__input:disabled:checked ~ .checkbox__label:before {\n        background-color: #888;\n        border-color: #888; }\n  .checkbox__label {\n    display: block;\n    font-size: 12px;\n    color: #333;\n    line-height: 1.5;\n    font-weight: bold; }\n    .checkbox__label:before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 18px;\n      height: 18px;\n      outline: none;\n      border: 2px solid #ddd;\n      border-radius: 2px;\n      background-color: #fff;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 14px 14px;\n      transition: all ease 0.25s; }\n\n@keyframes press {\n  0% {\n    box-shadow: 0 0 0 0 #51adf6; }\n  50% {\n    box-shadow: 0 0 0 12px rgba(81, 173, 246, 0.35); }\n  100% {\n    box-shadow: 0 0 0 12px rgba(81, 173, 246, 0); } }\n", ""]);


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


function checkboxToggle(element, event) {
  const toggleBlock = element.closest('.form-group').querySelector('.row');
  event.target.checked === true ? toggleBlock.classList.remove('hide') : toggleBlock.classList.add('hide');
}

function minmax(value, min, max) {
  if (+value < min || isNaN(+value)) {
    return min;
  } else if (+value > max) {
    return max;
  } else {
    return value;
  }
}

function maxLengthCheck(object) {
  if (object.value.length > object.max.length) object.value = object.value.slice(0, object.max.length);
}

function onChangeCheckbox(element, from, to) {
  element.addEventListener('change', function (e) {
    checkboxToggle(this, e);
  });
} // quantity


const quantity = document.getElementById('quantity'); // opacity

const opacity = document.getElementById('opacity');
const opacityFrom = document.getElementById('opacityFrom');
const opacityTo = document.getElementById('opacityTo'); // sizePPp

const size = document.getElementById('size');
const sizeFrom = document.getElementById('sizeFrom');
const sizeTo = document.getElementById('sizeTo'); // rotation

const rotation = document.getElementById('rotation');
const rotationFrom = document.getElementById('rotationFrom');
const rotationTo = document.getElementById('rotationTo');
onChangeCheckbox(opacity);
onChangeCheckbox(size);
onChangeCheckbox(rotation);

function minmaxHandler(element) {
  element.addEventListener('keyup', e => {
    maxLengthCheck(e.target);
    e.target.value = minmax(e.target.value, e.target.min, e.target.max);
  });
}

minmaxHandler(quantity);
minmaxHandler(sizeFrom);
minmaxHandler(sizeTo);
minmaxHandler(rotationFrom);
minmaxHandler(rotationTo);

function getFormData(form) {
  const formData = new FormData(form);
  let obj = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

function checkData(data) {
  return {
    quantity: Math.abs(parseInt(data.quantity, 10)) > 999 ? 25 : Math.abs(parseInt(data.quantity, 10)) || 25,
    opacity: data.opacity == 'on' ? true : false,
    opacityFrom: Math.abs(data.opacityFrom) > 1 ? 1 : Math.abs(data.opacityFrom) || 0.1,
    opacityTo: parseFloat(data.opacityTo) > 1 ? 1 : parseFloat(data.opacityTo) || 1,
    size: data.size == 'on' ? true : false,
    sizeFrom: Math.abs(parseInt(data.sizeFrom)) > 999 ? 8 : Math.abs(parseInt(data.sizeFrom)) || 8,
    sizeTo: Math.abs(parseInt(data.sizeTo)) > 999 ? 100 : Math.abs(parseInt(data.sizeTo)) || 100,
    rotation: data.rotation == 'on' ? true : false,
    rotationFrom: Math.abs(parseInt(data.rotationFrom)) > 360 ? 0 : Math.abs(parseInt(data.rotationFrom)) || 0,
    rotationTo: Math.abs(parseInt(data.rotationTo)) > 360 ? 360 : Math.abs(parseInt(data.rotationTo)) || 360
  };
}

document.getElementById('generate').onclick = () => {
  const form = document.getElementById('form');
  let data = checkData(getFormData(form));
  parent.postMessage({
    pluginMessage: {
      type: 'magic',
      data
    }
  }, '*');
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({
    pluginMessage: {
      type: 'cancel'
    }
  }, '*');
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy91aS5zY3NzP2M2MGIiXSwibmFtZXMiOlsiY2hlY2tib3hUb2dnbGUiLCJlbGVtZW50IiwiZXZlbnQiLCJ0b2dnbGVCbG9jayIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiY2hlY2tlZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1pbm1heCIsInZhbHVlIiwibWluIiwibWF4IiwiaXNOYU4iLCJtYXhMZW5ndGhDaGVjayIsIm9iamVjdCIsImxlbmd0aCIsInNsaWNlIiwib25DaGFuZ2VDaGVja2JveCIsImZyb20iLCJ0byIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicXVhbnRpdHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3BhY2l0eSIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic2l6ZSIsInNpemVGcm9tIiwic2l6ZVRvIiwicm90YXRpb24iLCJyb3RhdGlvbkZyb20iLCJyb3RhdGlvblRvIiwibWlubWF4SGFuZGxlciIsImdldEZvcm1EYXRhIiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJvYmoiLCJmb3JFYWNoIiwia2V5IiwiY2hlY2tEYXRhIiwiZGF0YSIsIk1hdGgiLCJhYnMiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJvbmNsaWNrIiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJwbHVnaW5NZXNzYWdlIiwidHlwZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUpBQXdFOztBQUU3RjtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG46YWZ0ZXIsXFxuOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS40MjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBmbGV4OiAwOyB9XFxuICBtYWluIGJvZHkge1xcbiAgICBmbGV4OiAxOyB9XFxuICBtYWluIGZvb3RlciB7XFxuICAgIGZsZXg6IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjI1czsgfVxcbiAgYnV0dG9uICsgYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7IH1cXG4gIGJ1dHRvbi5wcmltYXJ5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxcbiAgICBidXR0b24ucHJpbWFyeTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxYWRmNjtcXG4gICAgICBib3JkZXItY29sb3I6ICM1MWFkZjY7IH1cXG4gIGJ1dHRvbi5kZWZhdWx0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIGJ1dHRvbi5kZWZhdWx0OmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZWYwO1xcbiAgICAgIGNvbG9yOiAjMzMzOyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnJvdyAudGV4dC1maWVsZCB7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTsgfVxcbiAgICAucm93IC50ZXh0LWZpZWxkLS1zaW5nbGUge1xcbiAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gOHB4KTsgfVxcbiAgICAucm93IC50ZXh0LWZpZWxkOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4OyB9XFxuICAgIC5yb3cgLnRleHQtZmllbGQ6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxcbiAgLmZvcm0tZ3JvdXBfX3RpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuXFxuLnRleHQtZmllbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAudGV4dC1maWVsZCBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtOyB9XFxuICAudGV4dC1maWVsZCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDcycHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI7XFxuICAgIGNvbG9yOiAjNDk1MDU3O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LFxcciBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsXFxyIC13ZWJraXQtYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0OyB9XFxuICAgIC50ZXh0LWZpZWxkIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAudGV4dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHotaW5kZXg6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5jaGVja2JveF9faW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC05OTk5cHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG4gICAgLmNoZWNrYm94X19pbnB1dDpjaGVja2VkIH4gLmNoZWNrYm94X19sYWJlbDpiZWZvcmUge1xcbiAgICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNmZmYnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyUzRSUzQ3BhdGggZD0nTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WicgLyUzRSUzQy9zdmclM0VcXFwiKTsgfVxcbiAgICAuY2hlY2tib3hfX2lucHV0OmZvY3VzIH4gLmNoZWNrYm94X19sYWJlbDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIGhlaWdodDogMThweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYW5pbWF0aW9uOiBwcmVzcyAwLjc1cyAxOyB9XFxuICAgIC5jaGVja2JveF9faW5wdXQ6ZGlzYWJsZWQgfiAuY2hlY2tib3hfX2xhYmVsOmJlZm9yZSB7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICBib3JkZXItY29sb3I6ICM4ODg7IH1cXG4gICAgLmNoZWNrYm94X19pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmNoZWNrYm94X19sYWJlbCB7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgICAgIC5jaGVja2JveF9faW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM4ODg7IH1cXG4gIC5jaGVja2JveF9fbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmNoZWNrYm94X19sYWJlbDpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMThweDtcXG4gICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMjVzOyB9XFxuXFxuQGtleWZyYW1lcyBwcmVzcyB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIzUxYWRmNjsgfVxcbiAgNTAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTJweCByZ2JhKDgxLCAxNzMsIDI0NiwgMC4zNSk7IH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMnB4IHJnYmEoODEsIDE3MywgMjQ2LCAwKTsgfSB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0ICcuL3VpLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tib3hUb2dnbGUoZWxlbWVudCwgZXZlbnQpIHtcclxuICBjb25zdCB0b2dnbGVCbG9jayA9IGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5xdWVyeVNlbGVjdG9yKCcucm93JylcclxuICBldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/XHJcbiAgICB0b2dnbGVCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykgOlxyXG4gICAgdG9nZ2xlQmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pbm1heCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICBpZiAoK3ZhbHVlIDwgbWluIHx8IGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgIHJldHVybiBtaW47XHJcbiAgfSBlbHNlIGlmICgrdmFsdWUgPiBtYXgpIHtcclxuICAgIHJldHVybiBtYXg7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1heExlbmd0aENoZWNrKG9iamVjdCkge1xyXG4gIGlmIChvYmplY3QudmFsdWUubGVuZ3RoID4gb2JqZWN0Lm1heC5sZW5ndGgpXHJcbiAgICBvYmplY3QudmFsdWUgPSBvYmplY3QudmFsdWUuc2xpY2UoMCwgb2JqZWN0Lm1heC5sZW5ndGgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQ2hhbmdlQ2hlY2tib3goZWxlbWVudCwgZnJvbSwgdG8pIHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjaGVja2JveFRvZ2dsZSh0aGlzLCBlKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIHF1YW50aXR5XHJcbmNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JylcclxuLy8gb3BhY2l0eVxyXG5jb25zdCBvcGFjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wYWNpdHknKVxyXG5jb25zdCBvcGFjaXR5RnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGFjaXR5RnJvbScpXHJcbmNvbnN0IG9wYWNpdHlUbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGFjaXR5VG8nKVxyXG4vLyBzaXplUFBwXHJcbmNvbnN0IHNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpXHJcbmNvbnN0IHNpemVGcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVGcm9tJylcclxuY29uc3Qgc2l6ZVRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVUbycpXHJcbi8vIHJvdGF0aW9uXHJcbmNvbnN0IHJvdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uJylcclxuY29uc3Qgcm90YXRpb25Gcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uRnJvbScpXHJcbmNvbnN0IHJvdGF0aW9uVG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb25UbycpXHJcblxyXG5cclxub25DaGFuZ2VDaGVja2JveChvcGFjaXR5KVxyXG5vbkNoYW5nZUNoZWNrYm94KHNpemUpXHJcbm9uQ2hhbmdlQ2hlY2tib3gocm90YXRpb24pXHJcblxyXG5mdW5jdGlvbiBtaW5tYXhIYW5kbGVyKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIG1heExlbmd0aENoZWNrKGUudGFyZ2V0KVxyXG4gICAgZS50YXJnZXQudmFsdWUgPSBtaW5tYXgoZS50YXJnZXQudmFsdWUsIGUudGFyZ2V0Lm1pbiwgZS50YXJnZXQubWF4KVxyXG4gIH0pXHJcbn1cclxuXHJcbm1pbm1heEhhbmRsZXIocXVhbnRpdHkpXHJcbm1pbm1heEhhbmRsZXIoc2l6ZUZyb20pXHJcbm1pbm1heEhhbmRsZXIoc2l6ZVRvKVxyXG5taW5tYXhIYW5kbGVyKHJvdGF0aW9uRnJvbSlcclxubWlubWF4SGFuZGxlcihyb3RhdGlvblRvKVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybURhdGEoZm9ybSkge1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gIGxldCBvYmogPSB7fVxyXG4gIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIG9ialtrZXldID0gdmFsdWVcclxuICB9KTtcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHF1YW50aXR5OiBNYXRoLmFicyhwYXJzZUludChkYXRhLnF1YW50aXR5LCAxMCkpID4gOTk5ID8gMjUgOiBNYXRoLmFicyhwYXJzZUludChkYXRhLnF1YW50aXR5LCAxMCkpIHx8IDI1LFxyXG4gICAgb3BhY2l0eTogZGF0YS5vcGFjaXR5ID09ICdvbicgPyB0cnVlIDogZmFsc2UsXHJcbiAgICBvcGFjaXR5RnJvbTogTWF0aC5hYnMoZGF0YS5vcGFjaXR5RnJvbSkgPiAxID8gMSA6IE1hdGguYWJzKGRhdGEub3BhY2l0eUZyb20pIHx8IDAuMSxcclxuICAgIG9wYWNpdHlUbzogcGFyc2VGbG9hdChkYXRhLm9wYWNpdHlUbykgPiAxID8gMSA6IHBhcnNlRmxvYXQoZGF0YS5vcGFjaXR5VG8pIHx8IDEsXHJcbiAgICBzaXplOiBkYXRhLnNpemUgPT0gJ29uJyA/IHRydWUgOiBmYWxzZSxcclxuICAgIHNpemVGcm9tOiBNYXRoLmFicyhwYXJzZUludChkYXRhLnNpemVGcm9tKSkgPiA5OTkgPyA4IDogTWF0aC5hYnMocGFyc2VJbnQoZGF0YS5zaXplRnJvbSkpIHx8IDgsXHJcbiAgICBzaXplVG86IE1hdGguYWJzKHBhcnNlSW50KGRhdGEuc2l6ZVRvKSkgPiA5OTkgPyAxMDAgOiBNYXRoLmFicyhwYXJzZUludChkYXRhLnNpemVUbykpIHx8IDEwMCxcclxuICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uID09ICdvbicgPyB0cnVlIDogZmFsc2UsXHJcbiAgICByb3RhdGlvbkZyb206IE1hdGguYWJzKHBhcnNlSW50KGRhdGEucm90YXRpb25Gcm9tKSkgPiAzNjAgPyAwIDogTWF0aC5hYnMocGFyc2VJbnQoZGF0YS5yb3RhdGlvbkZyb20pKSB8fCAwLFxyXG4gICAgcm90YXRpb25UbzogTWF0aC5hYnMocGFyc2VJbnQoZGF0YS5yb3RhdGlvblRvKSkgPiAzNjAgPyAzNjAgOiBNYXRoLmFicyhwYXJzZUludChkYXRhLnJvdGF0aW9uVG8pKSB8fCAzNjAsXHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGUnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxyXG4gIGxldCBkYXRhID0gY2hlY2tEYXRhKGdldEZvcm1EYXRhKGZvcm0pKVxyXG5cclxuICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgcGx1Z2luTWVzc2FnZToge1xyXG4gICAgICB0eXBlOiAnbWFnaWMnLFxyXG4gICAgICBkYXRhXHJcbiAgICB9XHJcbiAgfSwgJyonKVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJykub25jbGljayA9ICgpID0+IHtcclxuICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgcGx1Z2luTWVzc2FnZToge1xyXG4gICAgICB0eXBlOiAnY2FuY2VsJ1xyXG4gICAgfVxyXG4gIH0sICcqJylcclxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9