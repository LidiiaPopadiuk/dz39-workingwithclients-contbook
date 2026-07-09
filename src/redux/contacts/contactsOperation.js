import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3001";
const getAuthHeader = (token) => {
  return { Authorization: `Bearer ${token}` };
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const fetchContacts = await axios.get(
        `${baseUrl}/contacts?userId=${thunkAPI.getState().user.user.id}`,
        {
          headers: getAuthHeader(thunkAPI.getState().user.token),
        },
      );
      const data = fetchContacts.data;
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const remContact = await axios.delete(
        `${baseUrl}/contacts/${contactId}`,
        {
          headers: getAuthHeader(thunkAPI.getState().user.token),
        },
      );
      const data = remContact.data;
      console.log(data);

      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const addContact = await axios.post(
        `${baseUrl}/contacts`,
        {
          ...contactData,
          userId: thunkAPI.getState().user.user.id,
        },
        {
          headers: getAuthHeader(thunkAPI.getState().user.token),
        },
      );
      const data = addContact.data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
