import { createSelector } from "@reduxjs/toolkit";
import { selectAll } from "../contacts/contactsSlice"; //selectEntities

export const selectFind = (state) => state.find;
export const selectFilter = createSelector(
  [selectAll, selectFind],
  (items, find) => {
    console.log("items:", items);
    console.log("find:", find);
    return items.filter((contacts) =>
      contacts.name.toUpperCase().includes(find.toUpperCase()),
    );
  },
);
