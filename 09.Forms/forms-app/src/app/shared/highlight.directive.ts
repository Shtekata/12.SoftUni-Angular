import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'exportAppHighlightDirective'
})
export class HighlightDirective implements OnChanges{
  @HostBinding('style.color') color = '';
  @HostBinding('class.addedClasToDirective')
  @HostBinding('class.addedClasAnotherToDirective') get abv(): boolean { return this.appHighlight; }

  @Input() backgroundColor = 'green';

  // @Input() isHL = false;
  @Input() appHighlight = false;

  @HostListener('mouseenter', ['$event']) me(x: Event): void {
    console.log(x);
    if (this.appHighlight) { return; }
    this.appHighlight = true;
    this.highlight('green');
  }

  @HostListener('mouseleave') ml(): void {
    if (!this.appHighlight) { return; }
    this.appHighlight = false;
    this.highlight('blue');
  }


  constructor(private render: Renderer2, private elementRef: ElementRef) { }

  highlight(color: string): void {
    this.render
      // .setStyle(this.elementRef.nativeElement, 'backgroundColor', this.isHL ? this.backgroundColor : 'inherit');
      .setStyle(this.elementRef.nativeElement, 'backgroundColor', this.appHighlight ? this.backgroundColor : 'inherit');
    // this.render.setStyle(this.elementRef.nativeElement, 'color', color);
    this.color = color;
  }

  ngOnChanges(): void{
    this.highlight('pink');
  }
}
