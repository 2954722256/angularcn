import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CardComponent} from "../component/card/card.component";
import {DemoComponentComponent} from "../demo/demo-component/demo-component.component";
import {DemoStyleComponent} from "../demo/demo-style/demo-style.component";


const routes: Routes = [
  {path: 'demoComponent', component: DemoComponentComponent}
  ,{path: 'styleComponent', component: DemoStyleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
