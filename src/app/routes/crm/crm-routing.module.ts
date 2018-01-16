import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VipComponent} from "./vip/vip.component";

const routes: Routes = [
    {path: "vip", component: VipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
