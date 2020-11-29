import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DirectivesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DirectivesComponent]
})
export class DirectivesModule { }
