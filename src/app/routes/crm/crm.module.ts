import { NgModule } from '@angular/core';

import { CrmRoutingModule } from './crm-routing.module';
import { VipComponent } from './vip/vip.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
      SharedModule,
      CrmRoutingModule
  ],
  declarations: [VipComponent]
})
export class CrmModule { }
