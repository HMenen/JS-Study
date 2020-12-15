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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hello.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hello.js":
/*!******************!*\
  !*** ./hello.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ./word */ \"./word.js\")\r\n__webpack_require__(/*! style-loader!css-loader!./style.css */ \"./node_modules/_style-loader@1.0.0@style-loader/dist/index.js!./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./style.css\")\r\nconsole.log(\"aaaa\")\r\nconsole.log(\"bbb\")\r\nconsole.log(\"ccc\")\r\nfor(let i=0; i<10; i++) {\r\n    console.log(i)\r\n}\n\n//# sourceURL=webpack:///./hello.js?");

  /***/ })
  
  });

  /*
  首先是 (function(module){})，传入了一个模块
  定义了一个用于缓存的模块的变量 installedModules
  内部定了一个 加载函数 __webpack_require__，传入了模块的ID moduleId
  也就是说 webpack ，给每个模块都指定了一个 标志 moduleId，通过这个 id，首先去查找缓存模块变量是否缓存当前传递进来的 id 的模块
  如果没有缓存当前这个模块，就创建缓存
  执行加载进来的 模块
  给定标志表示加载完毕 module.l = true
  然后将当前模块，缓存模块暴露出去 __webpack_require__.m = modules;
  定义了 es6 module 函数 __webpack_require__.r
  定义了 getter 函数 __webpack_require__.d
  定义了 mode 模式设置 函数 __webpack_require__.t
  定义对象判断函数 __webpack_require__.o
  定义了 public_path 共享目录变量 __webpack_require__.p
  最后是压缩了的代码 eval 执行
  */