/**
 * Created by tigra on 26.06.16.
 */
'use strict';

var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('clean:js', function () {
    del('./public/js/*')
});

gulp.task('js', ['clean:js'], function () {
    var options = {
        debug: true
    };

    return browserify('./src/js/app.js', options)
        .transform('babelify', {presets: ['react', 'es2015', 'stage-2']})
        .bundle()
        .on('error', function handleError(err) {
            console.log(err.toString());
            this.emit('end'); // Recover from errors
        })
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('clean:css', function () {
    del('./public/css/*')
});

gulp.task('css', ['clean:css'], function () {
    return gulp.src('./src/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', ['build'], function () {
    return gulp.watch('./src/**/*', ['build']);
});

gulp.task('build', ['js', 'css']);

gulp.task('default', ['watch']);
