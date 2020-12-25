import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyDirective } from './is-empty.directive';
import { LoaderComponent } from './loader/loader.component';
import { AsideComponent } from './aside/aside.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { SubmitOnValidDirective } from './dir.directive';
import { ErrorService } from './error.service';
import { ShortenTextPipe } from './shorten-text.pipe';
import { TimeDiffPipe } from './time-diff.pipe';

const dataDeclExp = [
  IsEmptyDirective,
  LoaderComponent,
  AsideComponent,
  EmailValidatorDirective,
  SubmitOnValidDirective,
  ShortenTextPipe,
  TimeDiffPipe
];

@NgModule({
  declarations: dataDeclExp,
  imports: [
    CommonModule
  ],
  providers: [ErrorService],
  exports: dataDeclExp
})
export class SharedModule { }
