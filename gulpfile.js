var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

gulp.task('less', function() {

  gulp.src('less/style.less')
    .pipe(plumber(notify.onError("Error: <%= error.message %>")))
    .pipe(less())
    .pipe(minify())
    .pipe(gulp.dest('min'));

});

gulp.task('watch', function() {
  gulp.watch('less/style.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
