import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Ministers } from './ministers.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  {
    path: '',
    component: Ministers,
  },
];

@NgModule({
  declarations: [Ministers],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [Ministers],
})
export class MinistersModule {}
