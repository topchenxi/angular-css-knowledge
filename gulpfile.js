const gulp = require('gulp');
// 自动同步浏览器插件
const browserSync = require('browser-sync');
// 同步运行任务插件
const runSequence = require('run-sequence');
// 编译less
var less = require('gulp-less');
// 给css3属性添加浏览器前缀插件
var autoprefixer = require('gulp-autoprefixer');
// css map
var sourcemaps = require('gulp-sourcemaps');
// 压缩css插件
var cssnano = require('gulp-cssnano');

var markdown = require('gulp-markdown');


// 起本地静态资源服务器，及监听
gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('md', () =>
    gulp.src(['docs/*.md', 'docs/**/*.md'])
    .pipe(markdown())
    .pipe(gulp.dest('html'))
);


// 编译less文件
gulp.task('less', () =>
    gulp
    .src('static/less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('static/css'))
);


// 监听文件修改
gulp.task('watch', ['browserSync', 'less', 'md'], () => {

    gulp.watch([
        '*.html',
        'views/**/*.html'
    ], browserSync.reload);

    gulp.watch([
        'require.config.js',
        'controller/*.js',
        'controller/**/*.js'
    ], browserSync.reload);

    gulp.watch([
        'static/less/*.less',
        'static/less/**/*.less'
    ], ['less', browserSync.reload]);

    gulp.watch('docs/**/*.md', ['md', browserSync.reload]);
})

// 默认任务
gulp.task('default', (callback) => {
    runSequence(['browserSync', 'watch'], callback);
})