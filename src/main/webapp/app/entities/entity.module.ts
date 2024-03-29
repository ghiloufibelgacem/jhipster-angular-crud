import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularcrudAuthorModule } from './author/author.module';
import { AngularcrudBookModule } from './book/book.module';
import { AngularcrudProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AngularcrudAuthorModule,
        AngularcrudBookModule,
        AngularcrudProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularcrudEntityModule {}
