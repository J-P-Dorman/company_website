// Queries
// ========================================
export type AuthCheckResponse = {
  authenticated: boolean;
};

export type UserDataResponse = {
  image: string;
  name: string;
  userType: string;
};

// Mutations
// ========================================
export type LogOutPayload = {
  token: string;
};

export type LogOutResponse = {
  success: boolean;
};

export type AuthenticatePayload = {
  email: string;
  password: string;
};

export type AuthenticateResponse = {
  authenticated: boolean;
  authToken: string;
};