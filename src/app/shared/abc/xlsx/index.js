"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx_service_1 = require("./xlsx.service");
exports.XlsxService = xlsx_service_1.XlsxService;
var xlsx_directive_1 = require("./xlsx.directive");
exports.XlsxDirective = xlsx_directive_1.XlsxDirective;
var xlsx_module_1 = require("./xlsx.module");
exports.AdXlsxModule = xlsx_module_1.AdXlsxModule;
__export(require("./interface"));
