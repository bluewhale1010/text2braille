'use strict';

var expect = require('chai').expect;
var toBraille = require('../index');

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = toBraille('1');
        expect(result).to.equal('⠼⠁');
    });

    it('should convert single small alphabet', function() {
        var result = toBraille('a');
        expect(result).to.equal('⠁');
    });

    it('should convert single capital alphabet', function() {
        var result = toBraille('H');
        expect(result).to.equal('⠠⠓');
    });

    it('should convert alphanumberic', function() {
        var result = toBraille('2944B');
        expect(result).to.equal('⠼⠃⠼⠊⠼⠙⠼⠙⠠⠃');
    });
});