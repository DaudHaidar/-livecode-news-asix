import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SampleSampleComponent } from './sample/sample-sample/sample-sample.component';
import { SharedModule } from './shared/shared.module';
import { SampleRoutModule } from './sample-rout/sample-rout.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SampleSampleComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    SampleRoutModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
