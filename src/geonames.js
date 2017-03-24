;(function(){
    'use strict';

    var ENV = {
        SERVER: 0, //server usage
        BROWSER: 1 //browser usage
    }
    var _cache = {};
    var _env = typeof module !== 'undefined' && module.exports ?
        ENV.SERVER : ENV.BROWSER;

    if(_env === ENV.SERVER){
        try{
            require.resolve('bluebird');
            require.resolve('request');
            var request = require('request');
            var promise = require('bluebird');
        } catch(err){
            console.log('you must include bluebird and request library');
            return;
        }
    }

    function GeoNames(config){
        config = config || {};
        this.version = '1.0';
        this.lan = config.lan || 'en';
        this.encoding = config.encoding || 'JSON';
        if(!config.username){
            console.log('you must provide a username, if you don\'t have '+
            'one register on http://www.geonames.org/login');
        }
        this.username = config.username || 'demo';
    }

    GeoNames.prototype.CONF = {
        baseUri: 'http://api.geonames.org/',
        geoNamesAPI: [
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
            'findNearbyStreets', //only USA
            'findNearbyStreetsOSM',
            'findNearByWeather',
            'findNearbyWikipedia',
            'findNearestAddress', //only USA
            'findNearestIntersection', //only USA
            'findNearestIntersectionOSM',
            'findNearbyPOIsOSM',
            'geocode', //only USA
            'get',
            'gtopo30',
            'hierarchy',
            'neighbourhood', //only USA
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
        ]
    }

    for(var i = 0; i < GeoNames.prototype.CONF.geoNamesAPI.length; i++){
        (function(indexAPI){
            GeoNames.prototype[GeoNames.prototype.CONF.geoNamesAPI[indexAPI]] = function(params, successCb, errorCb){
                if(typeof params === 'function'){
                    //user did not specified the parameters object arguments sliced to the right
                    var _successCb = params;
                    var _errorCb = successCb;
                    params = {};
                    successCb = _successCb;
                    errorCb = _errorCb;
                    console.log('warning: you did not  pass an object of parameters as first argument');
                }
                var baseParams = {
                    formatted: true,
                    style: 'full',
                    username: this.username,
                    lang: this.lan
                }
                var params = extend({}, baseParams, params);
                var url = buildUrl(this.CONF.baseUri + this.CONF.geoNamesAPI[indexAPI] + this.encoding, params);
                var options = {
                    uri: url,
                    method: 'GET'
                }
                return ajaxCall(options, _env, successCb, errorCb);
            }
        }(i));
    }


    function ajaxCall(options, _env, successCb, errorCb){

        if(_env === ENV.BROWSER){
            browserCall(options, successCb, errorCb);
        } else{
            return new Promise(function(resolve, reject){
                /*if(errParams){
                    return reject(errParams);
                }*/
                if(_cache[options.uri]){ /*avoid making a new ajax call */
                    return resolve(_cache[options.uri]);
                }
                serverCall(options, resolve, reject);
            })
        }

    }

    function browserCall(options, successCb, errorCb) {
        var xhr = new XMLHttpRequest();
        successCb = successCb || function(resp){console.log('Geonames.js - call return with success status but is not managed '+resp)}
        errorCb = errorCb || function(error){console.log('Geonames.js - exception thrown and not handled '+error)}

        if(_cache[options.uri]){ /*avoid making a new ajax call */
            return successCb(_cache[options.uri]);
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE ) {
                if (xhr.status == 200) {
                    _cache[options.uri] = JSON.parse(xhr.responseText);
                    return successCb(_cache[options.uri]);
                }
                else if (xhr.status >= 400) {
                    var error = new Error('error making the request');
                    error.status = xhr.status;
                    return errorCb(error);
                }
            }
        };

        xhr.open(options.method, options.uri, true);
        xhr.send();
    }
    function serverCall(options, resolve, reject){
        var req = request(options,
        function (err, resp, bodyresp) {
        if (err || resp.statusCode >= 400) {
            return reject(err || new Error(bodyresp));
        }
        _cache[options.uri] = JSON.parse(bodyresp);
        return resolve(_cache[options.uri]);
        });
    }


    /* utilities */
    function buildUrl(url, parameters){
        var qs = "";
        for(var key in parameters) {
            var value = parameters[key];
            qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
        if (qs.length > 0){
            qs = qs.substring(0, qs.length-1); //chop off last "&"
            url = url + "?" + qs;
        }
        return url;
    }

    function extend(){ //extend({}, a, b) and extend(a, b)
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    if(typeof module !== 'undefined' && module.exports){
        module.exports = GeoNames;
    } else{
        window.GeoNames = GeoNames;
    }

})();
