import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Navbar } from './navbar/navbar.component'
import { Header } from './header/header.component'

@NgModule({
  declarations: [Navbar, Header],
  imports: [CommonModule, RouterModule],
  exports: [Navbar, Header],
})
export class ComponentsModule {}
