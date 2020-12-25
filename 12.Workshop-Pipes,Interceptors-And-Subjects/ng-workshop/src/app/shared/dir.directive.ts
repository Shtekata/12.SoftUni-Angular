import { Directive, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appSubmitOnValid][ngModel]'
})
export class SubmitOnValidDirective implements OnDestroy {

  isAlive$ = new Subject();
  @Output() ngModelChageIfValid: EventEmitter<any> = new EventEmitter();

  constructor(ngModel: NgModel) {
    // ngModel.update.pipe(filter(() => ngModel.valid), takeUntil(this.isAlive$)).subscribe(th
   }
  
  ngOnDestroy(): void {
    this.isAlive$.next();
    this.isAlive$.complete();
  }

}
