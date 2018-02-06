"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.begin = new core_1.EventEmitter();
        this.notify = new core_1.EventEmitter();
        this.end = new core_1.EventEmitter();
    }
    Object.defineProperty(CountDownComponent.prototype, "target", {
        /**
         * 目标时间
         */
        set: function (value) {
            this.config = {
                template: "$!h!:$!m!:$!s!",
                stopTime: typeof value === 'number' ? moment().add(value, 's').valueOf() : moment(value).valueOf()
            };
        },
        enumerable: true,
        configurable: true
    });
    CountDownComponent.prototype._start = function () {
        this.begin.emit();
    };
    CountDownComponent.prototype._notify = function (time) {
        this.notify.emit(time);
    };
    CountDownComponent.prototype._finished = function () {
        this.end.emit();
    };
    __decorate([
        core_1.Input()
    ], CountDownComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input()
    ], CountDownComponent.prototype, "target", null);
    __decorate([
        core_1.Output()
    ], CountDownComponent.prototype, "begin", void 0);
    __decorate([
        core_1.Output()
    ], CountDownComponent.prototype, "notify", void 0);
    __decorate([
        core_1.Output()
    ], CountDownComponent.prototype, "end", void 0);
    CountDownComponent = __decorate([
        core_1.Component({
            selector: 'count-down',
            template: "\n    <countdown *ngIf=\"config\" [config]=\"config\"\n        (start)=\"_start()\"\n        (finished)=\"_finished()\"\n        (notify)=\"_notify($event)\"></countdown>\n    ",
            styleUrls: ['./count-down.less']
        })
    ], CountDownComponent);
    return CountDownComponent;
}());
exports.CountDownComponent = CountDownComponent;
