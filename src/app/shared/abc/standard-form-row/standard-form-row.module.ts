import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardFormRowComponent } from './standard-form-row.component';

const COMPONENTS = [StandardFormRowComponent];

// region: zorro modules
const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdStandardFormRowModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdStandardFormRowModule, providers: [] };
    }
}
