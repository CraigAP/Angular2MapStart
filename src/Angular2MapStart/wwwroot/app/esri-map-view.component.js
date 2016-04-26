"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var map_service_1 = require('./map.service');
var esri_mods_1 = require('esri-mods');
var EsriMapViewComponent = (function () {
    function EsriMapViewComponent(_mapService, elRef) {
        this._mapService = _mapService;
        this.elRef = elRef;
        this.viewCreated = new core_1.EventEmitter();
        this.view = null;
    }
    EsriMapViewComponent.prototype.ngOnInit = function () {
        this.view = new esri_mods_1.MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this.zoom,
            center: [this.centerLng, this.centerLat],
            rotation: this.rotation
        });
        this.view.then(function (view) {
            this.viewCreated.next(view);
        }.bind(this));
    };
    __decorate([
        core_1.Input()
    ], EsriMapViewComponent.prototype, "zoom", void 0);
    __decorate([
        core_1.Input()
    ], EsriMapViewComponent.prototype, "centerLng", void 0);
    __decorate([
        core_1.Input()
    ], EsriMapViewComponent.prototype, "centerLat", void 0);
    __decorate([
        core_1.Input()
    ], EsriMapViewComponent.prototype, "rotation", void 0);
    __decorate([
        core_1.Output()
    ], EsriMapViewComponent.prototype, "viewCreated", void 0);
    EsriMapViewComponent = __decorate([
        core_1.Component({
            selector: 'esri-map-view',
            template: '<div></div>',
            providers: [map_service_1.AnalysisMapService]
        })
    ], EsriMapViewComponent);
    return EsriMapViewComponent;
}());
exports.EsriMapViewComponent = EsriMapViewComponent;
