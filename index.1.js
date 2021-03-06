var express = require('express');
var path = process.cwd();
 
function run(argv) {
    if (argv[0] === '-v' || argv[0] === '--version') {
        console.log('version is 1.0.0');
    }
    else if (argv[0] === '-h' || argv[0] === '--help') {
        console.log('usage:\n');
        console.log('-v --version [show version]')
    }
    else if (argv[0] === '-s' || argv[0] === '--start') {
        var app = new express();
        app.use('/static', express.static(path));
        app.listen(8085, function () {
            console.log('server start at port 8085');
        });
    }
}
 
run(process.argv.slice(2));　　
