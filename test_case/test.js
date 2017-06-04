var chai = require('chai');
var expect = chai.expect;
var sum = require("./test_code.js");
chai.should();
// var foo;
  describe('int', function() {
    it('should return number', function() {
        //var foo = sum.add(1,3);
       expect(sum.add2(1, 0)).to.equal(2);
      //typeof(x) === 'string';
      //console.log(foo);
    });
  });
