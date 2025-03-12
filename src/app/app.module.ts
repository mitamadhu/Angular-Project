import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';
// import { HomeComponent } from './home.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
   HomeComponent
    // ProductComponent,
    // CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
