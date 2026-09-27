import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getPortfolio = async () => {
  const res = await api.get("/portfolio");
  return res.data;
};

export const updatePortfolio = async (data) => {
  const res = await api.put("/portfolio", data);
  return res.data;
};

export default api;
