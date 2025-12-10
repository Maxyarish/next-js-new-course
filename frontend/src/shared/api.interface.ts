export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginDto {
  email: string;
  password: string;
}
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    updatedAt: string;
  };
}
