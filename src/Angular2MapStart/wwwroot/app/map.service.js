"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var esri_mods_1 = require('esri-mods');
var SimpleMapService = (function () {
    function SimpleMapService() {
        this.map = null;
        this.map = new esri_mods_1.Map({
            basemap: 'satellite'
        });
    }
    SimpleMapService = __decorate([
        core_1.Injectable()
    ], SimpleMapService);
    return SimpleMapService;
}());
exports.SimpleMapService = SimpleMapService;
var AnalysisMapService = (function () {
    function AnalysisMapService() {
        this.map = null;
        this.map = new esri_mods_1.Map({
            basemap: 'satellite',
            layers: [
                new esri_mods_1.GraphicsLayer({
                    id: 'analysisLayer'
                }),
                new esri_mods_1.FeatureLayer({
                    url: '//services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/World_Volcanoes/FeatureServer/0',
                    id: 'volcanoesLayer'
                })]
        });
    }
    AnalysisMapService = __decorate([
        core_1.Injectable()
    ], AnalysisMapService);
    return AnalysisMapService;
}());
exports.AnalysisMapService = AnalysisMapService;
