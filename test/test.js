require('../index.js');
var expect = require('chai').expect

var assert = require('assert')
describe('calculator', function() {
    it('should add two numbers', function(done) {
        var total;
        calculator.add(5,2);
        exepct(total).to.equal(7);
    })
})