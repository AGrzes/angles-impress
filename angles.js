var trumpet = require('trumpet');
var angles = function () {
    var tr = trumpet();

    tr.selectAll('[data-angles]', function (step) {
        var anglesString = step.getAttribute('data-angles');
        var angles = anglesString.split(" ");
        var x = 0,
            y = 0;
        for (var i = 0; i < angles.length - 1; i += 2) {
            var angle = angles[i] /180 * Math.PI;
            var distance = angles[i+1];
            x += Math.cos(angle)*distance;
            y += Math.sin(angle)*distance;
        }
        step.setAttribute('data-x', x);
        step.setAttribute('data-y', y);
    });
    return tr;
};
module.exports = angles;
