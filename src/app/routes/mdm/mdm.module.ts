import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdmRoutingModule } from './mdm-routing.module';
import {DefineCompanyComponent} from "./define-company/define-company.component";

@NgModule({
  imports: [
    CommonModule,
    MdmRoutingModule
  ],
  declarations: [
      DefineCompanyComponent
  ]
})
export class MdmModule { }
