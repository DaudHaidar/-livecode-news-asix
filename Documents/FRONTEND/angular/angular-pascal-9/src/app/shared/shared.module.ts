import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],exports:[
    HeaderComponent,
    FooterComponent,

  ]
})
export class SharedModule { }
