"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
// use the hash url location strategy, see:
//  - https://angular.io/docs/ts/latest/guide/router.html#!#-hashlocationstrategy-
//  - http://julienrenaux.fr/2015/12/25/angular2-series-routing/#HashLocationStrategy
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, {
        useClass: router_1.HashLocationStrategy
    })
]);
