"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var avatar_list_item_component_1 = require("./avatar-list-item.component");
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent() {
        this._size = '';
        this._avatarSize = '';
    }
    Object.defineProperty(AvatarListComponent.prototype, "size", {
        set: function (value) {
            this._size = value === 'default' ? '' : value;
            switch (value) {
                case 'large':
                case 'small':
                case 'default':
                    this._avatarSize = value;
                    break;
                default:
                    this._avatarSize = 'small';
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], AvatarListComponent.prototype, "size", null);
    __decorate([
        core_1.ContentChildren(avatar_list_item_component_1.AvatarListItemComponent)
    ], AvatarListComponent.prototype, "_items", void 0);
    AvatarListComponent = __decorate([
        core_1.Component({
            selector: 'avatar-list',
            template: "\n    <ul>\n        <li *ngFor=\"let i of _items\" class=\"item\" [ngClass]=\"_size\">\n            <nz-tooltip *ngIf=\"i.tips\" [nzTitle]=\"i.tips\">\n                <nz-avatar nz-tooltip [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n            </nz-tooltip>\n            <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n        </li>\n    </ul>\n    ",
            styleUrls: ['./avatar-list.less']
        })
    ], AvatarListComponent);
    return AvatarListComponent;
}());
exports.AvatarListComponent = AvatarListComponent;
