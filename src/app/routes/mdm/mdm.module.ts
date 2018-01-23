import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/shared.module";

import { MdmRoutingModule } from './mdm-routing.module';
import {DefineCompanyComponent} from "./define-company/define-company.component";
import { DefineAddressComponent } from './define-address/define-address.component';


@NgModule({
  imports: [
      SharedModule,
      MdmRoutingModule
  ],
  declarations: [
      DefineCompanyComponent,
      DefineAddressComponent
  ]
})
export class MdmModule { }
