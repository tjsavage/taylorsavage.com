var gulp = require('gulp');

gulp.task('default', function() {

})

gulp.task('build', function() {
  var deepMarkdowns = gulp.src('./src/**/*.md', {
      base: './src/'
    })
    .pipe(gulp.dest('./docs/'));
});
