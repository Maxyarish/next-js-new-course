import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {  getAllPostsThunk } from "@/store/postSlice";

export function Posts() {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);
  return (
    <section>
      Post
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.name}</h3>
          <h3>{post.title}</h3>
          <p> {post.description}</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </section>
  );
}
