import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';

import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { AsideToggleDirective } from '../shared/aside.directive';

// Layouts
import { FullLayoutComponent } from './full-layout.component';
import { SimpleLayoutComponent } from './simple-layout.component';
import { BreadcrumbsComponent } from '../shared/breadcrumb.component';

// Dashboard
// import { SiteApiService } from '../views/site-tree-view/restricted-site.service';
// import { MapViewService } from '../views/map-view/map-view.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { SiteTreeViewComponent } from '../views/site-tree-view/site-tree-view.component';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    SiteTreeViewComponent,
    MenuComponent
  ],
  // providers: [{
  //   provide: LocationStrategy,
  //   useClass: HashLocationStrategy,
  // },
  //   SiteApiService,
  //   MapViewService
  // ],
})
export class FullLayoutModule { }
