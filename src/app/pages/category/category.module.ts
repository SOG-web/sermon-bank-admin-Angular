import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Category } from './category.component'

const routes = [
  {
    path: '',
    component: Category,
  },
]

@NgModule({
  declarations: [Category],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Category],
})
export class CategoryModule {}
