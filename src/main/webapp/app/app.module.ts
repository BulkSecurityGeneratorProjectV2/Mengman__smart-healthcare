import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ng2-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SmarthealthcareSharedModule, UserRouteAccessService } from './shared';
import { SmarthealthcareHomeModule } from './home/home.module';
import { SmarthealthcareAdminModule } from './admin/admin.module';
import { SmarthealthcareAccountModule } from './account/account.module';
import { SmarthealthcareEntityModule } from './entities/entity.module';
import { SmarthealthcareCaseModule } from './case/case.module';
import { SmarthealthcareLoginModule } from './login/login.module';
import { SmarthealthcareExamModule } from './exam/exam.module';
import { SmarthealthcareChartsModule } from './charts/charts.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutRoutingModule,
        NgbModule.forRoot(),
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SmarthealthcareSharedModule,
        SmarthealthcareLoginModule,
        SmarthealthcareHomeModule,
        SmarthealthcareAdminModule,
        SmarthealthcareAccountModule,
        SmarthealthcareEntityModule,
        SmarthealthcareCaseModule,
        SmarthealthcareExamModule,
        SmarthealthcareChartsModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SmarthealthcareAppModule {}
