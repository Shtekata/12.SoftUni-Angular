import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyDirective } from './is-empty.directive';
import { LoaderComponent } from './loader/loader.component';
import { AsideComponent } from './aside/aside.component';

const dataDeclExp = [IsEmptyDirective, LoaderComponent, AsideComponent];

@NgModule({
  declarations: dataDeclExp,
  imports: [
    CommonModule
  ],
  exports: dataDeclExp
})
export class SharedModule { }
