import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GridOptions} from "ag-grid";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'base-dialog',
    templateUrl: 'base-dialog.html',
})
export class BaseDialog {

    searchLoading: boolean = false; // 搜索按钮的动画
    rowSelection: string;  // grid的选择模式 multiple  or single

    conditionField: any[];  // 查询条件
    model: any = {};
    options: any;
    form = new FormGroup({});

    private gridOptions:GridOptions;
    public rowData: any[];
    private columnDefs: any[];

    constructor(public dialogRef: MatDialogRef<BaseDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        this.gridOptions = <GridOptions>{};
        this.columnDefs = data.columnDefs;
        this.conditionField = data.conditionField;

        // 选择模式默认为 single
        this.rowSelection = data.rowSelection? data.rowSelection :"single" ;

        this.gridOptions.localeText =  {
            page: '页',
            more: '更多',
            to: '到',
            of: 'daOf',
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
        };
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    _search(): void{
        this.searchLoading = true;

        console.log(this.model);

        setTimeout(()=>{
            this.queryData();
            this.searchLoading = false;
        }, 2000);
    }

    private queryData() {
        let rowData:any[] = [];

        for (let i = 0; i < 20; i++) {

            rowData.push({

                name: "Jim"+i,

                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: "New York"+i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: "New York"+i,
                continent: "New York"+i,
                language: "New York"+i,
            });
        }
        this.rowData = rowData;
    }

    onSelectionChanged(event: Event){
        let selectedRow = this.gridOptions.api.getSelectedRows();
        console.log(selectedRow);
        this.data.result = selectedRow;
    }

}