
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ArticleComponent } from './pages/article/article.component';
import { AboutComponent } from './pages/master-home/about/about.component';
import { HomeComponent } from './pages/master-home/home/home.component';
import { ChildAComponent } from './sample-rout/component-a/child-a/child-a.component';
import { ChildBComponent } from './sample-rout/component-a/child-b/child-b.component';
import { ComponentAComponent } from './sample-rout/component-a/component-a.component';
import { ComponentBComponent } from './sample-rout/component-b/component-b.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
    {
        path:'home', component: HomeComponent
    },{

    path: '', redirectTo: 'home' ,pathMatch: 'full'

    },{

    path: 'tentang-kami', component: AboutComponent
        
    },{

    path: 'article', component: ArticleComponent
            
    },{

    path: '**', component: NotFoundComponent

    }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }