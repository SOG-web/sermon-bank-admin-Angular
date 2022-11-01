import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Category } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: '',
    component: Category,
  },
];

@NgModule({
  declarations: [Category],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [Category],
})
export class CategoryModule {}
