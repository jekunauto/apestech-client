import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/shared.module";

import { MdmRoutingModule } from './mdm-routing.module';
import {DefineCompanyComponent} from './define-company/define-company.component';
import { DefineAddressComponent } from './define-address/define-address.component';
import { DefineDepartmentComponent } from './define-department/define-department.component';
import { DefineMenuComponent } from './define-menu/define-menu.component';


@NgModule({
  imports: [
      SharedModule,
      MdmRoutingModule
  ],
  declarations: [
      DefineCompanyComponent,
      DefineAddressComponent,
      DefineDepartmentComponent,
      DefineMenuComponent,
  ]
})
export class MdmModule { }
