import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefineCompanyComponent} from "./define-company/define-company.component";
import {DefineAddressComponent} from "./define-address/define-address.component";
import {DefineDepartmentComponent} from "./define-department/define-department.component";

const routes: Routes = [
    {path: "defineCompany", component: DefineCompanyComponent},
    {path: "defineAddress", component: DefineAddressComponent},
    {path: "defineDepartment", component: DefineDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdmRoutingModule { }
