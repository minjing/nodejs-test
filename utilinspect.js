var util = require('util');

function Persion() {
    this.name = 'byvoid';

    this.toString = function() {
        return this.name;
    };
}

var obj = new Persion();

console.log(util.inspect(obj));
console.log(util.inspect(obj, true, null, true));
