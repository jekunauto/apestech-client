import {Component, ElementRef, Inject, ViewChild} from "@angular/core";
import {ColumnApi, GridApi, GridOptions} from "ag-grid";
import {DateComponent} from "../gridComponent/date-component/date.component";
import {HeaderGroupComponent} from "../gridComponent/header-group-component/header-group.component";
import ProficiencyFilter from "../gridComponent/filters/proficiencyFilter";
import RefData from "../gridComponent/data/refData";
import {GridHeaderComponent} from "../gridComponent/header-component/header.component";
import SkillFilter from "../gridComponent/filters/skillFilter";

@Component({
    selector: 'dialog-grid',
    template: `
      <ag-grid-angular 
          #grid 
          style="width: 100%; height: 350px;" 
          class="ag-fresh" [gridOptions]="gridOptions" [columnDefs]="columnDefs" [showToolPanel]="showToolPanel" 
          [rowData]="rowData" enableColResize enableSorting enableFilter groupHeaders suppressRowClickSelection
                       toolPanelSuppressGroups toolPanelSuppressValues rowHeight="22" rowSelection="multiple" (modelUpdated)="onModelUpdated()" (cellClicked)="onCellClicked($event)" (cellDoubleClicked)="onCellDoubleClicked($event)" (cellContextMenu)="onCellContextMenu($event)"
                       (cellValueChanged)="onCellValueChanged($event)" (cellFocused)="onCellFocused($event)" (rowSelected)="onRowSelected($event)" (selectionChanged)="onSelectionChanged()" (beforeFilterChanged)="onBeforeFilterChanged()" (afterFilterChanged)="onAfterFilterChanged()"
                       (filterModified)="onFilterModified()" (beforeSortChanged)="onBeforeSortChanged()" (afterSortChanged)="onAfterSortChanged()" (virtualRowRemoved)="onVirtualRowRemoved($event)" (rowClicked)="onRowClicked($event)" (gridReady)="onReady($event)" (columnEverythingChanged)="onColumnEvent($event)"
                       (columnRowGroupChanged)="onColumnEvent($event)" (columnValueChanged)="onColumnEvent($event)" (columnMoved)="onColumnEvent($event)" (columnVisible)="onColumnEvent($event)" (columnGroupOpened)="onColumnEvent($event)" (columnResized)="onColumnEvent($event)"
                       (columnPinnedCountChanged)="onColumnEvent($event)" (gridReady)="onGridReady($event)">
      </ag-grid-angular>
  `,
})
export class DialogGrid {

    private api: GridApi;
    private columnApi: ColumnApi;

    private editInProgress: boolean = false;
    private containerCoords: {} = null;

    @ViewChild('grid', {read: ElementRef}) public grid;

    private gridOptions:GridOptions;
    public showGrid:boolean;
    public rowData:any[];
    private columnDefs:any[];
    public rowCount:string;
    public dateComponentFramework:DateComponent;
    public HeaderGroupComponent = HeaderGroupComponent;

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
        this.gridOptions.dateComponentFramework = DateComponent;
        this.gridOptions.defaultColDef = {
            headerComponentFramework : <{new():GridHeaderComponent}>GridHeaderComponent,
            headerComponentParams : {
                menuIcon: 'fa-bars'
            }
        };

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

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: '雇员',
                headerGroupComponentFramework: HeaderGroupComponent,
                children: [
                    {
                        headerName: "名称", field: "name",
                        width: 150, pinned: true, editable: true
                    },
                    {
                        headerName: "城市", field: "country", width: 150,
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: {cellRenderer: countryCellRenderer, cellHeight: 20}, columnGroupShow: 'open'
                    },
                    {
                        headerName: "DOB", field: "dob", width: 120, pinned: true, cellRenderer: function(params) {
                            return  pad(params.value.getDate(), 2) + '/' +
                                pad(params.value.getMonth() + 1, 2)+ '/' +
                                params.value.getFullYear();
                        }, filter: 'date', columnGroupShow: 'open'
                    }
                ]
            },
            {
                headerName: 'IT技能',
                children: [
                    {
                        headerName: "技能",
                        width: 125,
                        suppressSorting: true,
                        cellRenderer: skillsCellRenderer,
                        filter: SkillFilter
                    },
                    {
                        headerName: "Proficiency",
                        field: "proficiency",
                        width: 120,
                        cellRenderer: percentCellRenderer,
                        filter: ProficiencyFilter
                    },
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                    {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
                    {headerName: "Address", field: "address", width: 500, filter: 'text'}
                ]
            }
        ];
    }

    private createRowData() {
        var rowData:any[] = [];

        for (var i = 0; i < 10; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
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
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber()
            });
        }

        this.rowData = rowData;
    }

}


function skillsCellRenderer(params) {
    var data = params.data;
    var skills = [];
    RefData.IT_SKILLS.forEach(function (skill) {
        if (data && data.skills && data.skills[skill]) {
            skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
        }
    });
    return skills.join(' ');
}

function countryCellRenderer(params) {
    var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}

function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}

function percentCellRenderer(params) {
    var value = params.value;

    var eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    } else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }

    var eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';

    var eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);

    return eOuterDiv;
}

//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
    let asString = num + "";
    while (asString.length < totalStringSize) asString = "0" + asString;
    return asString;
}

