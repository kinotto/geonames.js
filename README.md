# geonames.js v2.00 NEW
if you Need an API to fetch countries, states, regions, cities dynamically here's the library you're looking for

geonames.js is a flexible library for browser and Nodejs 
built on top <a href="http://www.geonames.org/" target="_blank">geonames.org<a> REST api

<img src="https://travis-ci.org/kinotto/geonames.js.svg?branch=master" alt="not found" style="display:inline" /> <img src="http://img.badgesize.io/kinotto/geonames.js/master/dist/geonames.min.js?max=100000&softmax=200000" alt="not found" />

![img](https://thumbs.gfycat.com/LegitimateSlushyHydra-max-14mb.gif)



### 1. Installation

 `npm install --save geonames.js`

<br/>


### 2. Requirements
You **have to** register (it's free) on <a href="http://www.geonames.org/login">Geonames.org</a>
in order to get the username that will be necessary for the api to work



### 3. Usage:


You can fetch almost anything taking advandage of the huge amount of information provided by geonames.org, It contains over 10 million geographical names and consists of over 9 million unique features whereof 2.8 million populated places and 5.5 million alternate names.

The list of available API is in <a href="http://www.geonames.org/export/ws-overview.html">here</a> under the webservice column.

- **For CommonJS environments (Nodejs)**: (bluebird promise based API)

  
  ```javascript
  var Geonames = require('geonames.js');
  geonames = new Geonames({username: 'myusername', lan: 'en', encoding: 'JSON'});
  ```


  ```javascript
  //plain call
  geonames.search({q: 'CONT'}) //get continents
  .then(function(resp){
    console.log(resp.geonames);
  })
  .catch(function(err){
  })
  ```
  
  ```javascript
  //chaining calls
  geonames.countryInfo({}) 
  .then(function(countries){
    return geonames.children({geonameId: countries.geonames[0].geonameId})
  })
  .then(function(states){
    return geonames.children({geonameId: stateOrProvince.geonames[0].geonameId});
  })
  .then(function(regions){
    return geonames.children({geonameId: region.geonames[0].geonameId});
  })
  .then(function(cities){
    console.log(cities.geonames);
  })
  .catch(function(err){
  })
  ```

- **alternative**: (plain ajax xhr call)

 import the script:
  

  ```html
  <script type="text/javascript" src="node_modules/geonames.js/dist/geonames.min.js"></script>
  ```
  ```javascript
   //GeoNames constructor is attacched to the global object
  geonames = new GeoNames({username: username, lan: 'en', encoding: 'JSON'});
  geonames.search({q: 'CONT'}, function(continents){ //plain xhr call
    console.log(continents);
  }, function(err){
    //error
  })
  ```

### 4. Contribution:
Feel free to contribute, any help is really appreciated :)


run with:

>gulp

>gulp dist (for the minification)

>USERNAME=myusername npm test (for unit testing)




### 4. Changelog v2.0:
- **Porting to es6 sintax and transpiring to es5
- **Added yarn and web pack
- **Split build in two different files for node and browser environments
- **fix major error on browser
- **Removed callback based api call now is only promised based
- **If you're coming from a previous version, the upgrade is not breaking you should still keep your production code as it is except if you were using the callback back mechanism rather then the promise one.

geonames.js depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can <a href="https://github.com/stefanpenner/es6-promise">polyfill</a>



### 5. License:
MIT License

Copyright (c) 2017 kinotto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
