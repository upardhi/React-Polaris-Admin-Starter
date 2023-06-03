import {
  createAction,
  createAsyncThunk,
  createSlice,
  PrepareAction,
} from "@reduxjs/toolkit";

import { persistUser, readUser } from "services/localStorage.service";

import { authorizedUser } from "api/candidate.api";

export interface UserState {
  user: any | null;
  cred?: boolean | null;
}

const initialState: UserState = {
  user: readUser(),
  cred: null,
};

export const setUser = createAction<PrepareAction<any>>(
  "user/setUser",
  (newUser) => {
    persistUser(newUser);
    return {
      payload: newUser,
    };
  }
);

export const setUserIntegrationCred = createAsyncThunk(
  "user/setUserIntegrationCred",
  (payload, { dispatch }) => {
    return authorizedUser().then((res: any) => {
      return res.creds;
    });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(setUserIntegrationCred.fulfilled, (state, action) => {
      state.cred = action.payload;
    });
  },
});

export default userSlice.reducer;
