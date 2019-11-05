import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingsComponent} from './components/listing/listings/listings.component';


const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
