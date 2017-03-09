# geonames.js
if you Need an API to fetch countries, state, region, cities here's the library you're looking for

geonames.js is a flexible library for browser and Nodejs 
built on top <a href="http://www.geonames.org/">geonames.org<a> REST api

<img src="https://travis-ci.org/travis-ci/travis-web.svg?branch=master" alt="not found" />

###1. Installation

> npm install --save geonames.js

<br/>


###2. Requirements
You **need to** register on <a href="http://www.geonames.org/login">Geonames.org</a>
in order to get the username that will be necessary for the api to work



###3. Usage:


You can fetch information about continent, states, region, provinces, cities taking the advandage of the huge amount of information provided by geonames.org service API.

The list of available API is in the table <a href="http://www.geonames.org/export/ws-overview.html">here</a> under the webservice column.

Below i show some few examples.

- **Nodejs**: (promise based API)
  additional requirements:
  
  > npm install --save bluebird request
  
  first import the module
  
  ```javascript
  var Geonames = require('geonames');
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
  .then(function(stateOrProvince){
    return geonames.children({geonameId: stateOrProvince.geonames[0].geonameId});
  })
  .then(function(region){
    return geonames.children({geonameId: region.geonames[0].geonameId});
  })
  .then(function(cities){
    console.log(cities.geonames);
  })
  .catch(function(err){
  })
  ```

- **browser**: (plain ajax xhr call)

  you have to import the script here:
  

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

###4. Contribution:
Feel free to contribute, any help is really appreciated :)


run with:

>gulp

>gulp dist (for the minification)

>USERNAME=myusername npm test (for unit testing with mocha)







###5. License:
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
