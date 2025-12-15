export interface Post {
  _id: string;
  name: string;
  title: string;
  description: string;
  createdAt: string;
  userId?: string;
}

export interface CreatePostDto {
  name: string;
  title: string;
  description: string;
  createdAt: Date;
  id?: string;
  userId?: string;
}
export interface DeletePostDto {
  id: string;
}
export interface PostsState {
  posts: Post[];
  error: string | null;
  isLoading: boolean;
}
export interface PostForm {
  name: string;
  title: string;
  description: string;
  createdAt?: Date;
}
