import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingMogule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, UserRoutingMogule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [UserService]
})
export class UserModule { }
