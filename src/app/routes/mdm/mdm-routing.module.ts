import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefineCompanyComponent} from "./define-company/define-company.component";

const routes: Routes = [
    {path: "defineCompany", component: DefineCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdmRoutingModule { }
