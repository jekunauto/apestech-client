"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        // region: fields
        this._type = '';
        this._icon = '';
        this._title = '';
        this._description = '';
        this._extra = '';
        // endregion
    }
    Object.defineProperty(ResultComponent.prototype, "type", {
        set: function (value) {
            this._type = value;
            switch (value) {
                case 'success':
                    this._icon = 'check-circle';
                    break;
                case 'error':
                    this._icon = 'close-circle';
                    break;
                default:
                    this._icon = value;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "description", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._descriptionTpl = value;
            else
                this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "extra", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._extraTpl = value;
            else
                this._extra = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], ResultComponent.prototype, "type", null);
    __decorate([
        core_1.Input()
    ], ResultComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], ResultComponent.prototype, "description", null);
    __decorate([
        core_1.Input()
    ], ResultComponent.prototype, "extra", null);
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'result',
            template: "\n    <div class=\"icon\"><i class=\"anticon anticon-{{_icon}} {{_type}}\"></i></div>\n    <div class=\"title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n    <div *ngIf=\"_description || _descriptionTpl\" class=\"description\"><ng-container *ngIf=\"_description; else _descriptionTpl\">{{_description}}</ng-container></div>\n    <div *ngIf=\"_extra || _extraTpl\" class=\"extra\">\n        <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n    </div>\n    <div class=\"actions\"><ng-content></ng-content></div>\n    ",
            styleUrls: ['./result.less']
        })
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
