import { UserModel } from "../domain/UserModel";
import { httpApi } from "./http.api";

export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface SecurityCodePayload {
  code: string;
}

export interface NewPasswordData {
  newPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshClient {
  client_id: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface LoginResponse {
  access: string;
  refresh: any;
  user: UserModel;
  user_id: number;
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("auth/token/", { ...loginPayload })
    .then(({ data }: any) => data);

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  httpApi
    .post<undefined>("signUp", { ...signUpData })
    .then(({ data }: any) => data);

export const refreshToken = (
  refreshToken: RefreshTokenRequest
): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("CmsAuth?callType=persistent", { ...refreshToken })
    .then(({ data }: any) => data);

export const setClientToken = (request: {
  client_id: string;
}): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("CmsAuth?callType=set_client_of_account", {
      ...request,
    })
    .then(({ data }: any) => data);

export const resetPassword = (
  resetPasswordPayload: ResetPasswordRequest
): Promise<undefined> =>
  httpApi
    .post<undefined>("forgotPassword", { ...resetPasswordPayload })
    .then(({ data }: any) => data);

export const verifySecurityCode = (
  securityCodePayload: SecurityCodePayload
): Promise<undefined> =>
  httpApi
    .post<undefined>("verifySecurityCode", { ...securityCodePayload })
    .then(({ data }: any) => data);

export const setNewPassword = (
  newPasswordData: NewPasswordData
): Promise<undefined> =>
  httpApi
    .post<undefined>("setNewPassword", { ...newPasswordData })
    .then(({ data }: any) => data);

export const googleLogin = (googleAuthData: any): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("users/google/", { ...googleAuthData })
    .then(({ data }: any) => data);

export const microsoftLogin = (
  microsoftReceivedCode: any
): Promise<LoginResponse> =>
  httpApi
    .get<LoginResponse>("authorize_callback/?code=" + microsoftReceivedCode)
    .then(({ data }: any) => data);
