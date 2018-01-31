import {Component, ElementRef, Inject, ViewChild} from "@angular/core";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GridOptions} from "ag-grid";
import {DateComponent} from "../gridComponent/date-component/date.component";
import ProficiencyFilter from "../gridComponent/filters/proficiencyFilter";
import RefData from "../gridComponent/data/refData";

@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
})
export class DialogOverview {

    owSelection: string = "multiple";

    @ViewChild('grid', {read: ElementRef}) public grid;

    private gridOptions:GridOptions;
    public rowData: any[];
    private columnDefs: any[];


    constructor(public dialogRef: MatDialogRef<DialogOverview>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();

        this.gridOptions.dateComponentFramework = DateComponent;

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

    }
    private createColumnDefs() {
        //列的 pinned 属性：表示是否冻结该列

        this.columnDefs = [
            { headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true, suppressMenu: true, pinned: true },
            { headerName: "名称", field: "name", width: 150, pinned: true },
            { headerName: "城市", field: "country", width: 150 },
            { headerName: "Proficiency", field: "proficiency", width: 120, filter: ProficiencyFilter },
            {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
            {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
            {headerName: "Address", field: "address", width: 500, filter: 'text'}
        ];
    }

    private createRowData() {
        let rowData:any[] = [];

        for (let i = 0; i < 20; i++) {
            let countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                dob: RefData.DOBs[i % RefData.DOBs.length],
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }
        this.rowData = rowData;
    }

    private onColumnEvent(event: Event){
        console.log(event);
    }

    private onRowSelected(event: Event){
        console.log(event);
    }

    createRandomPhoneNumber() {
        let result = '+';
        for (let i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

}
