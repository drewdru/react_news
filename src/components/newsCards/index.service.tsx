import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}news`;

export const getNews = async (params) => {
  const getParams = new URLSearchParams(params).toString();
  return await axios.get(`${API_URL}/?${getParams}`);
};
