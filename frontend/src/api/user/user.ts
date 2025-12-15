
import { CONSTANTS } from "@/constants";
import type {
  ApiResponse,
  AuthResponse,
  
} from "@/shared/types/api.interface";
import type { LoginDto, RegisterDto } from "@/shared/types/user.interface";
import axios, { type AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (
  values: RegisterDto
): Promise<AxiosResponse<ApiResponse<AuthResponse>>> =>
  apiClient.post("/users/register", values);

export const loginUser = (
  values: LoginDto
): Promise<AxiosResponse<ApiResponse<AuthResponse>>> =>
  apiClient.post("/users/login", values);

