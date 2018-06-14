import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CardHeaderComponent } from './component/card-header/card-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
