/**
 * Created by tigra on 26.06.16.
 */
'use strict';

var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var path = require('path');
var sass = require('gulp-sass');

gulp.task('clean:js', function () {
    del('./public/js/*')
});

gulp.task('js', ['clean:js'], function () {
    return gulp.src('./src/js/app.js')
        .pipe(webpack(webpackConfig))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('clean:css', function () {
    del('./public/css/*')
});

gulp.task('css', ['clean:css'], function () {
    return gulp.src('./src/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('build', ['js', 'css']);

gulp.task('watch:build', function () {
    return gulp.watch('./src/**/*', ['build']);
});

gulp.task('watch', ['build', 'watch:build']);
gulp.task('default', ['build']);
