import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Banner } from './banner.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: '',
    component: Banner,
  },
];

@NgModule({
  declarations: [Banner],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [Banner],
})
export class BannerModule {}
