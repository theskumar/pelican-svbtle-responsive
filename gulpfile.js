var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('sass', function() {
  gulp.src('static/css/*.scss')
    .pipe(watch('static/css/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('static/css'))
    .pipe(livereload());
});

gulp.task('templates', function() {
  gulp.src('templates/**/*.html')
    .pipe(watch('templates/**/*.html'))
    .pipe(livereload());
});

gulp.task('default', ['sass', 'templates'])
