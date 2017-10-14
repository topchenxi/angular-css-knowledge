define(['../app'], function(app) {
    // console.log(app);
    app.config(function(
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $httpProvider) {
        $urlRouterProvider.otherwise("/index");
        const PATH_LAYOUT = './views/common/layout.html';
        const PATH_MENU = './views/common/menu.html';
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    'layout': {
                        templateUrl: PATH_LAYOUT
                    },
                    'side@index': {
                        templateUrl: PATH_MENU
                    },
                    'main@index': {
                        templateUrl: './views/homepage/index.html',
                        controller: 'homepageCtrl'
                    }
                }
            })
            .state('base', {
                url: '/base',
                views: {
                    'layout': {
                        templateUrl: PATH_LAYOUT
                    },
                    'side@base': {
                        templateUrl: PATH_MENU
                    },
                    'main@base': {
                        templateUrl: './html/Base/center all.html'
                    }
                }
            })
            .state('base.center_all', { url: '/center_all', views: { 'main@base': { templateUrl: './html/Base/center all.html' } } })
            .state('base.horizontally', { url: '/horizontally', views: { 'main@base': { templateUrl: './html/Base/center horizontally.html' } } })
            .state('base.vetically', { url: '/vetically', views: { 'main@base': { templateUrl: './html/Base/center vetically.html' } } })
            .state('base.segment-1', { url: '/segment-1', views: { 'main@base': { templateUrl: './html/Base/code segment-1.html' } } })
            .state('base.segment-2', { url: '/segment-2', views: { 'main@base': { templateUrl: './html/Base/code segment-2.html' } } })

            .state('base.remind-1', { url: '/remind-1', views: { 'main@base': { templateUrl: './html/Base/compatibility remind-1.html' } } })
            .state('base.remind-2', { url: '/remind-2', views: { 'main@base': { templateUrl: './html/Base/compatibility remind-2.html' } } })
            .state('base.remind-3', { url: '/remind-3', views: { 'main@base': { templateUrl: './html/Base/compatibility remind-3.html' } } })

            .state('base.standard', { url: '/standard', views: { 'main@base': { templateUrl: './html/Base/css standard.html' } } })
            .state('base.h5Css', { url: '/h5Css', views: { 'main@base': { templateUrl: './html/Base/h5 css.html' } } })

            .state('promote', {
                url: '/promote',
                views: {
                    'layout': {
                        templateUrl: PATH_LAYOUT
                    },
                    'side@promote': {
                        templateUrl: PATH_MENU
                    },
                    'main@promote': {
                        templateUrl: './html/Promote/clearfix.html'
                    }
                }
            })

            .state('promote.clearfix', { url: '/clearfix', views: { 'main@promote': { templateUrl: './html/Promote/clearfix.html' } } })
            .state('promote.flex', { url: '/flex', views: { 'main@promote': { templateUrl: './html/Promote/flex.html' } } })
    })
})