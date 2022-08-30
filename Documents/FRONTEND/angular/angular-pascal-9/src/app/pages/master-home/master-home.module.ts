import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterHomeComponent } from './master-home.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MasterHomeComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MasterHomeComponent,
    AboutComponent,
    HomeComponent
  ]
})
export class MasterHomeModule { }
