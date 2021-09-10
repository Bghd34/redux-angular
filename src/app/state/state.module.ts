import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment.prod";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({  /*  on configure le store en lui passant plusieurs reducers ...    */
      filters: () => {},
      selectedItems: () => {},
      items: () => {}
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ]
})
export class StateModule { }
