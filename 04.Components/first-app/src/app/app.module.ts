import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MomeComponent } from './mome/mome.component';
import { NameInputComponent } from './name-input/name-input.component';
import { NameInputSecondComponent } from './name-input-second/name-input-second.component';
import { NameInputThirdComponent } from './name-input-third/name-input-third.component';
import { NameInputFourthComponent } from './name-input-fourth/name-input-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MomeComponent,
    NameInputComponent,
    NameInputSecondComponent,
    NameInputThirdComponent,
    NameInputFourthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
