import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Message } from './message.component';
import { SharedModule } from '../../shared/shared.module';
import { FileValueAccessor } from 'src/app/directives/file-value-accessor';

const routes = [
  {
    path: '',
    component: Message,
  },
];

@NgModule({
  declarations: [Message],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [Message],
})
export class MessageModule {}
