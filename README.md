# geonames.js v3.0.3 NEW (see [changelog](#5-changelog-v303))

`geonames.js` is a flexible library for browser and Nodejs 
built on top <a href="http://www.geonames.org/" target="_blank">geonames.org webservices<a>.

It provides a simple API to dynamically fetch countries, states, regions, cities and other milion geographical names.

<img src="https://travis-ci.org/kinotto/geonames.js.svg?branch=master" alt="not found" style="display:inline" /> <img src="https://david-dm.org/kinotto/geonames.js.svg" alt="not found" style="display:inline" /> <img src="http://img.badgesize.io/kinotto/geonames.js/master/dist/geonames.min.js?max=100000&softmax=200000" alt="not found" />


![img](https://thumbs.gfycat.com/LegitimateSlushyHydra-max-14mb.gif)


<br/> <br/>


### 1. Installation

```sh
npm install --save geonames.js
```

or

```sh
yarn add geonames.js
```


### 2. Requirements
You **have to** register (it's free) on <a href="http://www.geonames.org/login">Geonames.org</a>
in order to get the username that will be necessary for the API to work.

geonames.js depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can use a <a href="https://github.com/stefanpenner/es6-promise">polyfill</a>.

### 3. Usage:


You can fetch almost anything by taking advantage of the huge amount of information provided by geonames.org. It contains over 10 million geographical names and consists of over 9 million unique features whereof 2.8 million populated places and 5.5 million alternate names.

The list of available options in the API is in <a href="http://www.geonames.org/export/ws-overview.html">here</a> under the webservice column.

- **Import the library**:
   - ***server usage (NodeJS)***
    ```javascript
       const { Geonames } = require('geonames.js') /* commonJS */
    ```
   - ***browser usage (React, Angular, Vue etc.)***
    ```javascript
       import Geonames from 'geonames.js'; /* es module */
    ```
  
- **Usage**:

  Initialize the Geoames using your settings:

  _free WS_
  ```javascript
  const geonames = Geonames({
    username: 'myusername',
    lan: 'en',
    encoding: 'JSON'
  });
  ```

  _commercial WS_

  To use the commercial tier just define your `token`:

  ```javascript
  const geonames = Geonames({
    username: 'myusername',
    token: 'mytoken',
    lan: 'en',
    encoding: 'JSON'
  });
  ```

  Since the library return promises, you can use either async/await or promise-based syntax

  _plain call_
  ```javascript
  // async/await
  try{
    const continents = await geonames.search({q: 'CONT'}) //get continents
  }catch(err){
    console.error(err);
  }
  
  // promise
  geonames.search({q: 'CONT'}) //get continents
  .then(resp => {
    console.log(resp.geonames);
  })
  .catch(err => console.error(err));
  ```


  _chaining calls_
  ```javascript 
  // async/await
  try{
    const countries = await geonames.countryInfo({}) //get continents
    const states = await geonames.children({geonameId: countries.geonames[0].geonameId})
    const regions = await geonames.children({geonameId: states.geonames[0].geonameId});
    const cities = await geonames.children({geonameId: regions.geonames[0].geonameId});
    console.log(cities.geonames);
  }catch(err){
    console.error(err);
  }

  // promise
  geonames.countryInfo({}) 
  .then(countries => {
    return geonames.children({geonameId: countries.geonames[0].geonameId})
  })
  .then(states => {
    return geonames.children({geonameId: states.geonames[0].geonameId});
  })
  .then(regions => {
    return geonames.children({geonameId: regions.geonames[0].geonameId});
  })
  .then(cities => {
    console.log(cities.geonames);
  })
  .catch(err => console.log(err));
  ```



### 4. Contribution:
Feel free to contribute; any help is really appreciated :)

run with:

```sh
yarn build-dev (dev bundle)
yarn build (prod bundle)
yarn build:all (both - for packaging)
USERNAME=myusername yarn test (unit testing)
```


<br/>

### 5. Changelog v3.0.3:
- **Added support for latest Geonames api (address, geoCodeAddress, streetNameLookup)**
- **Added typescript autocomplete for all the api's**
- **change function constructor to plain function**
- **updated dependencies**

![img](https://i.imgur.com/dPYpyZP.gif)
  
<br/>

### 6. License:
MIT 2017 License <a href="https://github.com/kinotto">Karim Abdelcadir</a>
