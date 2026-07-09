import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./usersOperation";
import { loginUser } from "./usersOperation";
import { logOutUser } from "./usersOperation";

const initialState = {
  token: "",
  user: {
    name: "",
    email: "",
    id: null,
  },
  error: null,
  login: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.login = true;
      state.token = action.payload.accessToken;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.login = true;
      state.token = action.payload.accessToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(logOutUser.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      return initialState;
    });
    builder.addCase(logOutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.login = true;
    });
  },
});

export const userReducer = userSlice.reducer;
