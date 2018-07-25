import { GeonamesConfig } from './geonames.types'

export const baseParams: GeonamesConfig = {
  encoding: 'JSON',
  formatted: true,
  lan: 'en',
  style: 'full',
  username: null
}

export const baseUri = 'https://secure.geonames.org/'

export const geoNamesAPI = [
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
