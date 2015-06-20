var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        browser: 'google chrome canary'
    });

    gulp.watch('src/*.js').on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
