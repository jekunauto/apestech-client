import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/shared.module";

import { DemoRoutingModule } from './demo-routing.module';

import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import {AgGridDemoComponent} from "./demo3/ag-grid-demo.component";

import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import {ModelCustomComponent} from "./demo5/custom.component";

import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';

import {RichGridComponent} from "./gridComponent/rich-grid-example/rich-grid.component";
import { Demo8Component } from './demo8/demo8.component';

@NgModule({
    imports: [ SharedModule, DemoRoutingModule ],
    declarations: [
        Demo1Component,
        Demo2Component,
        Demo3Component,
        Demo4Component,
        Demo5Component,
        Demo6Component,
        Demo7Component,
        Demo8Component,

        AgGridDemoComponent,
        RichGridComponent,
        ModelCustomComponent,
    ],
    entryComponents: [
        ModelCustomComponent
    ]

})
export class DemoModule { }
