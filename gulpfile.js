var gulp = require('gulp')
var mocha = require('gulp-mocha')
var browserify = require('browserify')

gulp.task('build', function() {
  gulp.src('src/*.js', { read: false })
    .pipe(browserify({
      debug: !gulp.env.production,
      insertGlobals: true
    }))
    .pipe(gulp.dest('./build'))
})

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(mocha({
      reporter: 'spec'
    }))
})
