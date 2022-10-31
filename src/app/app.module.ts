import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'levels',
    loadChildren: () =>
      import('./pages/levels/levels.module').then((m) => m.LevelsModule),
  },
  {
    path: 'banner',
    loadChildren: () =>
      import('./pages/banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./pages/message/message.module').then((m) => m.MessageModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'i-phone141',
    loadChildren: () =>
      import('./pages/i-phone141/i-phone141.module').then(
        (m) => m.IPhone141Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'ministers',
    loadChildren: () =>
      import('./pages/ministers/ministers.module').then(
        (m) => m.MinistersModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
