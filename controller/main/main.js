define([
    '../module',
], function(ng) {

    'use strict';

    console.log(ng);

    ng.factory('mainService', ['$http', function($http) {
        console.log($http);
    }])

    ng.controller('mainCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        function($scope, $rootScope, $location) {
            console.log(1);
        }
    ])
});