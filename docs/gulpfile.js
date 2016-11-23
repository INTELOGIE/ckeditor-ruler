var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('css', function() {
    gulp.src('./node_modules/ckeditor-ruler/styles/ruler-styles.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build'));
});
gulp.task('js', function() {
    return browserify('./index.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});


gulp.task('default', ['css', 'js']);


gulp.task('copy', function() {
    gulp.src('./node_modules/ckeditor-ruler/**/*.*')
        .pipe(gulp.dest('./ckeditor/plugins/ruler'));
});