var chai = require('chai');
var should = chai.should();
var expect = require('chai').expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request'); 
var Promise = require('bluebird');
var Geonames = require('../src/geonames');

chai.use(sinonChai);

var username =  process.env.USERNAME;

describe('Geonames', function(){
  it('should write an error on console if instantiated without parameters', function(){
      var spy = sinon.spy(console, 'log');
      var geonames = new Geonames();
      expect(console.log).to.have.been.called;
      spy.reset();
    })
})


describe('Geonames API', function(){

    var geonames;
    beforeEach(function(){
      geonames = new Geonames({username: username, lan: 'en', encoding: 'JSON'});
    })


    it('should return continent names ', function(done){
      geonames.search({q: 'CONT'})
      .then(function(resp){
        expect(resp.geonames).to.be.instanceOf(Array);
        done();
      })
      .catch(function(err){
        done(err);
      })
    })

    it('continent should have a continendCode ', function(done){
      geonames.search({q: 'CONT'})
      .then(function(resp){
        expect(resp.geonames[0].continentCode).to.exist;
                done();
      })
      .catch(function(err){
        done(err);
      })
    })

    /*it('should return countries information', function(done){
      geonames.countryInfo()
      .then(function(resp){
        expect(resp.geonames[0].capital).to.exist;
        done();
      })
      .catch(function(err){
        done(err);
      })
    })*/

    it('should return children information', function(done){
      geonames.children({geonameId: '6255148'})
      .then(function(resp){
        expect(resp.geonames[0].population).to.exist;
        done();
      })
      .catch(function(err){
        done(err);
      })
    })

    it('should return cities information', function(done){
      geonames.cities({
        north: '44.1',
        south: '-9.9',
        east: '-22.4',
        west: '55.2'
      })
      .then(function(resp){
        expect(resp.geonames[0].toponymName).to.exist;
        done();
      })
      .catch(function(err){
        done(err);
      })
    })
})