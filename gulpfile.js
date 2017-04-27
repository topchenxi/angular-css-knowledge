const gulp = require('gulp');
// 自动同步浏览器插件
const browserSync = require('browser-sync');
// 同步运行任务插件
const runSequence = require('run-sequence');

// 编译less
var less = require('gulp-less');
// 给css3属性添加浏览器前缀插件
var autoprefixer = require('gulp-autoprefixer');

var sourcemaps = require('gulp-sourcemaps');
// 压缩css插件
var cssnano = require('gulp-cssnano');
// 给css3属性添加浏览器前缀插件
var autoprefixer = require('gulp-autoprefixer');


gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('less', () =>
    gulp
    .src('static/less/bootstrap.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('static/css'))
    .pipe(browserSync.reload({ stream: true }))
)

gulp.task('watch', ['browserSync', 'less'], () => {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('require.config.js', browserSync.reload);
    gulp.watch('static/less/**/*.less', ['less']);
})

gulp.task('default', (callback) => {
    runSequence(['browserSync', 'watch'], callback);
})