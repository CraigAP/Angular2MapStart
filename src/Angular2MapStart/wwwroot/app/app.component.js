"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var intro_component_1 = require('./intro.component');
var synced_views_component_1 = require('./synced-views.component');
var geometry_engine_showcase_component_1 = require('./geometry-engine-showcase.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.RouteConfig([
            {
                path: '/intro',
                name: 'Intro',
                component: intro_component_1.IntroComponent,
                useAsDefault: true
            },
            {
                path: '/synced-views',
                name: 'SyncedViews',
                component: synced_views_component_1.SyncedViewsComponent
            },
            {
                path: '/geom-engine-showcase',
                name: 'GeometryEngineShowcase',
                component: geometry_engine_showcase_component_1.GeometryEngineShowcaseComponent
            }
        ]),
        core_1.Component({
            selector: 'playground-app',
            styles: ["\n        section {\n            width: 90%;\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 4em 0 0 0;\n        }\n        "],
            template: "\n        <nav>\n            <a href=\"#\" class=\"brand\">\n                <span>Angular 2 + Esri 4</span>\n            </a>\n\n            <!-- responsive-->\n            <input id=\"bmenub\" type=\"checkbox\" class=\"show\">\n            <label for=\"bmenub\" class=\"burger pseudo button\">\u2261</label>\n\n            <div class=\"menu\">\n                <a class=\"pseudo button\" [routerLink]=\"['Intro']\">Intro</a>\n                <a class=\"button\" [routerLink]=\"['SyncedViews']\">Synced 3D Views</a>\n                <a class=\"button\" [routerLink]=\"['GeometryEngineShowcase']\">Geometry Engine</a>\n\n                <a class=\"pseudo button\" href=\"https://github.com/jwasilgeo/angular2-esri-playground\">Github</a>\n                <a class=\"pseudo button\" href=\"https://twitter.com/JWasilGeo\">@JWasilGeo</a>\n            </div>\n        </nav>\n        <main>\n            <section>\n                <router-outlet></router-outlet>\n            </section>\n        </main>\n        ",
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
