import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([]).bootstrapModule(AppModule, {providers: []})
  .catch(err => console.error(err));

// class MobilePhone{
//   constructor(){
//     }
// }
// class Person{
//   phone;
//   constructor(phone) {
//     this.phone = phone;
//   }
// }
// const phone = new MobilePhone();
// const ivan = new Person(phone);
