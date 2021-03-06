/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

requirejs.config({
    paths: {
        // Libs
        'jquery': 'client/lib/jquery/dist/jquery.min',
        'underscore': 'client/lib/underscore/underscore',
        'highlight': 'client/highlight/highlight.pack',
        'angular': 'client/lib/angular/angular.min',
        'angular-animate': 'client/lib/angular-animate/angular-animate.min',
        'angular-ui-router': 'client/lib/angular-ui-router/release/angular-ui-router.min',
        'angular-sanitize': 'client/lib/angular-sanitize/angular-sanitize.min',
        // Apps
        'app': 'client/app/app',
        'algorithms': 'client/app/algorithms',
        'routes': 'client/app/routes',
        'directives': 'client/app/directives',
        'constants': 'client/app/constants',
        'services': 'client/app/services'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        angular: {
            deps: ['jquery']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        }
    }
});