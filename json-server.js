/**
 * Created by tigra on 02.07.16.
 */
var cp = require('child_process');
var path = require('path');

var serverPath = path.join(__dirname, 'node_modules/.bin/json-server');
cp.exec(serverPath + ' --watch ./data/db.json --port 3001', {stdio: 'inherit'})
    .on('close', function() {
        console.log('json server close');
    });
