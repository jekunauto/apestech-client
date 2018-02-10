import { Injectable } from '@angular/core';

@Injectable()
export class GridConfigService {

    localeText: {};

    constructor() {
        this.initLocaleText();
    }

    getLocaleText(): any{
        return this.localeText;
    }

    initLocaleText(): void{
        this.localeText = {
            page: '页',
            more: '更多',
            to: '到',
            of: 'Of',
            next: '下一页',
            last: '最后一页',
            first: '第一页',
            previous: '上一页',
            loadingOoo: '加载中...',

            // for set filter
            selectAll: '选择所有',
            searchOoo: 'daSearch...',
            blanks: '空',

            // for number filter and text filter
            filterOoo: '过滤...',
            applyFilter: 'daApplyFilter...',

            // for number filter
            equals: '等于',
            notEqual: '不等于',
            lessThanOrEqual: '小于或等于',
            greaterThanOrEqual: '大于或等于',
            inRange: '区间',
            lessThan: '小于',
            greaterThan: '大于',

            // for text filter
            contains: '包含',
            notContains: '不包含',
            startsWith: '前匹配',
            endsWith: '后匹配',

            // the header of the default group column
            group: 'laGroup',

            // tool panel
            columns: '列',
            rowGroupColumns: 'laPivot Cols',
            rowGroupColumnsEmptyMessage: 'la please drag cols to group',
            valueColumns: 'laValue Cols',
            pivotMode: 'laPivot-Mode',
            groups: 'laGroups',
            values: '值',
            pivots: 'laPivots',
            valueColumnsEmptyMessage: 'la drag cols to aggregate',
            pivotColumnsEmptyMessage: 'la drag here to pivot',

            // other
            noRowsToShow: '无数据',

            // enterprise menu
            pinColumn: '冻结列',
            valueAggregation: 'laValue Agg',
            autosizeThiscolumn: '自动调整当前列列宽',
            autosizeAllColumns: '自动调整所有列列宽',
            groupBy: '分组',
            ungroupBy: '取消分组',
            resetColumns: '取消列设置',
            expandAll: '全部展开',
            collapseAll: '全部折叠',
            toolPanel: '工具栏',
            export: '导出',
            csvExport: '导出csv',
            excelExport: '导出excel',

            // enterprise menu pinning
            pinLeft: '冻结该列居左 <<',
            pinRight: '冻结该列居右 >>',
            noPin: '取消冻结 <>',

            // enterprise menu aggregation and status panel
            sum: '合计',
            min: '最小值',
            max: '最大值',
            none: '空',
            count: '统计',
            average: '平均值',

            // standard menu
            copy: '复制',
            ctrlC: 'ctrl + C',
            paste: '粘贴',
            ctrlV: 'ctrl + V'
        }
    }
}

// grid 处理单元格的值
export function numberValueParser(params) {
    let value = 0;
    let regPos = /^\d+(\.\d+)?$/;

    if( regPos.test( params.newValue ) ){
        value = params.newValue;
    }

    return value;
}

export function dateValueParser(params){
    let value: any;
    if( params.value ){
        value = dateFormat(params.value, "yyyy-MM-dd");
    }
    return value;
}


//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).Format("yyyy-M-d h:m:s.S")	  ==> 2006-7-2 8:9:4.18
function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
