import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // users = [
  //   {
  //     name: 'Test 1',
  //     age: 10,
  //   }, {
  //     name: 'Test 2',
  //     age:20,
  //   },
  //   {
  //     name: 'Test 3',
  //     age: 30
  //   }
  // ]

  users: any = [];
  
  avrUsers = this.calculateAvrAge(this.users);

  counter = 0;

  // intervalSubscription: Subscription;
  isAlive$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute.snapshot.data[0].name);
    console.log(activatedRoute.snapshot.data.user.name);
    // this.intervalSubscription = interval(1000).subscribe(() => {
    //   this.counter++;
    //   if (this.counter % 2 === 1) {
    //     // this.users.push({ name: `Test ${this.counter + 3}`, age: this.counter * 10 + 30 });
    //     // this.users.push({ name: `Test ${this.counter}`, age: this.counter * 10 });
    //     this.users = this.users.concat({ name: `Test ${this.counter}`, age: this.counter * 10 });
    //   }
    // });
    interval(1000).pipe(takeUntil(this.isAlive$)).subscribe(() => {
      this.counter++;
      if (this.counter % 2 === 1) {
        // this.users.push({ name: `Test ${this.counter + 3}`, age: this.counter * 10 + 30 });
        // this.users.push({ name: `Test ${this.counter}`, age: this.counter * 10 });
        this.users = this.users.concat({ name: `Test ${this.counter}`, age: this.counter * 10 });
      }
    });
   }

  ngOnInit(): void {
  }

  calculateAvrAge(users:any[]): number {
    return users.reduce((x: any, y: any) => x + y.age, 0) / users.length;
}

  ngOnDestroy(): void{
    // this.intervalSubscription.unsubscribe();
    this.isAlive$.next();
    this.isAlive$.complete();
  }

}
