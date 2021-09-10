import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StateModule} from "./state/state.module";
import {ItemComponent} from "./components/items/item/item.component";
import {CartItemComponent} from "./components/cart-items/cart-item/cart-item.component";


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
