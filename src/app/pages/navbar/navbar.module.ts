import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Navbar } from './navbar.component'

const routes = [
  {
    path: '',
    component: Navbar,
  },
]

@NgModule({
  declarations: [Navbar],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Navbar],
})
export class NavbarModule {}
