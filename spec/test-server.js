const chai = require('chai')
const expect = require('chai').expect
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const username = process.env.USERNAME
const Geonames = require('../dist/geonames.min.js')

describe('Geonames', () => {
  it('should throw an error if instantiated without parameters', () => {
    const fn = () => new Geonames()
    expect(fn).to.throw(
      "you must provide a username, if you don't have one register on http://www.geonames.org/login"
    )
  })
})

describe('Geonames API', () => {
  var geonames
  beforeEach(() => {
    geonames = new Geonames({ username, lan: 'en', encoding: 'JSON' })
  })

  it('should return continent names ', done => {
    geonames
      .search({ q: 'CONT' })
      .then(resp => {
        expect(resp.geonames).to.be.instanceOf(Array)
        done()
      })
      .catch(err => done(err))
  })

  it('should return the country code of Austria', done => {
    geonames
      .countryCode({ lat: 47.03, lng: 10.2 })
      .then(resp => {
        done()
      })
      .catch(err => done(err))
  })

  it('should return the earthquakes', done => {
    geonames
      .countryCode({
        north: 44.1,
        south: -9.9,
        east: -22.4,
        west: 55.2
      })
      .then(resp => {
        done()
      })
      .catch(err => done(err))
  })

  it('should return weather info', done => {
    geonames
      .weather({ north: 44.1, south: -9.9, east: -22.4, west: 55.2 })
      .then(resp => {
        expect(resp.weatherObservations).to.exist
        done()
      })
      .catch(err => done(err))
  })

  it('should return countries information', done => {
    geonames
      .countryInfo()
      .then(resp => {
        expect(resp.geonames[0].capital).to.exist
        done()
      })
      .catch(err => done(err))
  })

  it('should return children information', done => {
    geonames
      .children({ geonameId: '6255148' })
      .then(resp => {
        expect(resp.geonames[0].population).to.exist
        done()
      })
      .catch(err => done(err))
  })

  it('should resolve NearBy', done => {
    const nearbyAPI = [
      'findNearby',
      'findNearbyPlaceName',
      'findNearbyPostalCodes',
      'findNearbyStreets',
      'findNearbyStreetsOSM',
      'findNearByWeather',
      'findNearbyWikipedia'
    ]

    let promises = nearbyAPI.map(api => {
      return geonames[api]({ lat: 48.86, lng: 2.34 })
    })

    Promise.all(promises)
      .then(() => {
        done()
      })
      .catch(err => done(err))
  })

  it('should return cities information', done => {
    geonames
      .cities({
        north: '44.1',
        south: '-9.9',
        east: '-22.4',
        west: '55.2'
      })
      .then(resp => {
        expect(resp.geonames[0].toponymName).to.exist
        done()
      })
      .catch(err => done(err))
  })
})
