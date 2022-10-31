import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Levels } from './levels.component'

const routes = [
  {
    path: '',
    component: Levels,
  },
]

@NgModule({
  declarations: [Levels],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Levels],
})
export class LevelsModule {}
