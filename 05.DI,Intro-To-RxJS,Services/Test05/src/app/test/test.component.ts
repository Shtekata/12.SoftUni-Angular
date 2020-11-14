import { Component, OnInit, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { range } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { MY_SERVICE } from '../providers';
import { MyService } from '../providers';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  @Input() obj: { name: string; };

  // constructor(@Inject(MY_SERVICE) myService) {
  // constructor(@Inject(MyService) myService) {
  constructor(myService: MyService) {
    console.log(myService.value);
    console.log(myService);
  }

  ngOnInit(): void {
    const obs = range(1, 10).pipe(tap(i => console.log(`Hello: ${i}`)));
    obs.subscribe(i => console.log(i));
  }

}
