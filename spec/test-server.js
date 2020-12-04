
/** executes in node environment */
const Geonames = require("../dist/geonames.min.js");

//const { GeonamesInstance, GeonamesOptions } = require("../dist/geonames-types");
//import { GeonamesInstance, GeonamesOptions } from "../src/typings"
//import { Geonames } from "../src/geonames";
//import Geonames from 'geonames.js';

const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai)
const username = process.env.USERNAME


describe('Geonames', () => {
  it('should throw an error if instantiated without parameters', () => {
    const fn = () => Geonames()
    expect(fn).to.throw("you must provide a username, if you don't have one register on http://www.geonames.org/login")
  })

  it('should use the free tier if no token is provided', () => {
    const expectedDomain = "https://secure.geonames.org/"
    const settings = {
      username,
      lan: 'en',
      encoding: 'JSON',
    }
    const geonames = Geonames(settings);

    expect(geonames.uri).to.be.a('string').to.equal(expectedDomain)
    expect(geonames.options).to.be.an('Object').that.not.have.keys('token').that.include({ token: null })
    expect(geonames.config).to.be.an('Object').that.include(settings)
  })

  it('should use the commercial tier if token is provided', () => {
    const expectedDomain = "https://secure.geonames.net/"
    const settings = {
      username,
      token: "dummyToken",
      lan: 'en',
      encoding: 'JSON',
    }
    const geonames = Geonames(settings)

    expect(geonames.uri).to.be.a('string').to.equal(expectedDomain)
    expect(geonames.options).to.be.an('object').that.have.any.keys('token')
    expect(geonames.config).to.be.an('object').that.include({ token: settings.token })
  })
})

describe('Geonames API', () => {
  let geonames
  beforeEach(() => {
    geonames = Geonames({ username, lan: 'en', encoding: 'JSON' });

  })

  it(' should return the geocode addresses', () => {
    geonames
      .geoCodeAddress({ q: 'Museumplein 6 amsterdam' })
      .then(resp => {
        expect(resp).to.exist
      })
  })

  it('should return continent names ', done => {
    geonames
      .search({ q: 'CONT' })
      .then((resp) => {
        expect(resp.geonames).to.be.instanceOf(Array)
        done()
      })
      .catch(err => done(err))
  })

  it('should return continent names using multiple query string with same key (featureTag)', done => {
    geonames
      .search({ country: 'uk', featureCode: ['ADM2', 'ADM1'] })
      .then((resp) => {
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
      .then((resp) => {
        expect(resp.weatherObservations).to.exist
        done()
      })
      .catch(err => done(err))
  })

  it('should return countries information', done => {
    geonames
      .countryInfo()
      .then((resp) => {
        expect(resp.geonames[0].capital).to.exist
        done()
      })
      .catch(err => done(err))
  })

  it('should return children information', done => {
    geonames
      .children({ geonameId: '6255148' })
      .then((resp) => {
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
      return (geonames)[api]({ lat: 48.86, lng: 2.34 })
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
      .then((resp) => {
        expect(resp.geonames[0].toponymName).to.exist
        done()
      })
      .catch(err => done(err))
  })
})

// ts-node/register