const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile SASS
function style() {
    return gulp.src(['scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
}

// Watch SASS & Serve
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['scss/*.scss'], style);
    gulp.watch("*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;