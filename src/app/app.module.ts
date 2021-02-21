import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFaqComponent } from './components/test-faq';
import { TestFaqComponent2 } from "./components/test-faq-2";

@NgModule({
  declarations: [
    AppComponent,
    TestFaqComponent,
    TestFaqComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
