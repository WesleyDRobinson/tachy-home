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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lb = document.getElementById('learning-box');
var mb = document.getElementById('music-box');
var cb = document.getElementById('coding-box');
var apb = document.getElementById('ap-box');
var handleImageGallery = function handleImageGallery(e) {
    var t = e.target;
    var key = document.getElementById('colorful-key');
    var img = t.style.backgroundImage;
    if (img) {
        key.style.backgroundImage = img;
        ga('send', 'event', 'Image', 'viewed', '' + img);
    }
};
var openBox = function openBox(e) {
    var close = document.getElementById('close-X');
    close.classList.remove('dn');
    var test = e.target.innerText.toLowerCase().trim();
    if (!test && e.target.alt === 'power icon') {
        test = 'learning';
    }
    ga('send', 'event', test + '-box', 'opened');

    switch (test) {
        case 'learning':
            lb.style.left = 0;
            lb.style.top = 0;
            break;
        case 'art & photography':
            apb.style.right = 0;
            apb.style.top = 0;
            break;
        case 'music':
            mb.style.left = 0;
            mb.style.bottom = 0;
            break;
        case 'code':
            cb.style.right = 0;
            cb.style.bottom = 0;
            break;
        default:
            return e;
    }
};
var showResume = function showResume() {
    var frame = document.getElementById('resume-img');
    frame.classList.toggle('dn');
    frame.classList.toggle('db');

    ga('send', 'event', 'Resume link', 'toggled');
};
var toggleContributionsBox = function toggleContributionsBox() {
    var modal = document.getElementById('contributions-modal');
    modal.classList.toggle('dn');
    ga('send', 'event', 'Contribution modal', 'toggled');
    modal.addEventListener('click', toggleContributionsBox);
};
module.exports = {
    handleImageGallery: handleImageGallery,
    openBox: openBox,
    showResume: showResume,
    toggleContributionsBox: toggleContributionsBox
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRlMTc1Yzg5ZjU4MWMxYjhhNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZXJzLmpzIl0sIm5hbWVzIjpbImxiIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1iIiwiY2IiLCJhcGIiLCJoYW5kbGVJbWFnZUdhbGxlcnkiLCJlIiwidCIsInRhcmdldCIsImtleSIsImltZyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2EiLCJvcGVuQm94IiwiY2xvc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXN0IiwiaW5uZXJUZXh0IiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiYWx0IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwic2hvd1Jlc3VtZSIsImZyYW1lIiwidG9nZ2xlIiwidG9nZ2xlQ29udHJpYnV0aW9uc0JveCIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxJQUFNQSxLQUFLQyxTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQVg7QUFDQSxJQUFNQyxLQUFLRixTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQVg7QUFDQSxJQUFN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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRlMTc1Yzg5ZjU4MWMxYjhhNDYiLCJjb25zdCBsYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFybmluZy1ib3gnKVxuY29uc3QgbWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWMtYm94JylcbmNvbnN0IGNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGluZy1ib3gnKVxuY29uc3QgYXBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwLWJveCcpXG5jb25zdCBoYW5kbGVJbWFnZUdhbGxlcnkgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHQgPSBlLnRhcmdldFxuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcmZ1bC1rZXknKVxuICAgIGNvbnN0IGltZyA9IHQuc3R5bGUuYmFja2dyb3VuZEltYWdlXG4gICAgaWYgKGltZykge1xuICAgICAgICBrZXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nXG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ0ltYWdlJywgJ3ZpZXdlZCcsIGAke2ltZ31gKVxuICAgIH1cbn1cbmNvbnN0IG9wZW5Cb3ggPSAoZSkgPT4ge1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLVgnKVxuICAgIGNsb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2RuJylcbiAgICBsZXQgdGVzdCA9IGUudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgIGlmICghdGVzdCAmJiBlLnRhcmdldC5hbHQgPT09ICdwb3dlciBpY29uJykge1xuICAgICAgICB0ZXN0ID0gJ2xlYXJuaW5nJ1xuICAgIH1cbiAgICBnYSgnc2VuZCcsICdldmVudCcsIGAke3Rlc3R9LWJveGAsICdvcGVuZWQnKVxuXG4gICAgc3dpdGNoICh0ZXN0KSB7XG4gICAgICAgIGNhc2UgJ2xlYXJuaW5nJzpcbiAgICAgICAgICAgIGxiLnN0eWxlLmxlZnQgPSAwXG4gICAgICAgICAgICBsYi5zdHlsZS50b3AgPSAwXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhcnQgJiBwaG90b2dyYXBoeSc6XG4gICAgICAgICAgICBhcGIuc3R5bGUucmlnaHQgPSAwXG4gICAgICAgICAgICBhcGIuc3R5bGUudG9wID0gMFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnbXVzaWMnOlxuICAgICAgICAgICAgbWIuc3R5bGUubGVmdCA9IDBcbiAgICAgICAgICAgIG1iLnN0eWxlLmJvdHRvbSA9IDBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgICAgY2Iuc3R5bGUucmlnaHQgPSAwXG4gICAgICAgICAgICBjYi5zdHlsZS5ib3R0b20gPSAwXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICB9XG59XG5jb25zdCBzaG93UmVzdW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VtZS1pbWcnKVxuICAgIGZyYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2RuJylcbiAgICBmcmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdkYicpXG5cbiAgICBnYSgnc2VuZCcsICdldmVudCcsICdSZXN1bWUgbGluaycsICd0b2dnbGVkJylcbn1cbmNvbnN0IHRvZ2dsZUNvbnRyaWJ1dGlvbnNCb3ggPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJpYnV0aW9ucy1tb2RhbCcpXG4gICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnZG4nKVxuICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ0NvbnRyaWJ1dGlvbiBtb2RhbCcsICd0b2dnbGVkJylcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbnRyaWJ1dGlvbnNCb3gpXG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBoYW5kbGVJbWFnZUdhbGxlcnksXG4gICAgb3BlbkJveCxcbiAgICBzaG93UmVzdW1lLFxuICAgIHRvZ2dsZUNvbnRyaWJ1dGlvbnNCb3hcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9oYW5kbGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=