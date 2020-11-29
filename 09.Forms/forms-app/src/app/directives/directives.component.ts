import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../shared/highlight.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit, AfterViewInit {

@ViewChild('paragraphExpDirective') paragraphDirective!: HighlightDirective;
// @ViewChild('paragraphExpDirective', { static: false }) paragraphDirective: any;

hasMyClass = true;
hasMyOtherClass = true;
users = [
  { name: 'Ivan', age: 20 },
  { name: 'Petar', age: 30 }
];

isHighlighted = false;

constructor() { }

ngOnInit(): void { }

ngAfterViewInit(): void{
  console.log(this.paragraphDirective);
}

  // toggleHighlightHandler(): void {
  // toggleHighlightHandler(x: Element): void {
  toggleHighlightHandler(x: HighlightDirective): void {
    this.isHighlighted = !this.isHighlighted;
    // x.me(x as any);
    console.log(x);
  }

}
