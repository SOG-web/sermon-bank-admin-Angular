import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Levels } from './levels.component';
import { SharedModule } from '../../shared/shared.module';

const routes = [
  {
    path: '',
    component: Levels,
  },
];

@NgModule({
  declarations: [Levels],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [Levels],
})
export class LevelsModule {}
