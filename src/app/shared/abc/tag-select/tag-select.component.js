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
var TagSelectComponent = /** @class */ (function () {
    function TagSelectComponent() {
        this._cls = true;
        this._expandable = true;
        this.expand = false;
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(TagSelectComponent.prototype, "expandable", {
        /** 是否启用 `展开与收进` */
        get: function () { return this._expandable; },
        set: function (value) {
            this._expandable = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    TagSelectComponent.prototype.trigger = function () {
        this.expand = !this.expand;
        this.change.emit(this.expand);
    };
    __decorate([
        core_1.HostBinding('class.tag-select')
    ], TagSelectComponent.prototype, "_cls", void 0);
    __decorate([
        core_1.HostBinding('class.has-expand'),
        core_1.Input()
    ], TagSelectComponent.prototype, "expandable", null);
    __decorate([
        core_1.HostBinding('class.expanded')
    ], TagSelectComponent.prototype, "expand", void 0);
    __decorate([
        core_1.Output()
    ], TagSelectComponent.prototype, "change", void 0);
    TagSelectComponent = __decorate([
        core_1.Component({
            selector: 'tag-select',
            template: "\n    <ng-content></ng-content>\n    <a *ngIf=\"expandable\" class=\"trigger\" (click)=\"trigger()\">{{expand ? '\u6536\u8D77' : '\u5C55\u5F00'}}<i class=\"anticon anticon-{{expand ? 'up' : 'down'}} ml-sm\"></i></a>",
            styleUrls: ['./tag-select.less']
        })
    ], TagSelectComponent);
    return TagSelectComponent;
}());
exports.TagSelectComponent = TagSelectComponent;
