import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Message } from './message.component'

const routes = [
  {
    path: '',
    component: Message,
  },
]

@NgModule({
  declarations: [Message],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Message],
})
export class MessageModule {}
