import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './master-home/about/about.component';
import { PagesComponent } from './pages.component';
import { MasterHomeModule } from './master-home/master-home.module';
import { ArticleComponent } from './article/article.component';


const component = [
  AboutComponent
]

@NgModule({
  declarations: [
    PagesComponent,
    ArticleComponent
],
  imports: [
    CommonModule,
    MasterHomeModule
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
