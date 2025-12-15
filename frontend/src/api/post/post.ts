import { CONSTANTS } from "@/constants";
import type {
  ApiResponse
} from "@/shared/types/api.interface";
import type {
  CreatePostDto,
  DeletePostDto,
  Post,
} from "@/shared/types/post.interface";
import axios, { type AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: CONSTANTS.BASE_URL
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const createPost = (
  values: CreatePostDto
): Promise<AxiosResponse<ApiResponse<Post>>> =>
  apiClient.post("/posts", values);

export const getAllPosts = (): Promise<AxiosResponse<ApiResponse<Post[]>>> =>
  apiClient.get("/posts");

export const deletePost = (
  id: DeletePostDto
): Promise<AxiosResponse<ApiResponse<Post>>> =>
  apiClient.delete(`/posts/${id}`);
