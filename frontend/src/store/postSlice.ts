import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { CreatePostDto, Post, PostsState } from "@/shared/types/post.interface";
import {createPost,deletePost, getAllPosts} from '@/api';
import { pendingCase, rejectedCase } from "./function";





export const createPostThunk = createAsyncThunk <Post,CreatePostDto>(
  "products/createPostThunk",
  async (values, thunkAPI) => {
    try {
      const response = await createPost(values);
      return response.data.data;
    } catch (error) {
  return thunkAPI.rejectWithValue((error as Error)?.message);
    }
  }
);
export const getAllPostsThunk = createAsyncThunk<Post[],void> (
  "products/getAllPostsThunk",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPosts();
      return response.data.data;
    } catch (error) {
  return thunkAPI.rejectWithValue((error as Error)?.message);
    }
  }
);
export const deletePostThunk = createAsyncThunk<Post,string>(
  "products/deletePostThunk",
  async (id, thunkAPI) => {
    try {
      const response = await deletePost(id);
      return response.data.data;
    } catch (error) {
     return thunkAPI.rejectWithValue((error as Error)?.message);
    }
  }
);
const initialState: PostsState = {
  posts: [],
  error: null,
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPostThunk.pending, pendingCase);
    builder.addCase(createPostThunk.rejected, rejectedCase);
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.posts.push(action.payload);
    });
 builder.addCase(getAllPostsThunk.pending, pendingCase);
builder.addCase(getAllPostsThunk.rejected, rejectedCase);
builder.addCase(getAllPostsThunk.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.posts = action.payload;
});

    builder.addCase(deletePostThunk.pending, pendingCase);
    builder.addCase(deletePostThunk.rejected, rejectedCase);
    builder.addCase(deletePostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    });
  }
});

export default postsSlice.reducer;