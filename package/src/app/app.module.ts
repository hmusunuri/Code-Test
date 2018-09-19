import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondsToDateTimePipe } from './seconds-to-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecondsToDateTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
