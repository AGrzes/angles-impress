var hexify = require('./../angles');
var trumpet = require('trumpet');
var chai = require('chai');
var s = require('stream');

var streamFromString = function(string){
    var stream = new s.Readable();
    stream.push(string);    // stream apparently does not accept objects
    stream.push(null);
    return stream;
};


var expect = chai.expect;
describe('hexify', function() {
    it("Should process 'data-angles' tags",function(done){
        var src = '<div data-angles="0 0"/>';
        var tr = trumpet();
        tr.selectAll('[data-angles]', function (step) {
            var x = step.getAttribute('data-x');
            var y = step.getAttribute('data-y');
            expect(x).to.not.be.undefined;
            expect(y).to.not.be.undefined;
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });

    it("Should calculate x correctly",function(done){
        var src = '<div data-angles="0 100 90 100 0 100"/>';
        var tr = trumpet();
        tr.selectAll('[data-angles]', function (step) {
            var x = step.getAttribute('data-x');
            expect(x).to.be.equals('200');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
    it("Should calculate y correctly",function(done){
        var src = '<div data-angles="0 100 90 100 0 100"/>';
        var tr = trumpet();
        tr.selectAll('[data-angles]', function (step) {
            var y = step.getAttribute('data-y');
            expect(y).to.be.equals('100');
            done();
        });
        streamFromString(src).pipe(hexify()).pipe(tr);
    });
});
