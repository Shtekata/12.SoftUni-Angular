import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserListResolver } from './user-list.resolver';
import { UserResolver } from './user.resolver';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  providers: [UserListResolver, UserResolver],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
