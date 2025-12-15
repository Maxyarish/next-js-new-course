
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
