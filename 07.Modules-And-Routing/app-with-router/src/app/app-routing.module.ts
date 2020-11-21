// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestResolver } from './test.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    // resolve: [TestResolver]
    resolve: {user: TestResolver}
  },
  {
    path: 'about',
    canActivate: [AccessGuard],
    component: AboutComponent,
    data: {
      isLogged: true
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes);
