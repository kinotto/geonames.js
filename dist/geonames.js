(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("https"), require("url"));
	else if(typeof define === 'function' && define.amd)
		define(["https", "url"], factory);
	else if(typeof exports === 'object')
		exports["Geonames"] = factory(require("https"), require("url"));
	else
		root["Geonames"] = factory(root["https"], root["url"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_https__, __WEBPACK_EXTERNAL_MODULE_url__) {
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

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, homepage, description, main, scripts, repository, author, contributors, license, bugs, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"geonames.js\",\"version\":\"2.3.0\",\"homepage\":\"https://github.com/kinotto/geonames.js\",\"description\":\"REST api to fetch countries, regions, cities etc. A flexible library for browser and node.js usage built on top http://www.geonames.org/\",\"main\":\"dist/geonames.min.js\",\"scripts\":{\"test\":\"mocha ./spec/test-server.js --timeout 50000\",\"test-debug\":\"mocha ./spec/test-server.js --nolazy --inspect-brk=9229\",\"coverage\":\"nyc npm test && nyc report --reporter=text-lcov | coveralls\",\"build\":\"cross-env NODE_ENV=production webpack\",\"build:dev\":\"cross-env NODE_ENV=development webpack\",\"build:all\":\"rm -rf dist/* && npm run build && npm run build:dev\"},\"repository\":\"git+https://github.com/kinotto/geonames.js.git\",\"author\":\"Karim Abdelcadir <kinotto88@yahoo.it>\",\"contributors\":[{\"name\":\"Vito Macchia\",\"email\":\"vito.macchia@gmail.com\"},{\"name\":\"Xavi Torelló\",\"email\":\"info@xaviertorello.cat\"}],\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/kinotto/geonames.js/issues\"},\"dependencies\":{},\"devDependencies\":{\"babel-core\":\"^6.26.3\",\"babel-loader\":\"^7.1.5\",\"babel-plugin-transform-object-rest-spread\":\"^6.26.0\",\"babel-preset-env\":\"^1.7.0\",\"chai\":\"^3.5.0\",\"coveralls\":\"^2.12.0\",\"cross-env\":\"^5.2.0\",\"mocha\":\"^3.2.0\",\"nyc\":\"^10.1.2\",\"opener\":\"^1.4.1\",\"require-dir\":\"^0.3.1\",\"sinon\":\"^1.17.7\",\"sinon-chai\":\"^2.8.0\",\"tiny-lr\":\"^0.2.1\",\"ts-loader\":\"^4.4.2\",\"typescript\":\"^2.9.2\",\"uglifyjs-webpack-plugin\":\"^1.2.7\",\"webpack\":\"^4.16.2\",\"webpack-cli\":\"^3.1.0\",\"webpack-node-externals\":\"^1.7.2\"}}");

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
    username: null,
    token: null,
};
exports.baseUri = 'https://secure.geonames.org/';
exports.baseUriCommercial = 'https://secure.geonames.net/';
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
/* WEBPACK VAR INJECTION */(function(global) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pkg = __importStar(__webpack_require__(/*! ../package.json */ "../package.json"));
const geonames_config_1 = __webpack_require__(/*! ./geonames.config */ "./geonames.config.ts");
if (typeof URLSearchParams === 'undefined') {
    global.URLSearchParams = __webpack_require__(/*! url */ "url").URLSearchParams;
}
if (typeof fetch !== 'function') {
    const https = __webpack_require__(/*! https */ "https");
    global.fetch = async (url) => {
        return new Promise((resolve, reject) => {
            const req = https.request(url, res => {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(new Error(`Status Code: ${res.statusCode}`));
                }
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => resolve(JSON.parse(data)));
            });
            req.on('error', reject);
            req.end();
        });
    };
}
class Geonames {
    constructor(options) {
        this.options = options;
        this.version = pkg.version;
        if (!options || !options.username) {
            const errNoUsernameMessage = "you must provide a username, if you don't have one register on http://www.geonames.org/login";
            throw new Error(errNoUsernameMessage);
        }
        this.config = Object.assign({}, geonames_config_1.baseParams, options);
        const { username, token } = this.config;
        this.uri = token ? geonames_config_1.baseUriCommercial : geonames_config_1.baseUri;
        for (let apiName of geonames_config_1.geoNamesAPI) {
            const fullApiName = `${this.uri}${apiName}${this.config.encoding}`;
            this[apiName] = async (params) => {
                params = new URLSearchParams(Object.assign({ username }, (token && { token }), { lang: this.config.lan }, params)).toString();
                const response = await fetch(`${fullApiName}?${params}`);
                if (typeof response.json !== 'function') {
                    return response;
                }
                else {
                    if (response.statusCode < 200 || response.statusCode >= 300) {
                        throw new Error('Status Code:' + (response.statusText || response.status));
                    }
                    return response.json();
                }
            };
        }
    }
}
exports.Geonames = Geonames;
exports.default = Geonames;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./geonames.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jose/Proyectos/geonames.js/src/geonames.ts */"./geonames.ts");


/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_https__;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_url__;

/***/ })

/******/ })["Geonames"];
});
//# sourceMappingURL=geonames.js.map