"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NoticeListComponent = /** @class */ (function () {
    function NoticeListComponent() {
        this.select = new core_1.EventEmitter();
        this.clear = new core_1.EventEmitter();
    }
    NoticeListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            title: this.data.title,
            item: item
        });
    };
    NoticeListComponent.prototype.onClear = function () {
        this.clear.emit(this.data.title);
    };
    __decorate([
        core_1.Input()
    ], NoticeListComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output()
    ], NoticeListComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output()
    ], NoticeListComponent.prototype, "clear", void 0);
    NoticeListComponent = __decorate([
        core_1.Component({
            selector: 'notice-list',
            template: "\n    <div *ngIf=\"data.list?.length === 0; else listTpl\" class=\"not-found\">\n        <img *ngIf=\"data.emptyImage\" src=\"{{data.emptyImage}}\" alt=\"not found\" />\n        <p>{{data.emptyText}}</p>\n    </div>\n    <ng-template #listTpl>\n        <nz-list [nzDataSource]=\"data.list\">\n            <ng-template #item let-item>\n                <nz-list-item (click)=\"onSelect(item)\">\n                    <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"nzDescription\" [nzAvatar]=\"item.avatar\">\n                        <ng-template #nzTitle>\n                            {{item.title}}\n                            <div class=\"extra\" *ngIf=\"item.extra\"><nz-tag [nzColor]=\"item.color\">{{item.extra}}</nz-tag></div>\n                        </ng-template>\n                        <ng-template #nzDescription>\n                            <div *ngIf=\"item.description\" class=\"description\">{{item.description}}</div>\n                            <div *ngIf=\"item.datetime\" class=\"datetime\">{{item.datetime}}</div>\n                        </ng-template>\n                    </nz-list-item-meta>\n                </nz-list-item>\n            </ng-template>\n        </nz-list>\n        <div class=\"clear\" (click)=\"onClear()\">\u6E05\u7A7A{{data.title}}</div>\n    </ng-template>\n    "
        })
    ], NoticeListComponent);
    return NoticeListComponent;
}());
exports.NoticeListComponent = NoticeListComponent;
