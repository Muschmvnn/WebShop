import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppIndexComponent } from './index-component/index.component';

const routes: Routes = [
    { path: 'index', component: AppIndexComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
