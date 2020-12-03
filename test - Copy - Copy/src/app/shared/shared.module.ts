import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyDirective } from './is-empty.directive';
import { LoaderComponent } from './loader/loader.component';
import { AsideComponent } from './aside/aside.component';
import { EmailValidatorDirective } from './email-validator.directive';

const dataDeclExp = [IsEmptyDirective, LoaderComponent, AsideComponent, EmailValidatorDirective];

@NgModule({
  declarations: dataDeclExp,
  imports: [
    CommonModule
  ],
  exports: dataDeclExp
})
export class SharedModule { }
