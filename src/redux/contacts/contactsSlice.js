import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOperation";

const contactsAdapter = createEntityAdapter()

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsAdapter.getInitialState({
    isLoading: false,
    error: null,
  }),

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      contactsAdapter.setAll(state, action.payload)
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      contactsAdapter.removeOne(state, action.payload)
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      contactsAdapter.addOne(state, action.payload)
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  contactsAdapter.getSelectors((state) => state.contacts);

export const contactsReducer = contactsSlice.reducer;
