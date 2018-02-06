"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var XlsxDirective = /** @class */ (function () {
    function XlsxDirective(srv) {
        this.srv = srv;
    }
    XlsxDirective.prototype.ngOnInit = function () {
    };
    XlsxDirective.prototype._click = function () {
        if (!this.data)
            throw new Error("muse be specified options");
        this.srv.export(this.data);
    };
    __decorate([
        core_1.Input('xlsx')
    ], XlsxDirective.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('click')
    ], XlsxDirective.prototype, "_click", null);
    XlsxDirective = __decorate([
        core_1.Directive({ selector: 'xlsx' })
    ], XlsxDirective);
    return XlsxDirective;
}());
exports.XlsxDirective = XlsxDirective;
