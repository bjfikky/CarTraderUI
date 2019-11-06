import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingsComponent} from './components/listing/listings/listings.component';
import {LoginSignupComponent} from './components/login-signup/login-signup.component';
import {ListingDetailComponent} from './components/listing/listing-detail/listing-detail.component';
import {ListingFormComponent} from './components/listing/listing-form/listing-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/edit/:listingId', component: ListingFormComponent },
  { path: 'listings/new', component: ListingFormComponent },
  { path: 'listings/:listingId', component: ListingDetailComponent },
  { path: 'account', component: LoginSignupComponent },
  { path: '**', component: ListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
