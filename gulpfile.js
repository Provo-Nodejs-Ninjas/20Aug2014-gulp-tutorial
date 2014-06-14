var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber');

gulp.task('less', function() {

  gulp.src('less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('min'));

});

gulp.task('watch', function() {
  gulp.watch('less/style.less', ['less']);
});
