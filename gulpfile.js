/**
 * Created by tigra on 02.07.16.
 */


var gulp = require('gulp');
var cp = require('child_process');
var rename = require('gulp-rename');
var path = require('path');

/**
 * API Server (Database)
 */

gulp.task('restore-database', function() {
    return gulp.src('./data/restore.json')
        .pipe(rename('db.json'))
        .pipe(gulp.dest('./data'));
});

gulp.task('serve:api', ['restore-database'], function(done) {
    var serverPath = path.join(__dirname, 'node_modules/.bin/json-server');
    cp.exec(serverPath + ' --watch ./data/db.json --port 3001', {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Webpack Dev Server
 */

gulp.task('serve:node', function(done) {
    var serverPath = path.join(__dirname, 'node_modules/.bin/webpack-dev-server');
    cp.exec(serverPath + ' --inline --content-base public --history-api-fallback -d --port 3000', {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Node Server (Express)
 */

gulp.task('serve:prod', function(done) {
    var serverPath = path.join(__dirname, 'node_modules/.bin/webpack');
    cp.exec(serverPath + ' && node server.js', {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Main tasks
 */

gulp.task('prod', ['serve:prod', 'serve:api']);
gulp.task('serve', ['serve:node', 'serve:api']);
gulp.task('default', ['serve']);

