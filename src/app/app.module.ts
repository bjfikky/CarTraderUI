import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ListingsComponent } from './components/listing/listings/listings.component';
import { LoginComponent } from './components/login-signup/login/login.component';
import { SignupComponent } from './components/login-signup/signup/signup.component';
import { ListingDetailComponent } from './components/listing/listing-detail/listing-detail.component';
import { ListingFormComponent } from './components/listing/listing-form/listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginSignupComponent,
    ListingsComponent,
    LoginComponent,
    SignupComponent,
    ListingDetailComponent,
    ListingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
