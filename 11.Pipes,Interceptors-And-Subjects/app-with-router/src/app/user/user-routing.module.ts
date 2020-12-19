import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { UserListResolver } from './user-list.resolver';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    resolve: [UserListResolver],
    component: ListComponent
  },
  {
    path: 'detail/:id',
    resolve: [UserListResolver, UserResolver],
    component: DetailComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
