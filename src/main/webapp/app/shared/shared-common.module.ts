import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    AngularcrudSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        AngularcrudSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        AngularcrudSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class AngularcrudSharedCommonModule {}
