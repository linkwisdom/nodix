var require = require('beef');
var path = require('path');

global.require = require;

var argv = process.argv;
console.log(argv);
if ( argv.length > 1 ) {
    var args = Array.prototype.slice.call(argv, 2);
    for (var i = 0, l = args.length; i < l; i++) {
        require(path.resolve(process.cwd(), args[i]));
    }
}