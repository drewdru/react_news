export interface IUser {
  email?: string;
  refreshToken?: string;
};

export interface IAuthUser {
  email: string;
  password: string;
}


export interface IAuthRefreshToken {
  refreshToken?: string;
}

export interface IAuthUserResponse {
  data?: any;
}