"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExceptionComponent = /** @class */ (function () {
    function ExceptionComponent() {
        this._img = '';
        this._title = '';
        this._desc = '';
    }
    Object.defineProperty(ExceptionComponent.prototype, "type", {
        set: function (value) {
            var item = ({
                403: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                    title: '403',
                    desc: '抱歉，你无权访问该页面',
                },
                404: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                    title: '404',
                    desc: '抱歉，你访问的页面不存在',
                },
                500: {
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                    title: '500',
                    desc: '抱歉，服务器出错了',
                },
            })[value];
            if (!item)
                return;
            this._img = item.img;
            this._title = item.title;
            this._desc = item.desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "img", {
        set: function (value) { this._img = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "title", {
        set: function (value) { this._title = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionComponent.prototype, "desc", {
        set: function (value) { this._desc = value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], ExceptionComponent.prototype, "type", null);
    __decorate([
        core_1.Input()
    ], ExceptionComponent.prototype, "img", null);
    __decorate([
        core_1.Input()
    ], ExceptionComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], ExceptionComponent.prototype, "desc", null);
    __decorate([
        core_1.ContentChild('actions')
    ], ExceptionComponent.prototype, "actions", void 0);
    ExceptionComponent = __decorate([
        core_1.Component({
            selector: 'exception',
            template: "\n    <div class=\"img-block\">\n        <div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + _img + ')'}\"></div>\n    </div>\n    <div class=\"cont\">\n        <h1 [innerHTML]=\"_title\"></h1>\n        <div class=\"desc\" [innerHTML]=\"_desc\"></div>\n        <ng-template #defaultActions>\n            <button nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\u8FD4\u56DE\u9996\u9875</button>\n            <ng-content></ng-content>\n        </ng-template>\n        <div class=\"actions\" *ngIf=\"actions; else defaultActions\">\n            <ng-template [ngTemplateOutlet]=\"actions\"></ng-template>\n            <ng-content></ng-content>\n        </div>\n    </div>\n    ",
            styleUrls: ['./exception.less']
        })
    ], ExceptionComponent);
    return ExceptionComponent;
}());
exports.ExceptionComponent = ExceptionComponent;
