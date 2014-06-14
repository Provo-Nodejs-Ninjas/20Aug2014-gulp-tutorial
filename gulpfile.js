var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less');

gulp.task('less', function() {

  gulp.src('less/style.less')
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('min'));

});
