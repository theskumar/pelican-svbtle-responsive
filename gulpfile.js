var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require ('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    defineModule = require('gulp-define-module'),
    declare = require('gulp-declare'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    cmq = require('gulp-combine-media-queries');


gulp.task('styles', function() {
    return gulp.src('static_src/css/**/*.scss')
        .pipe(sass({
            compass: false,
            lineNumbers: true,
            loadPath: ['static_src/css'],
            style: 'expanded'
        }))
        .pipe(autoprefixer('last 2 version', 'ie 10'))
        .pipe(rename({
            suffix: '.f' // Suffixed with .f so as to avoid any conflicts if RegularCSS files are called screen.min.css or screen.css
        }))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        // .pipe(cmq({log: true }))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css'))
        .pipe(livereload())
        .pipe(notify({message: "Styles task completed"}));
});

gulp.task('scripts', function() {
    return gulp.src([
            'static_src/js/plugins/plugins.js',
            'static_src/js/plugins/*.js',
            'static_src/js/g.js',
            'static_src/js/partials/*.js',
            'static_src/js/main.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('static/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
        .pipe(livereload())
        .pipe(notify({
            message: "Scripts task completed"
        }));
});


gulp.task('images', function() {
    return gulp.src('static_src/images/**/*')
        .pipe(gulp.dest('static/images'))
        .pipe(livereload())
        .pipe(notify({
            message: 'Images task complete',
            onLast: true
        }));
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('public'))
        .pipe(livereload())
        .pipe(notify({
            message: "HTML task complete"
        }));
});

gulp.task('all-js', function() {
    runSequence('plugins', 'scripts');
});

gulp.task('fonts', function() {
    return gulp.src('static_src/fonts/*')
        .pipe(gulp.dest('static/fonts'))
        .pipe(livereload())
        .pipe(notify({
            message: 'Fonts task complete',
            onLast: true
        }))
});

/*
    regularCSS allows us to include CSS files that might not be able to be used within the .scss files
    Ensure to uncomment the gulp watch task and regularCSS object from the gulp build array.
*/

gulp.task('regularCSS', function() {
    return gulp.src('static_src/css/*.css')
        .pipe(gulp.dest('static/css'))
        .pipe(notify({
            message: 'Regular CSS task complete',
            onLast: true
        }))
})

gulp.task('default', [], function() {
    livereload.listen();
    gulp.watch(['static_src/js/**/*.js'], ['scripts']);
    gulp.watch('static_src/css/**/*.scss', ['styles']);
    // gulp.watch('static_src/css/*.css', ['regularCSS']); // Uncomment to allow uncompiled CSS files to be used.
    gulp.watch('static_src/images/**/*', ['images']);
    gulp.watch('templates/**/*.html', ['html']);
    gulp.watch('static_src/fonts/*', ['fonts']);
});

gulp.task('build', function() {
    runSequence(
        'scripts',
        'styles',
        // 'regularCSS' // Uncomment to allow uncompiled CSS files to be used.
        'images',
        'html',
        'fonts'
        );
});
