import axios from "axios";

const reqAxios = async (method, url, options = {}) => {
  const baseUrl = `${import.meta.env.VITE_API_URL}${url}`;
  const data = await axios({
    method: method,
    url: baseUrl,
    ...options,
  });
  return data?.data?.data || null;
};

export default reqAxios;
