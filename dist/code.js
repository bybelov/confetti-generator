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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.js":
/*!*********************!*\
  !*** ./src/code.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function randomInt(from, to) {
  return Math.floor(from + (to - from) * Math.random());
}

function randomFloat(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(1));
}

function noRepeatX(nodes) {
  for (let k; k < nodes.length; k++) {
    if (el.x + el.width < node[k].x && el.x + el.width > node[k].x + node[k].width) {
      return;
    } else {
      el.x = randomInt(0, maxX);
      noRepeatX();
    }
  }
}

function noRepeatY(nodes) {
  for (let k; k < nodes.length; k++) {
    if (el.y + el.height < node[k].y && el.y + el.height > node[k].y + node[k].height) {
      return;
    } else {
      el.y = random(0, maxY);
      noRepeatY();
    }
  }
}

figma.showUI(__html__, {
  width: 356,
  height: 400
});

figma.ui.onmessage = msg => {
  if (msg.type === 'magic') {
    const data = msg.data;
    let parentNode,
        maxX,
        maxY,
        nodes = [],
        selections,
        selectionsLength;
    selections = figma.currentPage.selection;
    selectionsLength = selections.length;

    try {
      // parent node
      parentNode = selections[0].parent;

      if (parentNode.type === 'PAGE') {
        alert('You have chosen a parent. Select its children.');
        return;
      } // max x, y coordinates


      maxX = parentNode.width;
      maxY = parentNode.height;
    } catch (error) {
      alert('Select the elements inside the frame');
      return;
    }

    let length;

    if (data.quantity - selectionsLength <= 0) {
      length = data.quantity;
    } else {
      length = data.quantity - selectionsLength;
    }

    for (let i = 0; i < length; i++) {
      const el = selections[randomInt(0, selectionsLength)];

      if (data.rotation === true) {
        el.rotation = randomInt(data.rotationFrom, data.rotationTo);
      }

      if (data.opacity === true) {
        el.opacity = randomFloat(data.opacityFrom, data.opacityTo);
      }

      if (data.size === true) {
        const proportional = el.width / el.height;
        const resizeWidth = randomInt(data.sizeFrom, data.sizeTo);
        const resizeHeight = resizeWidth / proportional;
        el.resize(resizeWidth, resizeHeight);
      }

      el.x = randomInt(0, maxX);
      el.y = randomInt(0, maxY); // console.log(`id: ${el.id}, x: ${el.x}, y: ${el.y}`);

      noRepeatX(nodes);
      noRepeatY(nodes); // nodes.push(el);

      const clone = el.clone();
      clone.name = `${el.name}:${i + 1}`;
      parentNode.appendChild(clone);
    } // end for

  }

  if (msg.type === 'cancel') {
    figma.clientStorage.setAsync('selections', null);
    figma.closePlugin();
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUuanMiXSwibmFtZXMiOlsicmFuZG9tSW50IiwiZnJvbSIsInRvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tRmxvYXQiLCJtaW4iLCJtYXgiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm5vUmVwZWF0WCIsIm5vZGVzIiwiayIsImxlbmd0aCIsImVsIiwieCIsIndpZHRoIiwibm9kZSIsIm1heFgiLCJub1JlcGVhdFkiLCJ5IiwiaGVpZ2h0IiwibWF4WSIsImZpZ21hIiwic2hvd1VJIiwiX19odG1sX18iLCJ1aSIsIm9ubWVzc2FnZSIsIm1zZyIsInR5cGUiLCJkYXRhIiwicGFyZW50Tm9kZSIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb25zTGVuZ3RoIiwiY3VycmVudFBhZ2UiLCJzZWxlY3Rpb24iLCJwYXJlbnQiLCJhbGVydCIsImVycm9yIiwicXVhbnRpdHkiLCJpIiwicm90YXRpb24iLCJyb3RhdGlvbkZyb20iLCJyb3RhdGlvblRvIiwib3BhY2l0eSIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwic2l6ZSIsInByb3BvcnRpb25hbCIsInJlc2l6ZVdpZHRoIiwic2l6ZUZyb20iLCJzaXplVG8iLCJyZXNpemVIZWlnaHQiLCJyZXNpemUiLCJjbG9uZSIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNsb3NlUGx1Z2luIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QyxhQUFOLENBQW9CQyxRQUFwQixDQUE2QixZQUE3QixFQUEyQyxJQUEzQztBQUNBbkMsU0FBSyxDQUFDb0MsV0FBTjtBQUNEO0FBRUYsQ0E3RUQsQyIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiByYW5kb21JbnQoZnJvbSwgdG8pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZnJvbSArICh0byAtIGZyb20pICogTWF0aC5yYW5kb20oKSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUZsb2F0KG1pbiwgbWF4KSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KCgoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbikudG9GaXhlZCgxKSk7XG59XG5cbmZ1bmN0aW9uIG5vUmVwZWF0WChub2Rlcykge1xuICBmb3IgKGxldCBrOyBrIDwgbm9kZXMubGVuZ3RoOyBrKyspIHtcbiAgICBpZiAoKGVsLnggKyBlbC53aWR0aCkgPCBub2RlW2tdLnggJiYgKGVsLnggKyBlbC53aWR0aCkgPiAobm9kZVtrXS54ICsgbm9kZVtrXS53aWR0aCkpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBlbC54ID0gcmFuZG9tSW50KDAsIG1heFgpO1xuICAgICAgbm9SZXBlYXRYKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vUmVwZWF0WShub2Rlcykge1xuICBmb3IgKGxldCBrOyBrIDwgbm9kZXMubGVuZ3RoOyBrKyspIHtcbiAgICBpZiAoKGVsLnkgKyBlbC5oZWlnaHQpIDwgbm9kZVtrXS55ICYmIChlbC55ICsgZWwuaGVpZ2h0KSA+IChub2RlW2tdLnkgKyBub2RlW2tdLmhlaWdodCkpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBlbC55ID0gcmFuZG9tKDAsIG1heFkpO1xuICAgICAgbm9SZXBlYXRZKCk7XG4gICAgfVxuICB9XG59XG5cbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICB3aWR0aDogMzU2LFxuICBoZWlnaHQ6IDQwMFxufSk7XG5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG5cbiAgaWYgKG1zZy50eXBlID09PSAnbWFnaWMnKSB7XG5cbiAgICBjb25zdCBkYXRhID0gbXNnLmRhdGE7XG4gICAgbGV0IHBhcmVudE5vZGUsXG4gICAgICBtYXhYLFxuICAgICAgbWF4WSxcbiAgICAgIG5vZGVzID0gW10sXG4gICAgICBzZWxlY3Rpb25zLFxuICAgICAgc2VsZWN0aW9uc0xlbmd0aDtcblxuICAgIHNlbGVjdGlvbnMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgc2VsZWN0aW9uc0xlbmd0aCA9IHNlbGVjdGlvbnMubGVuZ3RoO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIHBhcmVudCBub2RlXG4gICAgICBwYXJlbnROb2RlID0gc2VsZWN0aW9uc1swXS5wYXJlbnRcbiAgICAgIGlmIChwYXJlbnROb2RlLnR5cGUgPT09ICdQQUdFJykge1xuICAgICAgICBhbGVydCgnWW91IGhhdmUgY2hvc2VuIGEgcGFyZW50LiBTZWxlY3QgaXRzIGNoaWxkcmVuLicpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIG1heCB4LCB5IGNvb3JkaW5hdGVzXG4gICAgICBtYXhYID0gcGFyZW50Tm9kZS53aWR0aDtcbiAgICAgIG1heFkgPSBwYXJlbnROb2RlLmhlaWdodDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoJ1NlbGVjdCB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZSBmcmFtZScpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGxlbmd0aDtcbiAgICBpZiAoZGF0YS5xdWFudGl0eSAtIHNlbGVjdGlvbnNMZW5ndGggPD0gMCkge1xuICAgICAgbGVuZ3RoID0gZGF0YS5xdWFudGl0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gZGF0YS5xdWFudGl0eSAtIHNlbGVjdGlvbnNMZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXG4gICAgICBjb25zdCBlbCA9IHNlbGVjdGlvbnNbcmFuZG9tSW50KDAsIHNlbGVjdGlvbnNMZW5ndGgpXTtcblxuICAgICAgaWYgKGRhdGEucm90YXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgZWwucm90YXRpb24gPSByYW5kb21JbnQoZGF0YS5yb3RhdGlvbkZyb20sIGRhdGEucm90YXRpb25Ubyk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5vcGFjaXR5ID09PSB0cnVlKSB7XG4gICAgICAgIGVsLm9wYWNpdHkgPSByYW5kb21GbG9hdChkYXRhLm9wYWNpdHlGcm9tLCBkYXRhLm9wYWNpdHlUbyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnNpemUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvcG9ydGlvbmFsID0gZWwud2lkdGggLyBlbC5oZWlnaHRcbiAgICAgICAgY29uc3QgcmVzaXplV2lkdGggPSByYW5kb21JbnQoZGF0YS5zaXplRnJvbSwgZGF0YS5zaXplVG8pXG4gICAgICAgIGNvbnN0IHJlc2l6ZUhlaWdodCA9IHJlc2l6ZVdpZHRoIC8gcHJvcG9ydGlvbmFsXG4gICAgICAgIGVsLnJlc2l6ZShyZXNpemVXaWR0aCwgcmVzaXplSGVpZ2h0KVxuICAgICAgfVxuXG4gICAgICBlbC54ID0gcmFuZG9tSW50KDAsIG1heFgpO1xuICAgICAgZWwueSA9IHJhbmRvbUludCgwLCBtYXhZKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coYGlkOiAke2VsLmlkfSwgeDogJHtlbC54fSwgeTogJHtlbC55fWApO1xuICAgICAgbm9SZXBlYXRYKG5vZGVzKTtcbiAgICAgIG5vUmVwZWF0WShub2Rlcyk7XG5cbiAgICAgIC8vIG5vZGVzLnB1c2goZWwpO1xuXG4gICAgICBjb25zdCBjbG9uZSA9IGVsLmNsb25lKCk7XG4gICAgICBjbG9uZS5uYW1lID0gYCR7ZWwubmFtZX06JHtpICsgMX1gO1xuXG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgIH0gLy8gZW5kIGZvclxuICB9XG5cbiAgaWYgKG1zZy50eXBlID09PSAnY2FuY2VsJykge1xuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoJ3NlbGVjdGlvbnMnLCBudWxsKTtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICB9XG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==