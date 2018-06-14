import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CardComponent} from "../component/card/card.component";
import {DemoComponentComponent} from "../demo/demo-component/demo-component.component";


const routes: Routes = [
  {path: 'demoComponent', component: DemoComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
