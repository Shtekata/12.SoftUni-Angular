import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, from, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    this.subject();
    // this.subject2();
    // this.behaviorSubject();
    // this.replaySubject();
    // this.asyncSubject();
  }

  ngOnInit(): void {
  }

  subject() {
    let subject = new Subject();
    subject.subscribe({ next: (x) => console.log(`observerA: ${x}`) });
    subject.subscribe({ next: (x) => console.log(`observerB: ${x}`) });
    subject.subscribe({ next: (x) => console.log(`observerC: ${x}`) });
    let observable = from([1, 2, 3]);
    observable.subscribe(subject);
  }

  subject2() {
    let subject = new Subject();
    subject.subscribe({ next: (x) => console.log(`observerA: ${x}`) });
    subject.subscribe({ next: (x) => console.log(`observerB: ${x}`) });
    subject.subscribe({ next: (x) => console.log(`observerC: ${x}`) });
    subject.next(1);
    subject.next(2);
    subject.next(3);
  }

  behaviorSubject() {
    let subject = new BehaviorSubject(1);
    subject.subscribe({ next: (x) => console.log(`observerA: ${x}`) });
    subject.next(2);
    subject.next(3);
    subject.subscribe({ next: (x) => console.log(`observerB: ${x}`) });
    subject.next(4);
    subject.next(5);
  }

  replaySubject() {
    let subject = new ReplaySubject(2);
    subject.subscribe({ next: (x) => console.log(`observerA: ${x}`) });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.subscribe({ next: (x) => console.log(`observerB: ${x}`) });
    subject.next(4);
    subject.next(5);
  }

  asyncSubject() {
    let subject = new AsyncSubject();
    subject.subscribe({ next: (x) => console.log(`observerA: ${x}`) });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.subscribe({ next: (x) => console.log(`observerB: ${x}`) });
    subject.next(4);
    subject.next(5);
    subject.complete();
  }
}
