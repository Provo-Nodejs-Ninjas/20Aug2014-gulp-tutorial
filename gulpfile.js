var gulp = require('gulp'),
    minify = require('gulp-minify-css');

gulp.task('css', function() {

  gulp.src('css/style.css')
    .pipe(minify())
    .pipe(gulp.dest('min'));

});
