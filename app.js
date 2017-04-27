define(['angular'], function(angular) {

    var app = angular.module('webapp', [
        'ui.router',
        'webapp.Ctrl',
    ]);
    return app;
});