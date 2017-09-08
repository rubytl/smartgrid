import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { EcbComponent, InspectRoutingModule, InspectComponent } from '.';

@NgModule({
  imports: [
    InspectRoutingModule,
    ChartsModule
  ],
  declarations: [
    EcbComponent,
    InspectComponent
  ]
})
export class InspectModule { }
