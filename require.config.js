'use strict';

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


require([
    'angular',
    'app',
    'route',
    'ui-route'
], function() {
    angular.bootstrap(document, ['webapp']);
})