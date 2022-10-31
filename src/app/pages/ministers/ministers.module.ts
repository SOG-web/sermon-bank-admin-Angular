import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Ministers } from './ministers.component'

const routes = [
  {
    path: '',
    component: Ministers,
  },
]

@NgModule({
  declarations: [Ministers],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Ministers],
})
export class MinistersModule {}
