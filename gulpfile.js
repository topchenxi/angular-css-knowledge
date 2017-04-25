const gulp = require('gulp');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');


gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('watch', () => {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('require.config.js', browserSync.reload)
})

gulp.task('default', (callback) => {
    runSequence(['browserSync', 'watch'], callback);
})