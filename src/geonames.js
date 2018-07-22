
const axios = require('axios');

const CONF = {
  baseUri: 'https://secure.geonames.org/',
  baseParams: {
    formatted: true,
    style: 'full',
    lan: 'en',
    encoding: 'JSON', 
    username: 'demo'
  },
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

function GeoNames(_config = {}) {
  if (!_config.username) {
    console.log('you must provide a username, if you don\'t have ' +
      'one register on http://www.geonames.org/login');
  }
  this.config = {...CONF.baseParams, ..._config};

  for (let i = 0; i < CONF.geoNamesAPI.length; i++) {

    this[CONF.geoNamesAPI[i]] = function(params = {}) {
      const config = {
        url: `${CONF.baseUri}${CONF.geoNamesAPI[i]}${this.config.encoding}`,
        method: 'GET',
        params: { ...this.config, ...params }
      }
      return promiseBasedApiCall(config);
    }
  }
}

const promiseBasedApiCall = config => {
  return axios(config)
    .then(resp => resp.data);
}

module.exports = GeoNames;