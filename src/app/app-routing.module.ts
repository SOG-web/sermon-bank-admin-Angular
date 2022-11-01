import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  {
    path: 'levels',
    loadChildren: () =>
      import('./pages/levels/levels.module').then((m) => m.LevelsModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'banner',
    loadChildren: () =>
      import('./pages/banner/banner.module').then((m) => m.BannerModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./pages/message/message.module').then((m) => m.MessageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category/category.module').then((m) => m.CategoryModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'ministers',
    loadChildren: () =>
      import('./pages/ministers/ministers.module').then(
        (m) => m.MinistersModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
