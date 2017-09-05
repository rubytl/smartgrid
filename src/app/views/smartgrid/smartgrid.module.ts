import { NgModule } from '@angular/core';

import { SolarComponent } from './solar/solar.component';

import { SmartgridRoutingModule } from './smartgrid-routing.module';
import { WindComponent } from './wind/wind.component';

@NgModule({
  imports: [ SmartgridRoutingModule ],
  declarations: [
    SolarComponent,
    WindComponent,
  ]
})
export class SmartgridModule { }
