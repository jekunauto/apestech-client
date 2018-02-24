import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GridOptions} from 'ag-grid';
import {dateValueParser, GridConfigService, numberValueParser} from '@core/config/grid-config.service';
import { HeaderButtonComponent} from '@shared/grid/header-button/header-button.component';
import { CellButtonComponent} from '@shared/grid/cell-render/cell-button.component';
import {CellSearchInputComponent} from '@shared/grid/cell-render/cell-search-input.component';
import {CellDateInputComponent} from '@shared/grid/cell-render/cell-date-input.component';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: []
})
export class Demo2Component implements OnInit {

    form: FormGroup;

    // grid
    gridOptions: GridOptions;
    columnDefs: any[];
    rowSelection: string;

    constructor(private fb: FormBuilder, private gridConfigService: GridConfigService) {

        // 初始化 Grid的参数
        this.gridOptions = <GridOptions>{
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,               // 分页
            paginationAutoPageSize: true,
            suppressLoadingOverlay: true,   // 不显示 加载中
            suppressNoRowsOverlay: true,    // 不显示 无数据
            singleClickEdit: true,  // 单击就可以编辑

            groupHeaderHeight: 28,  // 按钮操作区域的高度
            rowHeight: 29,
            frameworkComponents: {      // 自定义的 Grid cell 渲染器
                cellSearchInput: CellSearchInputComponent,
                dateInput: CellDateInputComponent,
            }

        };

        this.initColumnDefs();
        this.gridOptions.localeText = gridConfigService.getLocaleText();
    }

    ngOnInit() {
        this.form  = this.fb.group({
            addressId: ['', [Validators.required] ],
            addressName: ['', [Validators.required]],
            companyId: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
            warehouseLevel: ['', [Validators.required]],
            isValid: [false],
            isWarehouse: [false],
            isStore: [false],
            isBase: [false],
        });
    }

    get addressId() { return this.form.controls.addressId };
    get addressName() { return this.form.controls.addressName };
    get companyId() { return this.form.controls.companyId };
    get companyName() { return this.form.controls.companyName };


    initColumnDefs() {
        this.columnDefs = [
            { headerName: '', width: 30, checkboxSelection: true, suppressMenu: true, pinned: true },

            { headerName: '',
                headerGroupComponentFramework: HeaderButtonComponent,
                children: [
                    { headerName: "地点编码", field:"addressId", width: 150, editable: true,
                        cellEditor: "cellSearchInput",
                        cellEditorParams: {
                            value: {
                                url: "queryAddress.action",
                                condition: ["addressId", "addressName"],
                                value: ''
                            }
                        },
                    },
                    { headerName: "地点名称", field: "addressNames", width: 170, editable: true, },
                    { headerName: "公司编码", field: "companyId", width: 150, editable: true, valueParser: numberValueParser },
                    { headerName: "公司名称", field: "companyName", width: 170, editable: true,  },
                    { headerName: "是否有效", field: "isValid", width: 170, editable: true},
                    { headerName: "操作人", field: "inputPerson", width: 170, editable: true},
                    { headerName: "操作时间", field: "inputDate", width: 150, editable: true, cellRenderer: dateValueParser,
                        cellEditor: "dateInput",
                        cellEditorParams: {
                            value: { value: '' }
                        }
                    },
                    { headerName: "合作方式", field: "cooperationMethod", width: 150, editable: true,
                        cellEditor: "agSelectCellEditor",
                        cellEditorParams: {
                            values: ["AAA", "BBB", "CCC"]
                        }
                    },
                    { headerName: "操作", field:"", editable: false, cellRendererFramework: CellButtonComponent}
                ]
            }
        ];
    }

    onSelectionChanged() {
        if (this.gridOptions.api) {
            let modelData = this.gridOptions.api.getSelectedRows();
            console.log(modelData);
        }
    }

    _onSubmit() {
        let gridData = this.getGridData();
        console.log(gridData);
    }

    getGridData() {
        this.gridOptions.api.stopEditing();

        let rowData = [];     // this.gridOptions.rowData; 这个方法获取到的值为空
        this.gridOptions.api.forEachNode((node)=> {
            rowData.push(node.data);
        });

        return rowData;
    }
}
