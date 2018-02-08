import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendComponent } from './trend.component';

const COMPONENTS = [TrendComponent];

// region: zorro modules
 
const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdTrendModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdTrendModule, providers: [] };
    }
}