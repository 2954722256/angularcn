import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DodoReadComponent } from './dodo-read/dodo-read.component';

@NgModule({
  declarations: [
    AppComponent,
    DodoReadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
