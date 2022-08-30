
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ChildAComponent } from './sample-rout/component-a/child-a/child-a.component';
import { ChildBComponent } from './sample-rout/component-a/child-b/child-b.component';
import { ComponentAComponent } from './sample-rout/component-a/component-a.component';
import { ComponentBComponent } from './sample-rout/component-b/component-b.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [{
    path: 'component-a', component: ComponentAComponent, children:[
        {
        path: 'child-a', component: ChildAComponent
        },
        {
            path: 'child-b/:id', component: ChildBComponent
        }
    ]
},{
    path: 'component-b', component: ComponentBComponent
},{
    path: '', redirectTo: 'component-a' ,pathMatch: 'full'
},{
    path: '**', component: NotFoundComponent
}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }