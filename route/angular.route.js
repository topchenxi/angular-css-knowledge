define(['../app'], function(app) {
    // console.log(app);

    app.config(function(
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $httpProvider) {
        // console.log($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider);

        $urlRouterProvider.otherwise("/index");


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
        }).state('main', {
            // A
            url: '/main',
            views: {
                'layout': {
                    templateUrl: PATH_LAYOUT
                },
                'side@main': {
                    templateUrl: PATH_MENU
                },
                'main@index': {
                    templateUrl: './views/homepage/index.html'
                }
            }
        })




    })
})
