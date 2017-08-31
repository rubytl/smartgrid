import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgReduxModule, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutModule } from './layouts/full-layout.module';
import { RestrictedSiteApiService } from './services/restricted-site.service';

import { ACTION_PROVIDERS } from './actions';

@NgModule({
  imports: [
    AppRoutingModule,
    NgReduxModule,
    FullLayoutModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    RestrictedSiteApiService,
    DevToolsExtension,
    ACTION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
