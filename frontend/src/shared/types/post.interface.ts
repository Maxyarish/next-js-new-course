
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
  id:string;
  userId?: string;
}

export interface PostsState {
  posts: Post[];
  error: string | null;
  isLoading: boolean;
}



export interface getAllPosts{
  
}