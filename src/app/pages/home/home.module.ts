import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Home } from './home.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  {
    path: '',
    component: Home,
  },
];

@NgModule({
  declarations: [Home],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [Home],
})
export class HomeModule {}
