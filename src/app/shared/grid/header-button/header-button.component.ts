import { Component } from '@angular/core';
import { IHeaderGroupParams} from "ag-grid";
import {IHeaderGroupAngularComp} from "ag-grid-angular";

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
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.click.bind(this));
    }

    ngOnDestroy() {
        console.log(`Destroying HeaderComponent`);
    }

    click(){
        console.log("qqqq");
    }


}
