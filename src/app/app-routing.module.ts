import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './auth/admin.guard';
import { AdminLoggedinGuard } from './auth/admin-loggedin.guard';

const routes: Routes = [
  {
    path:'admin',loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard]
  },
  {
    path:'',loadChildren:() => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'admin_login',component:AdminLoginComponent,canActivate:[AdminLoggedinGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
