import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ResetPasswordRequest,
  login,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
  RefreshClient,
  setClientToken,
  googleLogin,
  microsoftLogin,
} from "api/auth.api";
import { setUser } from "store/slices/userSlice";
import {
  deleteToken,
  deleteUser,
  persistToken,
  readToken,
} from "services/localStorage.service";

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (loginPayload: LoginRequest, { dispatch }) =>
    login(loginPayload).then((res) => {
      dispatch(setUser(res.user));
      persistToken(res.access, res.refresh);
      return {
        token: res.access,
      };
    })
);

export const doGoogleLogin = createAsyncThunk(
  "auth/doGoogleLogin",
  async (loginPayload: any, { dispatch }) =>
    googleLogin(loginPayload).then((res) => {
      dispatch(setUser(res.user));
      persistToken(res.access, res.refresh);
      return {
        token: res.access,
      };
    })
);

export const doMicrosoftLogin = createAsyncThunk(
  "auth/doMicrosoftLogin",
  async (loginPayload: any, { dispatch }) =>
    microsoftLogin(loginPayload.code).then((res) => {
      dispatch(setUser(res.user));
      persistToken(res.access, res.refresh);
      return {
        token: res.access,
      };
    })
);

export const doSetClient = createAsyncThunk(
  "auth/doSetClient",
  async (clientPayload: RefreshClient, { dispatch }) =>
    setClientToken(clientPayload).then((res) => {
      dispatch(setUser(res.user));

      persistToken(res.access, res.refresh);

      return res.access;
    })
);

export const doSignUp = createAsyncThunk(
  "auth/doSignUp",
  async (signUpPayload: SignUpRequest) => signUp(signUpPayload)
);

export const doResetPassword = createAsyncThunk(
  "auth/doResetPassword",
  async (resetPassPayload: ResetPasswordRequest) =>
    resetPassword(resetPassPayload)
);

export const doVerifySecurityCode = createAsyncThunk(
  "auth/doVerifySecurityCode",
  async (securityCodePayload: SecurityCodePayload) =>
    verifySecurityCode(securityCodePayload)
);

export const doSetNewPassword = createAsyncThunk(
  "auth/doSetNewPassword",
  async (newPasswordData: NewPasswordData) => setNewPassword(newPasswordData)
);

export const doLogout = createAsyncThunk(
  "auth/doLogout",
  (payload, { dispatch }) => {
    deleteToken();
    deleteUser();
    dispatch(setUser(null));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = "";
    });
  },
});

export default authSlice.reducer;
