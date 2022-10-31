import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Ministry } from './ministry.component'

const routes = [
  {
    path: '',
    component: Ministry,
  },
]

@NgModule({
  declarations: [Ministry],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Ministry],
})
export class MinistryModule {}
