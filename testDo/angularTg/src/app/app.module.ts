import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CardHeaderComponent } from './component/card-header/card-header.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { DemoComponentComponent } from './demo/demo-component/demo-component.component';
import { DemoStyleComponent } from './demo/demo-style/demo-style.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    DemoComponentComponent,
    DemoStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
