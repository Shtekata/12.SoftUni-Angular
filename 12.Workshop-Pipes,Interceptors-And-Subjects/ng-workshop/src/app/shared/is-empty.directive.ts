import { Directive, DoCheck, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appIsEmpty]',
  exportAs: 'isEmpty'
})
// export class IsEmptyDirective implements OnChanges {
export class IsEmptyDirective implements DoCheck {

  @Input() someValue: any;

  isEmpty = true;

  constructor() { }

  // ngOnChanges(simpleChanges: SimpleChanges): void{
  //   this.isEmpty = !simpleChanges?.someValue.currentValue || true;
  // }
  ngDoCheck(): void{
    this.isEmpty = !this.someValue;
  }
}
