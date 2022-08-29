import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { FooterComponent } from './footer/footer.component';
import { NextStepComponent } from './next-step/next-step.component';
import { HighlightComponent } from './highlight/highlight.component';

const component = [
  HeaderComponent,
  ResourcesComponent,
  FooterComponent,
  NextStepComponent,
  HighlightComponent,
]

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule
  ],
  exports:[...component]
})
export class PagesModule { }
