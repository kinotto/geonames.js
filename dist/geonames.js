(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["Geonames"] = factory(require("axios"));
	else
		root["Geonames"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, homepage, description, main, scripts, repository, author, contributors, license, bugs, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"geonames.js","version":"2.1.0","homepage":"https://github.com/kinotto/geonames.js","description":"REST api to fetch countries, regions, cities etc. A flexible library for browser and node.js usage built on top http://www.geonames.org/","main":"dist/geonames.min.js","scripts":{"test":"mocha ./spec/test-server.js --timeout 50000","test-debug":"mocha ./spec/test-server.js --nolazy --inspect-brk=9229","coverage":"nyc npm test && nyc report --reporter=text-lcov | coveralls","build":"cross-env NODE_ENV=production webpack","build:dev":"cross-env NODE_ENV=development webpack","build:all":"rm -rf dist/* && npm run build && npm run build:dev"},"repository":"git+https://github.com/kinotto/geonames.js.git","author":"Karim Abdelcadir <kinotto88@yahoo.it>","contributors":[{"name":"Vito Macchia","email":"vito.macchia@gmail.com"}],"license":"MIT","bugs":{"url":"https://github.com/kinotto/geonames.js/issues"},"dependencies":{"axios":"^0.18.0"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0","chai":"^3.5.0","coveralls":"^2.12.0","cross-env":"^5.2.0","mocha":"^3.2.0","nyc":"^10.1.2","opener":"^1.4.1","require-dir":"^0.3.1","sinon":"^1.17.7","sinon-chai":"^2.8.0","tiny-lr":"^0.2.1","ts-loader":"^4.4.2","typescript":"^2.9.2","uglifyjs-webpack-plugin":"^1.2.7","webpack":"^4.16.2","webpack-cli":"^3.1.0","webpack-node-externals":"^1.7.2"}};

/***/ }),

/***/ "./geonames.config.ts":
/*!****************************!*\
  !*** ./geonames.config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.baseParams = {
    encoding: 'JSON',
    formatted: true,
    lan: 'en',
    style: 'full',
    username: null
};
exports.baseUri = 'https://secure.geonames.org/';
exports.geoNamesAPI = [
    'astergdem',
    'children',
    'cities',
    'contains',
    'countryCode',
    'countryInfo',
    'countrySubdivision',
    'earthquakes',
    'extendedFindNearby',
    'findNearby',
    'findNearbyPlaceName',
    'findNearbyPostalCodes',
    'findNearbyStreets',
    'findNearbyStreetsOSM',
    'findNearByWeather',
    'findNearbyWikipedia',
    'findNearestAddress',
    'findNearestIntersection',
    'findNearestIntersectionOSM',
    'findNearbyPOIsOSM',
    'geocode',
    'get',
    'gtopo30',
    'hierarchy',
    'neighbourhood',
    'neighbours',
    'ocean',
    'postalCodeCountryInfo',
    'postalCodeLookup',
    'postalCodeSearch',
    'rssToGeo',
    'search',
    'siblings',
    'srtm1',
    'srtm3',
    'timezone',
    'weather',
    'weatherIcao',
    'wikipediaBoundingBox',
    'wikipediaSearch'
];


/***/ }),

/***/ "./geonames.ts":
/*!*********************!*\
  !*** ./geonames.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pkg = __importStar(__webpack_require__(/*! ../package.json */ "../package.json"));
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
const geonames_config_1 = __webpack_require__(/*! ./geonames.config */ "./geonames.config.ts");
class Geonames {
    constructor(options) {
        this.options = options;
        this.version = pkg.version;
        if (!options || !options.username) {
            const errNoUsernameMessage = "you must provide a username, if you don't have one register on http://www.geonames.org/login";
            throw new Error(errNoUsernameMessage);
        }
        this.config = Object.assign({}, geonames_config_1.baseParams, options);
        const api = axios_1.default.create({
            baseURL: geonames_config_1.baseUri
        });
        for (let apiName of geonames_config_1.geoNamesAPI) {
            const fullApiName = `${apiName}${this.config.encoding}`;
            this[apiName] = async (params) => {
                const response = await api.get(fullApiName, {
                    params: Object.assign({ username: this.config.username, lang: this.config.lan }, params)
                });
                return response.data;
            };
        }
    }
}
exports.Geonames = Geonames;
exports.default = Geonames;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./geonames.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karim/Workspace/geonames/src/geonames.ts */"./geonames.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ })

/******/ })["Geonames"];
});
//# sourceMappingURL=geonames.js.map