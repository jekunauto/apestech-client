import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GridOptions} from 'ag-grid';
import {dateValueParser, formatNumber, GridConfigService, numberValueParser} from '@core/config/grid-config.service';
import {HeaderButtonComponent} from '@shared/grid/header-button/header-button.component';
import {RenderButtonComponent} from '@shared/grid/cell-render/render-button.component';
import {EditorSearchInputComponent} from '@shared/grid/editor-render/editor-search-input.component';
import {EditorDateInputComponent} from '@shared/grid/editor-render/editor-date-input.component';
import {CompanyDialog} from '@shared/dialog/featuresDailog/company-dialog';
import {BaseDialog} from '@shared/dialog/base-dialog';
import {EditorCheckboxComponent} from '@shared/grid/editor-render/editor-checkbox.component';
import {RenderCheckboxComponent} from '@shared/grid/cell-render/render-checkbox.component';
import {EditorSelectComponent} from "@shared/grid/editor-render/editor-select.component";
import {RenderSelectComponent} from "@shared/grid/cell-render/render-select.component";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: [`
      :host ::ng-deep .upload-list-inline .ant-upload-list-item {
          float: left;
          width: 200px;
          margin-right: 8px;
      }
  `]
})
export class Demo2Component implements OnInit {

    //image

    fileSize= 500;  //文件的大小 单位 KB

    defaultFileList = [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
    fileList1 = [...this.defaultFileList];

    form: FormGroup;

    // grid
    gridOptions: GridOptions;
    columnDefs: any[];
    rowSelection: string;
    frameworkComponents: any;    // 自定义的 Grid cell 渲染器

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
        };

        // 渲染的组件需要在这里定义，不然不会生效
        this.frameworkComponents = {
            editorSearchInput: EditorSearchInputComponent,
            dateInput: EditorDateInputComponent,
            checkboxInput: EditorCheckboxComponent,
            editorSelect: EditorSelectComponent,

            renderCheckBox: RenderCheckboxComponent,
            renderSelect: RenderSelectComponent,
        };

        this.initColumnDefs();
        this.gridOptions.localeText = gridConfigService.getLocaleText();
    }

    // 检查grid行数据变化时对这一行的数据做修改
    onCellValueChanged($event){
        let fieldId = $event.colDef.field;
        if( fieldId == "companyId"){
            console.log("onCellValueChanged --------------->");
            console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
        }
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
                        cellEditor: "editorSearchInput",
                        cellEditorParams: {
                            value: {
                                value: '',
                                dialog: BaseDialog,
                                url: "queryAddress.action",
                                condition: ["addressId", "addressName"],
                                dialogGridConfig:{
                                    rowSelection: "single",
                                    result: []
                                }
                            }
                        }
                    },
                    { headerName: "地点名称", field: "addressNames", width: 170, editable: true, },
                    { headerName: "公司编码", field: "companyId", width: 150, editable: true,
                        cellEditor: "editorSearchInput",
                        cellEditorParams: {
                            value: {
                                value: '',
                                dialog: CompanyDialog,
                                url: "queryCompany.action",
                                condition: ["companyId", "companyName"],
                                dialogGridConfig:{
                                    rowSelection: "multiple",
                                    result: []
                                }
                            }
                        },
                    },
                    { headerName: "公司名称", field: "companyName", width: 170, editable: true,  },
                    { headerName: "是否有效", field: "isValid", width: 170, editable: true,
                        cellRenderer: "renderCheckBox",
                        cellEditor: "checkboxInput",
                        cellEditorParams: {
                            value: { value: '' }
                        }
                    },
                    { headerName: "操作人", field: "inputPerson", width: 170, editable: true},
                    { headerName: "操作时间", field: "inputDate", width: 150, editable: true,
                        valueFormatter: dateValueParser,
                        cellEditor: "dateInput",
                        cellEditorParams: {
                            value: { value: '' }
                        }
                    },
                    { headerName: "合作方式", field: "cooperationMethod", width: 150, editable: true,
                        cellEditor: "agSelectCellEditor",
                        cellEditorParams: {
                            values: ["AAA", "BBB", "CCC", "DDD"]
                        }
                    },
                    { headerName: "销售件数", field: "saleNumber", width: 170, editable: true, valueParser: numberValueParser,
                        valueFormatter: formatNumber,
                    },
                    { headerName: "仓库类型", field: "warehouseType", width: 170, editable: true, cellRenderer: "renderSelect",
                        cellEditor: 'editorSelect',
                        cellEditorParams: {
                            value: {
                                label:"",   //用于 grid 显示使用
                                value: "",
                                options:[
                                    {label: '中心仓', value : 1},
                                    {label: '区域中心仓', value: 2},
                                    {label: '门店仓库', value : 3}
                                ]
                            }
                        },
                    },
                    { headerName: "操作", field:"", editable: false, cellRendererFramework: RenderButtonComponent}
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

    //  文件上传的之前调用 返回一个 false就会终止上传
    _fileBeforeUpload = (file, fileList) => {
        console.log(file);
        console.log(fileList);
    }
}
