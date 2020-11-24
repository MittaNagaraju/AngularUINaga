import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { NgApexchartsModule } from "ng-apexcharts";
import { rootRouterConfig } from './app.routing';
import { IconModule } from './shared/icon.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlerService } from './shared/services/error-handler.service';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { CommonServices } from './shared/services/common-services';
import { GlobalServices } from './shared/services/global-services';
import { HttpServices } from './shared/services/http-services';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    IconModule,
    NgApexchartsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent],
  providers: [
    CommonServices,
    GlobalServices,
    HttpServices,
    /* { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }, */
    /* { provide: ErrorHandler, useClass: ErrorHandlerService },
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }