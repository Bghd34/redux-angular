import {selectedItemsReducer} from "./selectedItems/selected-tiems.reducer";

export interface AppState {
  items: any,
  filters: any,
  selectedItems: number
};

export const reducers = {
  items: () => {},
  filters: () => {},
  selectedItems: selectedItemsReducer

};
