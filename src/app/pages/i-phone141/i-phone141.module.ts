import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { IPhone141 } from './i-phone141.component'

const routes = [
  {
    path: '',
    component: IPhone141,
  },
]

@NgModule({
  declarations: [IPhone141],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [IPhone141],
})
export class IPhone141Module {}
