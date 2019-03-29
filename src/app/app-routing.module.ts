import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {RandomDogComponent} from './views/random-dog/random-dog.component';
import {AboutComponent} from './views/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'mama', component: RandomDogComponent},
  {path: 'random/:name', component: RandomDogComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
