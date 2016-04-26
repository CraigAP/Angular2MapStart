"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent = __decorate([
        core_1.Component({
            selector: 'intro',
            template: "\n        <div>\n            Features\n            <ul>\n                <li><a href=\"https://developers.arcgis.com/javascript/beta/\">Esri 4.x JSAPI</a> for 2D and 3D mapping</li>\n                <li><a href=\"https://github.com/Esri/esri-system-js\">esri-system-js</a> for loading Esri modules in SystemJS</li>\n                <li>Angular 2 app with routing\n                    <ul>\n                        <li>MapView and SceneView components</li>\n                        <li>Custom view coordination service to keep SceneView components in sync</li>\n                        <li>Vector GIS analysis in the browser</li>\n                    </ul>\n                </li>\n                <li>and <a href=\"http://picnicss.com/\">Picnic CSS</a> for the good looks</li>\n            </ul>\n        </div>\n        ",
        })
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
