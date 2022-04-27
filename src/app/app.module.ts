import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ContactModule,
    AboutModule,
    HttpClientModule,
    FlexLayoutModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

