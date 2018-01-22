import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/shared.module";

import { MdmRoutingModule } from './mdm-routing.module';
import {DefineCompanyComponent} from "./define-company/define-company.component";


@NgModule({
  imports: [
      SharedModule,
      MdmRoutingModule
  ],
  declarations: [
      DefineCompanyComponent
  ]
})
export class MdmModule { }
