import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CardHeaderComponent } from './component/card-header/card-header.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { DemoComponentComponent } from './demo/demo-component/demo-component.component';
import { DemoStyleComponent } from './demo/demo-style/demo-style.component';
import { DemoBindComponent } from './demo/demo-bind/demo-bind.component';
import { DemoInputComponent } from './demo/demo-input/demo-input.component';
import { CardFooterComponent } from './component/card-footer/card-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    DemoComponentComponent,
    DemoStyleComponent,
    DemoBindComponent,
    DemoInputComponent,
    CardFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
