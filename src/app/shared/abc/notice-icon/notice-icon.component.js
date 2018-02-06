"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var coercion_1 = require("@angular/cdk/coercion");
var NoticeIconComponent = /** @class */ (function () {
    function NoticeIconComponent() {
        this.data = [];
        this._dot = false;
        this._loading = false;
        this.select = new core_1.EventEmitter();
        this.clear = new core_1.EventEmitter();
        this._popoverVisible = false;
        this.popupVisibleChange = new core_1.EventEmitter();
    }
    Object.defineProperty(NoticeIconComponent.prototype, "count", {
        /** 图标上的消息总数 */
        get: function () { return this._count; },
        set: function (value) {
            this._count = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeIconComponent.prototype, "dot", {
        /** 图标不展示数字，只有一个小红点 */
        get: function () { return this._dot; },
        set: function (value) {
            this._dot = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeIconComponent.prototype, "loading", {
        /** 弹出卡片加载状态 */
        get: function () { return this._loading; },
        set: function (value) {
            this._loading = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeIconComponent.prototype, "popoverVisible", {
        /** 手动控制Popover显示 */
        get: function () { return this._popoverVisible; },
        set: function (value) {
            this._popoverVisible = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NoticeIconComponent.prototype.onVisibleChange = function (result) {
        this.popupVisibleChange.emit(result);
    };
    NoticeIconComponent.prototype.onSelect = function (i) {
        this.select.emit(i);
    };
    NoticeIconComponent.prototype.onClear = function (title) {
        this.clear.emit(title);
    };
    __decorate([
        core_1.Input()
    ], NoticeIconComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], NoticeIconComponent.prototype, "count", null);
    __decorate([
        core_1.Input()
    ], NoticeIconComponent.prototype, "dot", null);
    __decorate([
        core_1.Input()
    ], NoticeIconComponent.prototype, "loading", null);
    __decorate([
        core_1.Output()
    ], NoticeIconComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output()
    ], NoticeIconComponent.prototype, "clear", void 0);
    __decorate([
        core_1.Input()
    ], NoticeIconComponent.prototype, "popoverVisible", null);
    __decorate([
        core_1.Output()
    ], NoticeIconComponent.prototype, "popupVisibleChange", void 0);
    NoticeIconComponent = __decorate([
        core_1.Component({
            selector: 'notice-icon',
            template: "\n    <nz-badge *ngIf=\"data?.length <= 0\" [nzCount]=\"count\" [nzDot]=\"dot\">\n        <ng-template #content>\n            <i class=\"anticon anticon-bell\"></i>\n        </ng-template>\n    </nz-badge>\n    <nz-popover *ngIf=\"data?.length > 0\" [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\" nzPlacement=\"bottomRight\" nzOverlayClassName=\"notice-icon-popover\">\n        <div nz-popover class=\"item\">\n            <nz-badge [nzCount]=\"count\" [nzDot]=\"dot\">\n                <ng-template #content>\n                    <i class=\"anticon anticon-bell\"></i>\n                </ng-template>\n            </nz-badge>\n        </div>\n        <ng-template #nzTemplate>\n            <nz-spin [nzSpinning]=\"loading\">\n                <nz-tabset>\n                    <nz-tab *ngFor=\"let i of data\">\n                        <ng-template #nzTabHeading>{{i.title}}</ng-template>\n                        <notice-list [data]=\"i\"\n                                     (select)=\"onSelect($event)\"\n                                     (clear)=\"onClear($event)\"></notice-list>\n                    </nz-tab>\n                </nz-tabset>\n            </nz-spin>\n        </ng-template>\n    </nz-popover>\n    ",
            styleUrls: ['./notice-icon.less']
        })
    ], NoticeIconComponent);
    return NoticeIconComponent;
}());
exports.NoticeIconComponent = NoticeIconComponent;
