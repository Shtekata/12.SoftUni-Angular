import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { TestComponent } from './test/test.component';

// import { apiURLProvider, myServiceProvider, MyService } from './providers';
import { apiURLProvider, MyService } from './providers';
import { UserService } from './user.service';

// const originalST = window.setTimeout;
// window.setTimeout = function (...args) {
//   originalST(...args);
// };

// const originalST = window.setTimeout;
// window.setTimeout = function (cb, timeout, ...args) {
//   console.log('Timeout was called');
//   originalST(function () {
//     cb();
//     console.log('cb was called');
//   }, timeout, ...args);
// };

// const apiURLProvider = {
//   provide: 'API_URL',
//   useValue: 'http://localhost:3000/api/'
// };

// [1, 2, 3, 4].map().map().filter();
// Promise.resolve([1, 2, 3, 4]).then(function (x) { return x.map() });

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [apiURLProvider,
    // myServiceProvider,
    MyService,
    // { provide: MyService, useClass: MyService },
    // UserService,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
