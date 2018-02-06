"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var SHOWCLS = 'nav-floating-show';
var FLOATINGCLS = 'nav-floating';
var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(menuSrv, settings, router, el, render, cd, doc) {
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.router = router;
        this.render = render;
        this.cd = cd;
        this.doc = doc;
        this.list = [];
        this.autoCloseUnderPad = true;
        this.rootEl = el.nativeElement;
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyEl = this.doc.querySelector('body');
        this.menuSrv.openedByUrl(this.router.url);
        this.genFloatingContainer();
        this.change$ = this.menuSrv.change.subscribe(function (res) {
            _this.list = res;
            _this.cd.detectChanges();
        });
        this.installUnderPad();
    };
    SidebarNavComponent.prototype.floatingAreaClickHandle = function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.settings.layout.collapsed !== true) {
            return;
        }
        var linkNode = e.target;
        if (linkNode.nodeName !== 'A') {
            return;
        }
        var url = linkNode.getAttribute('href');
        if (url) {
            if (url.startsWith('#'))
                url = url.slice(1);
            this.router.navigateByUrl(url);
        }
        this.hideAll();
        return false;
    };
    SidebarNavComponent.prototype.genFloatingContainer = function () {
        if (this.floatingEl) {
            this.floatingEl.remove();
            this.floatingEl.removeEventListener('click', this.floatingAreaClickHandle.bind(this));
        }
        this.floatingEl = this.render.createElement('div');
        this.floatingEl.classList.add(FLOATINGCLS + '-container');
        this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
        this.bodyEl.appendChild(this.floatingEl);
    };
    SidebarNavComponent.prototype.genSubNode = function (linkNode, item) {
        var id = "_sidebar-nav-" + item.__id;
        var node = this.floatingEl.querySelector('#' + id);
        if (node) {
            return node;
        }
        node = linkNode.nextElementSibling.cloneNode(true);
        node.id = id;
        node.classList.add(FLOATINGCLS);
        node.addEventListener('mouseleave', function () {
            node.classList.remove(SHOWCLS);
        }, false);
        this.floatingEl.appendChild(node);
        return node;
    };
    SidebarNavComponent.prototype.hideAll = function () {
        var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
        for (var i = 0; i < allNode.length; i++) {
            allNode[i].classList.remove(SHOWCLS);
        }
    };
    // calculate the node position values.
    SidebarNavComponent.prototype.calPos = function (linkNode, node) {
        var rect = linkNode.getBoundingClientRect();
        // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
        var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
        var top = rect.top + scrollTop, left = rect.right + 5;
        node.style.top = top + "px";
        node.style.left = left + "px";
    };
    SidebarNavComponent.prototype.showSubMenu = function (e, item) {
        if (this.settings.layout.collapsed !== true) {
            return;
        }
        e.preventDefault();
        var linkNode = e.target;
        if (linkNode.nodeName !== 'A') {
            return;
        }
        this.genFloatingContainer();
        var subNode = this.genSubNode(linkNode, item);
        this.hideAll();
        subNode.classList.add(SHOWCLS);
        this.calPos(linkNode, subNode);
    };
    SidebarNavComponent.prototype.toggleOpen = function (item) {
        this.menuSrv.visit(function (i, p) {
            if (i !== item)
                i._open = false;
        });
        var pItem = item.__parent;
        while (pItem) {
            pItem._open = true;
            pItem = pItem.__parent;
        }
        item._open = !item._open;
        this.cd.markForCheck();
    };
    SidebarNavComponent.prototype.onClick = function () {
        this.hideAll();
    };
    SidebarNavComponent.prototype.ngOnDestroy = function () {
        if (this.change$)
            this.change$.unsubscribe();
        if (this.route$)
            this.route$.unsubscribe();
    };
    SidebarNavComponent.prototype.installUnderPad = function () {
        var _this = this;
        if (!this.autoCloseUnderPad)
            return;
        this.route$ = this.router.events.subscribe(function (s) {
            if (s instanceof router_1.NavigationEnd)
                _this.underPad();
        });
        this.underPad();
    };
    SidebarNavComponent.prototype.underPad = function () {
        if (!this.autoCloseUnderPad)
            return;
        if (window.innerWidth < 992 && !this.settings.layout.collapsed) {
            this.settings.setLayout('collapsed', true);
        }
    };
    __decorate([
        core_1.Input()
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event.target'])
    ], SidebarNavComponent.prototype, "onClick", null);
    SidebarNavComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-nav',
            templateUrl: './sidebar-nav.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
        }),
        __param(6, core_1.Inject(common_1.DOCUMENT))
    ], SidebarNavComponent);
    return SidebarNavComponent;
}());
exports.SidebarNavComponent = SidebarNavComponent;
