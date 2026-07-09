import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const getAuthHeader = (token) => {
//   return { Authorization: `Bearer ${token}` };
// };

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (obj, thunkAPI) => {
    try {
      const fetch = await axios.post(
        "http://localhost:3001/register",
        {
          name: obj.name,
          email: obj.email,
          password: obj.password,
        }
      );
      const data = fetch.data;
      console.log("registration", data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (obj, thunkAPI) => {
    try {
      const fetch = await axios.post(
        "http://localhost:3001/login",
        {
          email: obj.email,
          password: obj.password,
        },
        // {
        //   headers: getAuthHeader(thunkAPI.getState().user.token),
        // }, //* не треба бо тут ще не має токена у користувача, а також можна зробити за допомогою axios
      );
      const data = fetch.data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  "users/logOutUser",
  async (_, thunkAPI) => {
    console.log("thunkAPI.getState", thunkAPI.getState());
    localStorage.removeItem("data");
    return null;
  },
);
