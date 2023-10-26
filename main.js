/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

if (navigator.serviceWorker) {
  window.addEventListener("load", async () => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register("service-worker.js");
        console.log("sw registered");
      }
    } catch (e) {
      console.log(e);
    }
  });
}
let result;
const createRequest = async () => {
  try {
    const respone = await fetch("https://sw-gjou.onrender.com?method=allNews");
    if (respone.status >= 200) {
      document.querySelector(".modal_container").classList.remove("active");
      document.querySelector("body").style.cursor = "initial";
      result = await respone.json();
      document.querySelector("ul").innerHTML = "";
      result.forEach(element => {
        document.querySelector("ul").insertAdjacentHTML("afterbegin", `<li class="news_card">
		<h2 class="news_card_header">News header</h2>
		<div class="news_content">
			<div class="news_content_img">
			</div><div class="news_content_description_wrap">
			<div class="news_content_description">${element.name}</div>
			<div class="news_content_description">${element.name}</div>
		</div>
		</div>
		</h2>
	</li>`);
      });
    } else {
      return;
    }
  } catch (error) {
    document.querySelector("body").style.cursor = "initial";
    document.querySelector(".modal_container").classList.add("active");
  }
};
createRequest();
if (!result) {
  document.querySelector("body").style.cursor = "wait";
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;