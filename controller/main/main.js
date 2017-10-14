define([
    '../module',
], function(ng) {

    ng.factory('mainService', ['$http', function($http) {
        console.log($http);
    }])

    ng.controller('mainCtrl', [
        '$scope',
        '$rootScope',
        '$location',
        'menu',
        function($scope, $rootScope, $location, menu) {
            function setDefaultHeight() {
                let height = window.innerHeight - 50 - 37-40;
                let element = document.querySelector('.page-content');
                if (element) {
                    element.style.height = height + 'px';
                }
            }
            let timer;
            timer = setTimeout(setDefaultHeight, 333);
            window.addEventListener('resize', function() {
                clearTimeout(timer);
                timer = setTimeout(setDefaultHeight, 33);
            }, false);

            let vm = $scope.vm = {};
            vm.show = function() {
                console.log(1)
            }

            console.table(menu.list);

            let menuList = $rootScope.menuList = menu.list;
        }
    ])
});