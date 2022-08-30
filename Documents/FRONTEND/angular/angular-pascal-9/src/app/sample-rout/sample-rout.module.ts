import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { RouterModule } from '@angular/router';
import { ChildAComponent } from './component-a/child-a/child-a.component';




@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
    
  ], exports:[
    ComponentAComponent,
    ComponentBComponent
  ]
})
export class SampleRoutModule { }
