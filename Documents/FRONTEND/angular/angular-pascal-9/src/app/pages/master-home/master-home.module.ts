import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterHomeComponent } from './master-home.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ChildMemberComponent } from './about/child-member/child-member.component';
import { ChildSuperAppComponent } from './about/child-super-app/child-super-app.component';
import { ChildCoachingComponent } from './about/child-coaching/child-coaching.component';



@NgModule({
  declarations: [
    MasterHomeComponent,
    AboutComponent,
    HomeComponent,
    ChildMemberComponent,
    ChildSuperAppComponent,
    ChildCoachingComponent
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
