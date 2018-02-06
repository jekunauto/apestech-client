"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var common_1 = require("@angular/common");
var _core_1 = require("@core");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var coercion_1 = require("@angular/cdk/coercion");
var utils_1 = require("../utils/utils");
var simple_table_export_1 = require("./simple-table-export");
var SimpleTableComponent = /** @class */ (function () {
    // endregion
    function SimpleTableComponent(defConfig, _http, el, renderer, exportSrv, i18nSrv, modal, currenty, date, yn, number) {
        this.defConfig = defConfig;
        this._http = _http;
        this.el = el;
        this.renderer = renderer;
        this.exportSrv = exportSrv;
        this.i18nSrv = i18nSrv;
        this.modal = modal;
        this.currenty = currenty;
        this.date = date;
        this.yn = yn;
        this.number = number;
        this._data = [];
        this._isAjax = false;
        this._isPagination = true;
        this._classMap = [];
        this._allChecked = false;
        this._indeterminate = false;
        this._footer = false;
        this._columns = [];
        this._resRN = { total: ['total'], list: ['list'] };
        /** 请求方法 */
        this.reqMehtod = 'GET';
        /** 请求异常时回调 */
        this.reqError = new core_1.EventEmitter();
        /** 列描述  */
        this.columns = [];
        this._ps = 10;
        this._pi = 1;
        this._total = 0;
        this._loading = false;
        this._bordered = false;
        /** table大小 */
        this.size = 'default';
        this._showSizeChanger = false;
        /** pagination中每页显示条目数下拉框值 */
        this.pageSizeSelectorValues = [10, 20, 30, 40, 50];
        this._showQuickJumper = false;
        this._showTotal = false;
        this._isPageIndexReset = true;
        /** 分页方向 */
        this.pagePlacement = 'right';
        this._toTopInChange = true;
        this._toTopOffset = 0;
        this._multiSort = false;
        /** 页码、每页数量变化时回调 */
        this.change = new core_1.EventEmitter();
        /** checkbox变化时回调，参数为当前所选清单 */
        this.checkboxChange = new core_1.EventEmitter();
        /** radio变化时回调，参数为当前所选 */
        this.radioChange = new core_1.EventEmitter();
        /** 排序回调 */
        this.sortChange = new core_1.EventEmitter();
        /** Filter回调 */
        this.filterChange = new core_1.EventEmitter();
        // endregion
        // region: sort
        this._sortMap = {};
        this._sortColumn = null;
        Object.assign(this, utils_1.deepCopy(defConfig));
        this.updateResName();
    }
    Object.defineProperty(SimpleTableComponent.prototype, "ps", {
        /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
        get: function () { return this._ps; },
        set: function (value) {
            this._ps = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "pi", {
        /** 当前页码 */
        get: function () { return this._pi; },
        set: function (value) {
            this._pi = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "total", {
        /** 数据总量 */
        get: function () { return this._total; },
        set: function (value) {
            this._total = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "loading", {
        /** 是否显示Loading */
        get: function () { return this._loading; },
        set: function (value) {
            this._loading = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "bordered", {
        /** 是否显示边框 */
        get: function () { return this._bordered; },
        set: function (value) {
            this._bordered = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "showSizeChanger", {
        /** 是否显示pagination中改变页数 */
        get: function () { return this._showSizeChanger; },
        set: function (value) {
            this._showSizeChanger = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "showQuickJumper", {
        /** 是否显示pagination中快速跳转 */
        get: function () { return this._showQuickJumper; },
        set: function (value) {
            this._showQuickJumper = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "showTotal", {
        /** 是否显示总数据量 */
        get: function () { return this._showTotal; },
        set: function (value) {
            this._showTotal = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "isPageIndexReset", {
        /** 数据变更后是否保留在数据变更前的页码 */
        get: function () { return this._isPageIndexReset; },
        set: function (value) {
            this._isPageIndexReset = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "toTopInChange", {
        /** 切换分页时返回顶部 */
        get: function () { return this._toTopInChange; },
        set: function (value) {
            this._toTopInChange = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "toTopOffset", {
        /** 返回顶部偏移值 */
        get: function () { return this._toTopOffset; },
        set: function (value) {
            this._toTopOffset = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleTableComponent.prototype, "multiSort", {
        /** 是否多排序，建议后端支持时使用，默认：`false` */
        get: function () { return this._multiSort; },
        set: function (value) {
            this._multiSort = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    // region: data
    SimpleTableComponent.prototype.getAjaxData = function (url) {
        var _this = this;
        var params = {};
        params[this.reqReName && this.reqReName['pi'] || 'pi'] = this.pi;
        params[this.reqReName && this.reqReName['ps'] || 'ps'] = this.ps;
        return this._http.request(this.reqMehtod, url || this._url, {
            params: Object.assign(params, this.extraParams, this.getReqSortMap(), this.getReqFilterMap()),
            body: this.reqBody,
            headers: this.reqHeaders
        }).pipe(operators_1.map(function (res) {
            var ret = utils_1.deepGet(res, _this._resRN.list, null);
            if (typeof ret === 'undefined') {
                console.warn("results muse contain '" + _this._resRN.list.join('.') + "' attribute.");
                return;
            }
            if (!Array.isArray(ret)) {
                console.warn("'" + _this._resRN.list.join('.') + "' muse be array type.");
                return;
            }
            // total
            var retTotal = _this._resRN.total && utils_1.deepGet(res, _this._resRN.total, null);
            if (typeof retTotal === 'undefined') {
                if (_this._resRN.total)
                    console.warn("results muse contain '" + _this._resRN.total.join('.') + "' attribute.");
            }
            else {
                _this.total = +retTotal;
            }
            return ret;
        }));
    };
    SimpleTableComponent.prototype.load = function (pi) {
        if (pi === void 0) { pi = 1; }
        this.pi = pi;
        this._change('pi');
    };
    SimpleTableComponent.prototype.reset = function () {
        this.extraParams = null;
        this.load(1);
    };
    SimpleTableComponent.prototype._change = function (type) {
        this._genAjax();
        this._genData();
        this._toTop();
        this.change.emit({
            type: type,
            pi: this.pi,
            ps: this.ps,
            total: this.total
        });
    };
    SimpleTableComponent.prototype._genAjax = function (forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!this._isAjax)
            return;
        this.loading = true;
        if (forceRefresh === true)
            this.pi = 1;
        this.getAjaxData().subscribe(function (res) { return _this._subscribeData(res); }, function (err) {
            _this.loading = false;
            _this.reqError.emit(err);
        });
    };
    SimpleTableComponent.prototype._genData = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (this._isAjax)
            return;
        var data = this.data || [];
        // sort
        data = data.slice(0);
        var sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = this.recursiveSort(data, sorterFn);
        }
        // filter
        this._columns.filter(function (w) { return w.filters && w.filters.length; }).forEach(function (c) {
            var values = c.filters.filter(function (w) { return w.checked; });
            if (values.length === 0)
                return;
            var onFilter = c.filter;
            data = data.filter(function (record) {
                return values.some(function (v) { return onFilter(v, record); });
            });
        });
        if (forceRefresh) {
            if (this.isPageIndexReset) {
                this.pi = 1;
            }
            else {
                var maxPageIndex = Math.ceil(data.length / this.ps);
                this.pi = !this.pi ? 1 : (this.pi > maxPageIndex ? maxPageIndex : this.pi);
            }
        }
        this.total = this.total <= 0 ? data.length : this.total;
        this._isPagination = this.ps > 0 && this.total > this.ps;
        this._subscribeData(this._isPagination ? data.slice((this.pi - 1) * this.ps, this.pi * this.ps) : data);
    };
    SimpleTableComponent.prototype._toTop = function () {
        if (!this.toTopInChange)
            return;
        if (this.scroll) {
            this.el.nativeElement.querySelector('.ant-table-body').scrollTo(0, 0);
            return;
        }
        if (this.el.nativeElement.scrollIntoView)
            this.el.nativeElement.scrollIntoView();
        // todo: toTopOffset
    };
    SimpleTableComponent.prototype._get = function (item, col) {
        if (col.format)
            return col.format(item, col);
        var ret = utils_1.deepGet(item, col.index, '');
        if (typeof ret === 'undefined')
            return '';
        switch (col.type) {
            case 'img':
                return "<img src=\"" + ret + "\" class=\"img\">";
            case 'number':
                return this.number.transform(ret, col.numberDigits);
            case 'currency':
                return this.currenty.transform(ret);
            case 'date':
                return this.date.transform(ret, col.dateFormat);
            case 'yn':
                return this.yn.transform(ret === col.ynTruth, col.ynYes, col.ynNo);
        }
        return ret;
    };
    SimpleTableComponent.prototype.getDataObs = function (urlOrData) {
        return urlOrData || Array.isArray(this.data) ? of_1.of(urlOrData || this.data) : this.data;
    };
    SimpleTableComponent.prototype.processData = function () {
        var _this = this;
        if (!this.data && !this.url) {
            this._isAjax = false;
            this.data = [];
            return;
        }
        this._isAjax = false;
        if (typeof this.data === 'string' || this.url) {
            this._url = this.url || this.data;
            this._isAjax = true;
            this._genAjax(true);
        }
        else if (Array.isArray(this.data)) {
            this._genData(true);
        }
        else {
            if (!this.data$) {
                this.data$ = this.data.pipe(operators_1.tap(function () { return _this.loading = true; })).subscribe(function (res) {
                    _this.data = res;
                    _this._genData(true);
                });
            }
        }
    };
    SimpleTableComponent.prototype._subscribeData = function (res) {
        if (this.preDataChange)
            res = this.preDataChange(res);
        this.loading = false;
        this._data = res;
        this._refCheck();
    };
    SimpleTableComponent.prototype.getReqSortMap = function () {
        var _this = this;
        var ret = {};
        if (!this._sortOrder)
            return ret;
        if (this.multiSort) {
            Object.keys(this._sortMap).forEach(function (key) {
                var item = _this._sortMap[key];
                if (item.v) {
                    ret[item.key] = (item.column.sortReName || _this.sortReName || {})[item.v] || item.v;
                }
            });
        }
        else {
            var mapData = this._sortMap[this._sortIndex];
            ret[mapData.key] =
                (this._sortColumn.sortReName || this.sortReName || {})[mapData.v] || mapData.v;
        }
        console.log(ret);
        return ret;
    };
    SimpleTableComponent.prototype.recursiveSort = function (data, sorterFn) {
        var _this = this;
        var childrenColumnName = 'children';
        return data.sort(sorterFn).map(function (item) {
            return (item[childrenColumnName] ? __assign({}, item, (_a = {}, _a[childrenColumnName] = _this.recursiveSort(item[childrenColumnName], sorterFn), _a)) : item);
            var _a;
        });
    };
    SimpleTableComponent.prototype.getSorterFn = function () {
        var _this = this;
        // _sortMap
        if (!this._sortOrder || !this._sortColumn || typeof this._sortColumn.sorter !== 'function') {
            return;
        }
        return function (a, b) {
            var result = _this._sortColumn.sorter(a, b);
            if (result !== 0) {
                return (_this._sortOrder === 'descend') ? -result : result;
            }
            return 0;
        };
    };
    SimpleTableComponent.prototype.sort = function (index, value) {
        var _this = this;
        if (this._sortIndex === index && this._sortOrder === value)
            return;
        this._sortColumn = this._columns[index];
        this._sortOrder = value;
        this._sortIndex = index;
        if (this.multiSort) {
            this._sortMap[index].v = value;
        }
        else {
            Object.keys(this._sortMap).forEach(function (key) { return _this._sortMap[key].v = +key === index ? value : null; });
        }
        this._genAjax(true);
        this._genData(true);
        this.sortChange.emit({ value: value, map: this.getReqSortMap(), column: this._sortColumn });
    };
    // endregion
    // region: filter
    SimpleTableComponent.prototype.getReqFilterMap = function () {
        var ret = {};
        this._columns.filter(function (w) { return w.filtered === true; }).forEach(function (col) {
            var values = col.filters.filter(function (f) { return f.checked === true; });
            var obj = {};
            if (col.filterReName)
                obj = col.filterReName(col.filters, col);
            else
                obj[col.filterKey || col.indexKey] = values.map(function (i) { return i.value; }).join(',');
            ret = Object.assign(ret, obj);
        });
        return ret;
    };
    SimpleTableComponent.prototype.handleFilter = function (col) {
        col.filtered = col.filters.findIndex(function (w) { return w.checked; }) !== -1;
        this._genAjax(true);
        this._genData(true);
        this.filterChange.emit(col);
    };
    SimpleTableComponent.prototype.filterConfirm = function (col) {
        this.handleFilter(col);
    };
    SimpleTableComponent.prototype.filterClear = function (col) {
        col.filters.forEach(function (i) { return i.checked = false; });
        this.handleFilter(col);
    };
    SimpleTableComponent.prototype.filterRadio = function (col, item, checked) {
        col.filters.forEach(function (i) { return i.checked = false; });
        item.checked = checked;
    };
    // endregion
    // region: checkbox
    SimpleTableComponent.prototype._checkAll = function () {
        var _this = this;
        this._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return i.checked = _this._allChecked; });
        this._refCheck();
        this.checkboxChange.emit(this._data.filter(function (w) { return w.checked === true; }));
    };
    SimpleTableComponent.prototype._checkSelection = function (i) {
        this.checkboxChange.emit(this._data.filter(function (w) { return w.checked === true; }));
    };
    SimpleTableComponent.prototype._refCheck = function () {
        var validData = this._data.filter(function (w) { return !w.disabled; });
        var checkedList = validData.filter(function (w) { return w.checked === true; });
        this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
        var allUnChecked = validData.every(function (value) { return !value.checked; });
        this._indeterminate = (!this._allChecked) && (!allUnChecked);
    };
    SimpleTableComponent.prototype._rowSelection = function (row) {
        if (row.select)
            row.select(this._data);
        this._refCheck();
        this.checkboxChange.emit(this._data.filter(function (w) { return !w.disabled && w.checked === true; }));
    };
    // endregion
    // region: radio
    SimpleTableComponent.prototype._refRadio = function (idx, checked) {
        this._data.forEach(function (i) { return i.checked = false; });
        this._data[idx].checked = checked;
        this.radioChange.emit({ checked: checked, item: this._data[idx] });
    };
    // endregion
    // region: buttons
    SimpleTableComponent.prototype.btnClick = function (record, btn) {
        var _this = this;
        if (btn.type === 'modal' || btn.type === 'static') {
            var obj = {};
            obj[btn.paramName || this.defConfig.modalParamsName || 'record'] = record;
            this.modal[btn.type === 'modal' ? 'open' : 'static'](btn.component, Object.assign(obj, btn.params && btn.params(record)), btn.size, btn.modalOptions).subscribe(function (res) {
                if (btn.click)
                    _this.btnCallback(record, btn, res);
            });
            return;
        }
        this.btnCallback(record, btn);
    };
    SimpleTableComponent.prototype.btnCallback = function (record, btn, modal) {
        if (!btn.click)
            return;
        if (typeof btn.click === 'string') {
            switch (btn.click) {
                case 'reload':
                    this.load();
                    break;
            }
        }
        else {
            btn.click(record, modal, this);
        }
    };
    SimpleTableComponent.prototype.btnText = function (record, btn) {
        if (btn.format)
            return btn.format(record, btn);
        return btn.text;
    };
    // endregion
    // region: export
    /**
     * 导出Excel，确保已经注册 `AdXlsxModule`
     * @param urlOrData 重新指定数据，例如希望导出所有数据非常有用
     * @param opt 额外参数
     */
    SimpleTableComponent.prototype.export = function (urlOrData, opt) {
        var _this = this;
        ((!urlOrData && this._isAjax) || (urlOrData && typeof urlOrData === 'string') ?
            this.getAjaxData(urlOrData) :
            this.getDataObs(urlOrData))
            .subscribe(function (res) {
            return _this.exportSrv.export(Object.assign({}, opt, {
                _d: res,
                _c: _this._columns
            }));
        });
    };
    // endregion
    SimpleTableComponent.prototype.ngOnInit = function () {
    };
    SimpleTableComponent.prototype.ngAfterViewInit = function () {
        this._footer = !!this.footer;
    };
    SimpleTableComponent.prototype.addRow = function (row) {
        var col = this._columns.find(function (w) { return w.render === row.id; });
        if (col)
            col.__render = row.templateRef;
    };
    SimpleTableComponent.prototype.setClass = function () {
        var _this = this;
        this._classMap.forEach(function (cls) { return _this.renderer.removeClass(_this.el.nativeElement, cls); });
        this._classMap = [];
        if (this.pagePlacement)
            this._classMap.push('page-' + this.pagePlacement);
        this._classMap.forEach(function (cls) { return _this.renderer.addClass(_this.el.nativeElement, cls); });
    };
    SimpleTableComponent.prototype.updateColumns = function () {
        this._columns = [];
        if (!this.columns || this.columns.length === 0)
            throw new Error("the columns property muse be define!");
        if (this._columns.length === 0) {
            var checkboxCount = 0;
            var radioCount = 0;
            var sortMap = {};
            var idx = 0;
            var newColumns = [];
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.index) {
                    if (!Array.isArray(item.index))
                        item.index = item.index.split('.');
                    item.indexKey = item.index.join('.');
                }
                // rowSelection
                if (!item.selections)
                    item.selections = [];
                if (item.type === 'checkbox') {
                    ++checkboxCount;
                    if (!item.width)
                        item.width = (item.selections.length > 0 ? 60 : 50) + "px";
                }
                if (item.type === 'radio') {
                    ++radioCount;
                    item.selections = [];
                    if (!item.width)
                        item.width = '50px';
                }
                if (!item.className) {
                    item.className = {
                        // 'checkbox': 'text-center',
                        // 'radio': 'text-center',
                        'number': 'text-right',
                        'currency': 'text-right',
                        'date': 'text-center'
                    }[item.type];
                }
                if (item.type === 'yn' && typeof item.ynTruth === 'undefined')
                    item.ynTruth = true;
                // sorter
                if (item.sorter) {
                    sortMap[idx] = {
                        v: item.sort,
                        key: item.sortKey || item.indexKey,
                        column: item
                    };
                    if (item.sort && !this._sortColumn) {
                        this._sortColumn = item;
                        this._sortOrder = item.sort;
                        this._sortIndex = idx;
                    }
                }
                // filter
                if (!item.filter || !item.filters)
                    item.filters = [];
                if (typeof item.filterMultiple === 'undefined')
                    item.filterMultiple = true;
                if (!item.filterConfirmText)
                    item.filterConfirmText = "\u786E\u8BA4";
                if (!item.filterClearText)
                    item.filterClearText = "\u91CD\u7F6E";
                if (!item.filterIcon)
                    item.filterIcon = "anticon anticon-filter";
                item.filtered = item.filters.findIndex(function (w) { return w.checked; }) !== -1;
                // buttons
                var buttons = [];
                if (item.buttons) {
                    for (var _b = 0, _e = item.buttons; _b < _e.length; _b++) {
                        var btn = _e[_b];
                        if (btn.type === 'del' && typeof btn.pop === 'undefined')
                            btn.pop = true;
                        if (btn.pop === true) {
                            btn._type = 2;
                            if (typeof btn.popTitle === 'undefined')
                                btn.popTitle = "\u786E\u8BA4\u5220\u9664\u5417\uFF1F";
                        }
                        if (btn.children && btn.children.length > 0) {
                            btn._type = 3;
                        }
                        if (!btn._type)
                            btn._type = 1;
                        // i18n
                        if (btn.i18n && this.i18nSrv)
                            btn.text = this.i18nSrv.fanyi(btn.i18n);
                        buttons.push(btn);
                    }
                    if (buttons.length === 0)
                        continue;
                }
                item.buttons = buttons;
                // i18n
                if (item.i18n && this.i18nSrv)
                    item.title = this.i18nSrv.fanyi(item.i18n);
                ++idx;
                newColumns.push(item);
            }
            this._columns = newColumns;
            if (checkboxCount > 1)
                throw new Error("just only one column checkbox");
            if (radioCount > 1)
                throw new Error("just only one column radio");
            this._sortMap = sortMap;
        }
    };
    SimpleTableComponent.prototype.updateResName = function () {
        var ret = {};
        var cur = this.resReName;
        if (cur) {
            if (cur.list)
                if (!Array.isArray(cur.list))
                    ret.list = cur.list.split('.');
                else
                    ret.list = ['list'];
            if (cur.total)
                if (!Array.isArray(cur.total))
                    ret.total = cur.total.split('.');
                else
                    ret.total = ['total'];
        }
        else {
            ret = { total: ['total'], list: ['list'] };
        }
        this._resRN = ret;
    };
    SimpleTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.data && this.url)
            throw new Error("data & url property muse be either-or");
        if (changes.columns)
            this.updateColumns();
        if (changes.resReName)
            this.updateResName();
        if (changes.data || changes.url) {
            this.processData();
        }
        this.setClass();
    };
    SimpleTableComponent.prototype.ngOnDestroy = function () {
        if (this.data$) {
            this.data$.unsubscribe();
            this.data$ = null;
        }
    };
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "extraParams", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "reqMehtod", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "reqBody", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "reqHeaders", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "reqReName", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "reqError", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "resReName", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "ps", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "pi", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "total", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "loading", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "bordered", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "showSizeChanger", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "pageSizeSelectorValues", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "showQuickJumper", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "showTotal", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "isPageIndexReset", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "pagePlacement", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "toTopInChange", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "toTopOffset", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "sortReName", void 0);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "multiSort", null);
    __decorate([
        core_1.Input()
    ], SimpleTableComponent.prototype, "preDataChange", void 0);
    __decorate([
        core_1.ContentChild('body')
    ], SimpleTableComponent.prototype, "body", void 0);
    __decorate([
        core_1.ContentChild('footer')
    ], SimpleTableComponent.prototype, "footer", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "checkboxChange", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "radioChange", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "sortChange", void 0);
    __decorate([
        core_1.Output()
    ], SimpleTableComponent.prototype, "filterChange", void 0);
    SimpleTableComponent = __decorate([
        core_1.Component({
            selector: 'simple-table',
            templateUrl: './simple-table.component.html',
            styleUrls: ['./simple-table.less'],
            providers: [simple_table_export_1.SimpleTableExport, _core_1.CNCurrencyPipe, _core_1.MomentDatePipe, _core_1.YNPipe, common_1.DecimalPipe]
        }),
        __param(5, core_1.Optional()), __param(5, core_1.Inject(_core_1.ALAIN_I18N_TOKEN))
    ], SimpleTableComponent);
    return SimpleTableComponent;
}());
exports.SimpleTableComponent = SimpleTableComponent;
