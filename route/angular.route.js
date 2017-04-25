define(['../app'], function(app) {
    console.log(app);

    app.config(function(
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $httpProvider) {
        console.log($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider);

    })
})