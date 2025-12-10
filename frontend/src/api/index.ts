import type {
  ApiResponse,
  AuthResponse,
  LoginDto,
  RegisterDto,
} from "@/shared/api.interface";
import type { CreatePostDto, Post } from "@/shared/types/post.interface";
import axios, { type AxiosResponse } from "axios";
import queryString from "query-string";

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

export const createPost = (
  values: CreatePostDto
): Promise<AxiosResponse<ApiResponse<Post>>> =>
  apiClient.post("/posts", values);

export const getAllPosts = (): Promise<AxiosResponse<ApiResponse<Post[]>>> =>
  apiClient.post("/posts");

export const deletePost = (
  id: string
): Promise<AxiosResponse<ApiResponse<Post>>> => apiClient.get(`/posts/${id}`);
