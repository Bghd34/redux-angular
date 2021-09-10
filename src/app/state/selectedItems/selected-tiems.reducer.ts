import {itemSelected} from "./selected-items.actions";
import {createReducer, on} from "@ngrx/store";

const initialState = 0;

export const selectedItemsReducer = createReducer(
  initialState,
  on( itemSelected, (state) => state+1 )
);
