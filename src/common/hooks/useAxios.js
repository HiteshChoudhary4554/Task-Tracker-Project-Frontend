import { BASE_URL } from "../config/db";
import axios from "axios";

const reqAxios = async (method, url, options = {}) => {
  const baseUrl = `${BASE_URL}${url}`;
  const data = await axios({
    method: method,
    url: baseUrl,
    ...options,
  });
  return data?.data?.data || null;
};

export default reqAxios;
