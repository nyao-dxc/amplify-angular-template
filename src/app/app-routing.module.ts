import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodosComponent, canActivate: [MsalGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // 默认路由指向登录页面
    { path: '**', redirectTo: 'login' } // 处理未知路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }