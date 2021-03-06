var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');



gulp.task('es6', function() {
	browserify({
    	entries: './js/weather-interface.js',
    	debug: true
  	})
    .transform(babelify)
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(''));
});

gulp.task('watch',function() {
	gulp.watch('**/*.js',['es6'])
});

gulp.task('default', ['watch']);
