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
var EsriSceneViewComponent = (function () {
    function EsriSceneViewComponent(_mapService, _viewCoordinationService, elRef) {
        this._mapService = _mapService;
        this._viewCoordinationService = _viewCoordinationService;
        this.elRef = elRef;
        this.viewCreated = new core_1.EventEmitter();
        this.view = null;
    }
    EsriSceneViewComponent.prototype.ngOnInit = function () {
        this.view = new esri_mods_1.SceneView({
            container: this.elRef.nativeElement.firstChild,
            map: this._mapService.map,
            zoom: this._viewCoordinationService.zoom,
            center: this._viewCoordinationService.center,
            rotation: this._viewCoordinationService.rotation
        });
        this.view.then(function (view) {
            this.viewCreated.next(view);
        }.bind(this));
        this.view.watch('camera', function (newVal, oldVal, propertyName) {
            this._viewCoordinationService.setValue(newVal, propertyName);
        }.bind(this));
    };
    EsriSceneViewComponent.prototype.syncCamera = function (delaySync) {
        if (delaySync) {
            this.view.animateTo(this._viewCoordinationService.camera, {
                delay: 700
            });
        }
        else {
            this.view.camera = this._viewCoordinationService.camera;
        }
    };
    __decorate([
        core_1.Output()
    ], EsriSceneViewComponent.prototype, "viewCreated", void 0);
    EsriSceneViewComponent = __decorate([
        core_1.Component({
            selector: 'esri-scene-view',
            template: '<div></div>',
            providers: [map_service_1.SimpleMapService]
        })
    ], EsriSceneViewComponent);
    return EsriSceneViewComponent;
}());
exports.EsriSceneViewComponent = EsriSceneViewComponent;
