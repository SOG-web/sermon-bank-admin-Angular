import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/compat/auth-guard';
import { Levels } from './pages/levels/levels.component';
import { Banner } from './pages/banner/banner.component';
import { Message } from './pages/message/message.component';
import { Category } from './pages/category/category.component';
import { Home } from './pages/home/home.component';
import { Ministers } from './pages/ministers/ministers.component';
import { AuthComponent } from './pages/auth/auth.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  {
    path: 'levels',
    component: Levels,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'banner',
    component: Banner,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'message',
    component: Message,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'category',
    component: Category,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    component: Home,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'ministers',
    component: Ministers,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
