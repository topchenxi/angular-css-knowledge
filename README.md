### myAngular
自己用angular+angular-ui-router+requirejs+gulp 搭的小项目

> 配置安装

下载源文件后运行

**NPM**
```sh
npm install 
```

> 前端自动化

## 对静态资源进行监听，编译，使用模块如下：

* browser-sync
* run-sequence
* gulp-less
* gulp-autoprefixer
* gulp-sourcemaps
* gulp-cssnano

### 使用browser-sync 来进行本地静态资源服务器及刷新浏览器

```javascript

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: ''
        }
    })
});

```
### 引入less，使用gulp-less，gulp-autoprefixer，gulp-sourcemap，gulp-cssnano 来编译压缩

```javascript

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
);

```

### 使用run-sequence 来同步运行任务插件

```javascript
gulp.task('default', (callback) => {
    runSequence(['browserSync', 'watch'], callback);
})
```

> 项目入口

## 使用的库主要是

* requirejs
* angular
* angular-ui-router

### 使用requirejs 来加载页面所需的js

```javascript
const CURRENT_PATH = '/'
const COMPONENTS_PATH = './components/';

require.config({
    paths: {
        'angular': COMPONENTS_PATH + 'angular/angular',
        'app': CURRENT_PATH + 'app',
        'ui-route': COMPONENTS_PATH + 'angular-ui-router/release/angular-ui-router',
        'route': CURRENT_PATH + 'route/angular.route',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui-route': {
            deps: ['angular'],
            exports: 'ui-route'
        }
    }
})

```

### 引入

```javascript
require([
    'angular',
    'app',
    'route',
    'ui-route',
    './controller/controller',
], function() {
    angular.bootstrap(document, ['webapp']);
})

```
### angular 入口 app.js

```javascript

    var app = angular.module('webapp', [
        'ui.router',
        'webapp.Ctrl',
    ]);
    return app;

```
### angular 路由定义 angular.route.js

```javascript

const PATH_LAYOUT = './views/common/layout.html';

const PATH_MENU = './views/common/menu.html';

$stateProvider.state('index', {
    url: '/index',
    views: {
        'layout': {
            templateUrl: PATH_LAYOUT
        },
        'side@index': {
            templateUrl: PATH_MENU
        },
        'main@index': {
            templateUrl: './views/homepage/index.html'
        }
    }
})

```
### 未完待续（还有相关angular指令，等有时间再补上）

[github](https://github.com/topchenxi/myAngular)