import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_API_TARGET;
const apiPrefix = import.meta.env.VITE_API_PREFIX || "api";

// Create Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: `${baseUrl}/${apiPrefix}/`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // comprehensive error handling logic can go here
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Generic API Wrapper
 * All methods return data directly (not AxiosResponse) for cleaner consumption.
 */
export const api = {
  get: async <T>(url: string, params?: object): Promise<T> => {
    const response = await apiClient.get<T>(url, { params });
    return response.data;
  },
  post: async <T>(url: string, data?: object): Promise<T> => {
    const response = await apiClient.post<T>(url, data);
    return response.data;
  },
  put: async <T>(url: string, data?: object): Promise<T> => {
    const response = await apiClient.put<T>(url, data);
    return response.data;
  },
  delete: async <T>(url: string): Promise<T> => {
    const response = await apiClient.delete<T>(url);
    return response.data;
  },
};

export default apiClient;
