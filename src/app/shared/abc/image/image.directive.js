"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils/utils");
/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
var ImageDirective = /** @class */ (function () {
    function ImageDirective(el, render, DEF) {
        this.el = el;
        this.render = render;
        this.size = 64;
        this.error = './assets/img/logo.svg';
        this.inited = false;
        Object.assign(this, utils_1.deepCopy(DEF));
    }
    ImageDirective.prototype.ngOnInit = function () {
        this.update();
        this.updateError();
        this.inited = true;
    };
    ImageDirective.prototype.ngOnChanges = function (changes) {
        if (this.inited) {
            if (changes.error)
                this.updateError();
            else
                this.update();
        }
    };
    ImageDirective.prototype.update = function () {
        var newSrc = this.src;
        // region: fix weixin & qq avatar size
        if (newSrc.includes('qlogo.cn')) {
            var arr = newSrc.split('/'), size = arr[arr.length - 1];
            arr[arr.length - 1] = (size === '0' || +size !== this.size) ? this.size.toString() : size;
            newSrc = arr.join('/');
        }
        // endregion
        // region: remove https & http
        var isHttp = newSrc.startsWith('http:'), isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps)
            newSrc = newSrc.substr(isHttp ? 5 : 6);
        // endregion
        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    };
    ImageDirective.prototype.updateError = function () {
        this.render.setAttribute(this.el.nativeElement, 'onerror', "this.src='" + this.error + "';");
    };
    __decorate([
        core_1.Input('_src')
    ], ImageDirective.prototype, "src", void 0);
    __decorate([
        core_1.Input()
    ], ImageDirective.prototype, "size", void 0);
    __decorate([
        core_1.Input()
    ], ImageDirective.prototype, "error", void 0);
    ImageDirective = __decorate([
        core_1.Directive({ selector: '[_src]' })
    ], ImageDirective);
    return ImageDirective;
}());
exports.ImageDirective = ImageDirective;
