import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result.component';

const COMPONENTS = [ResultComponent];

// region: zorro modules
 
const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdResultModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdResultModule, providers: [] };
    }
}
