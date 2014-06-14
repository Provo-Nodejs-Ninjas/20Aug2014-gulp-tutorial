var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less');

gulp.task('less', function() {

  gulp.src('less/style.less')
    .pipe(less())
      .on('error', function(error) {
        console.log(error);
      })
    .pipe(minify())
    .pipe(gulp.dest('min'));

});

gulp.task('watch', function() {
  gulp.watch('less/style.less', ['less']);
});
