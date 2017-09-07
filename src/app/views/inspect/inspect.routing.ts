import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcbComponent } from './ecb/ecb.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inspect'
    },
    children: [
      {
        path: 'ecb',
        component: EcbComponent,
        data: {
          title: 'Ecb'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectRoutingModule { }
