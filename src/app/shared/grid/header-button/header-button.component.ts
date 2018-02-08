import { Component } from '@angular/core';
import { IHeaderGroupParams} from 'ag-grid';
import {IHeaderGroupAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements IHeaderGroupAngularComp {

    params: IHeaderGroupParams;
    expanded: boolean;

    constructor() { }

    agInit(params: IHeaderGroupParams): void {
        this.params = params;
    }

    ngOnDestroy() {
        console.log(`Destroying HeaderComponent`);
    }

    click(){

    }

    _onQueryClick() {
        console.log("onGridQueryClick");
    }

    _onAddClick() {
        let data = {
            addressId:"",
            addressNames:"",
            companyId:"",
            companyName:"",
            isValid:"",
            inputPerson:"",
            inputDate:""
        };

        this.params.api.updateRowData({add: [data]});
    }

    _onEditClick() {
        console.log("onEditClick");
    }

    _onDeleteClick() {
        let selectedData = this.params.api.getSelectedRows();
        this.params.api.updateRowData({ remove: selectedData });
    }
}
