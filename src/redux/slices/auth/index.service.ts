import axios from "axios";
import { IUser } from "./index.types"

const API_URL = `${process.env.REACT_APP_API_BASE_URL}auth`;

const signup = async (email: string, password: string): Promise<IUser | any> => {
  const response = await axios.post(`${API_URL}/signup`, {
    email,
    password,
  });
  if (response?.data?.data?.refreshToken) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    localStorage.setItem("refreshToken", response.data.data.refreshToken);
  }
  return response;
};

const signin = async (email: string, password: string): Promise<IUser | any> => {
  const response = await axios
    .post(`${API_URL}/login`, {
      email,
      password,
    });
  if (response?.data?.data?.refreshToken) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    localStorage.setItem("refreshToken", response.data.data.refreshToken);
  }
  return response;
};

const refreshtoken = async (refreshToken: string): Promise<IUser | any> => {
  const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken, });
  if (response?.data?.data?.refreshToken) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    localStorage.setItem("refreshToken", response.data.data.refreshToken);
  }
  return response;
};

const signout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("refreshToken");
};

const authService = {
  signup,
  signin,
  signout,
  refreshtoken,
};

export default authService;