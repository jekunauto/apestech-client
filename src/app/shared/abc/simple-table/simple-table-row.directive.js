"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleTableRowDirective = /** @class */ (function () {
    function SimpleTableRowDirective(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    SimpleTableRowDirective.prototype.ngOnInit = function () {
        this.table.addRow(this);
    };
    __decorate([
        core_1.Input('st-row')
    ], SimpleTableRowDirective.prototype, "id", void 0);
    SimpleTableRowDirective = __decorate([
        core_1.Directive({
            selector: '[st-row]'
        })
    ], SimpleTableRowDirective);
    return SimpleTableRowDirective;
}());
exports.SimpleTableRowDirective = SimpleTableRowDirective;
