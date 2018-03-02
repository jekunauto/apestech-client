import {Component} from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid';
import {MatDialog} from "@angular/material";
import {NzMessageService} from "ng-zorro-antd";

@Component({
    selector: 'app-cell-search-input',
    template: `
        <nz-input [nzType]="'search'"
                  [(ngModel)]="value" (nzOnSearch)="onSearch($event)"></nz-input>
    `,
    styles: []
})
export class EditorSearchInputComponent implements ICellEditorAngularComp {
    value: any;
    url: any;
    private params: ICellEditorParams;

    constructor(public dialog: MatDialog, private msg: NzMessageService) {
    }

    agInit(params: ICellEditorParams): void {
        this.params = params;
        this.value = params.value.value;
        this.url = params.value.url;
    }

    getValue() {
        this.params.value.value = this.value;
        return this.value;
    }

    // 点击查询按钮
    onSearch() {
        let dialog = this.params.value.dialog;
        if (!dialog) {
            this.msg.error("请检查字段是否配置了 dialog 属性", {nzDuration: 3000});
            return false;
        }

        let dialogGridConfig = this.params.value.dialogGridConfig;
        let dialogRef = this.dialog.open(dialog, {
            width: "900px",
            data: dialogGridConfig
        });

        dialogRef.afterOpen().subscribe(() => {
            console.log("afterOPen")
        });

        dialogRef.afterClosed().subscribe(result => {
            debugger;
            if (result) {
                /** 遇到的问题记录：
                 * 1.需要给 当前的 value 赋值，不然 grid 中的当前的 value 没有值
                 * 2.不能将 result 直接赋值给 RowData，会报 找不到 object 错
                 * 3.循环的赋值的时候，result中没有key的值时，应取data中的值，不然数据会被清理掉
                 * 4.通过行模型去更新数据，不会对grid的model造成污染
                 */
                let resultData = result[0];
                let nodeId = this.params.column.getColId();
                let data = this.params.node.data;
                let rowIndex = this.params.rowIndex;

                for(let key in data){
                    data[key] = !!resultData[key] ? resultData[key] : data[key];
                }
                this.value = resultData[nodeId];

                let rowNode = this.params.api.getDisplayedRowAtIndex(rowIndex);
                rowNode.setData(data);

                this.params.api.stopEditing();  // 加上这行代码会自动触发 调用类中的 onCellValueChanged，即数据回填之后立马触发 onCellValueChanged数据检查
            }
        });
    }
}
