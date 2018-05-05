(function(){
  var expect = chai.expect;


var username = "YOURUSERNAME"; //set your username here
describe('Geonames API', function(){

    var geonames;
    beforeEach(function(){
      geonames = new GeoNames({username: username, lan: 'en', encoding: 'JSON'});
    })


  it('should return continent names ', function(done){
      geonames.search({q: 'CONT'}, function(resp){
        expect(resp.geonames).to.be.instanceOf(Array);
        done();
      }, function(err){
        done(err);
      })

    })

      it('continent should have a continendCode ', function(done){
      geonames.search({q: 'CONT'}, function(resp){
        expect(resp.geonames[0].continentCode).to.exist;
        done();
      }, function(err){
        done(err);
      })
    })

    /*it('should return countries information', function(done){
      geonames.countryInfo(function(resp){
        expect(resp.geonames[0].capital).to.exist;
        done();
      }, function(err){
        done(err);
      })
    })*/

    it('should return children information', function(done){
      geonames.children({geonameId: '6255148'}, function(resp){
        expect(resp.geonames[0].population).to.exist;
        done();
      }, function(err){
        done(err);
      })
    })

})
}())
