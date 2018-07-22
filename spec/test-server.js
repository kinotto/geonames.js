const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const username = process.env.USERNAME;
//const Geonames = require('../src/geonames');
const Geonames = require('../dist/geonames.min.node.js');


describe('Geonames', () => {
  it('should write an error on console if instantiated without parameters', () => {
    const spy = sinon.spy(console, 'log');
    new Geonames();
    expect(console.log).to.have.been.called;
    spy.reset();
  })
})

/*describe('test geonames WITH CALLBACKS', () => {
  let geonames;
  let originalPromise = global.Promise;

  beforeEach(() => {
    geonames = new Geonames({ username, lan: 'en', encoding: 'JSON' });
  })

  it('should return the continents', done => {
    geonames.search({ q: 'CONT' }, resp => {
      expect(resp.geonames).to.be.instanceOf(Array);
      done();
    }, err => {
      done(err);
    })

  })

  afterEach(() => {
    global.Promise = originalPromise;
  })
})*/


describe('Geonames API', () => {

  var geonames;
  beforeEach(() => {
    geonames = new Geonames({ username, lan: 'en', encoding: 'JSON' });
  })


  it('should return continent names ', done => {
    geonames.search({ q: 'CONT' })
      .then(resp => {
        expect(resp.geonames).to.be.instanceOf(Array);
        done();
      })
      .catch(err => {
        done(err);
      })
  })

  it('continent should have a continendCode ', done => {
    geonames.search({ q: 'CONT' })
      .then(resp => {
        expect(resp.geonames[0].continentCode).to.exist;
        done();
      })
      .catch(err => {
        done(err);
      })
  })

  it('should return countries information', done => {
    geonames.countryInfo()
    .then(resp => {
      expect(resp.geonames[0].capital).to.exist;
      done();
    })
    .catch(err => {
      done(err);
    })
  })

  it('should return children information', done => {
    geonames.children({geonameId: '6255148'})
    .then(resp => {
      expect(resp.geonames[0].population).to.exist;
      done();
    })
    .catch(err => {
      done(err);
    })
  })

  it('should return cities information', done => {
    geonames.cities({
      north: '44.1',
      south: '-9.9',
      east: '-22.4',
      west: '55.2'
    })
      .then(resp => {
        expect(resp.geonames[0].toponymName).to.exist;
        done();
      })
      .catch(err => {
        done(err);
      })
  })
})