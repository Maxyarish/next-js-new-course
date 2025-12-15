"use client";
import type { IMain } from "@/shared/types/main.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { getAllPostsThunk } from "@/store/postSlice";
import type { Post } from "@/shared/types/post.interface";
import PostRow from "@/components/Forms/PostRow";
import { PostForm } from "@/components/Forms/PostForm";

interface Props {
  main: IMain;
}
export function Main({ main }: Props) {
  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector((state) => state.post);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    if (posts?.length === 0) {
      dispatch(getAllPostsThunk());
    }
  }, [dispatch, posts?.length]);

  const handleCreate = () => {
    setIsCreating(true);
    setSelectedPost(null);
  };

  const cancelForm = () => {
    setIsCreating(false);
  };
  const showPosts = (post: Post) => <PostRow key={post._id} {...post} />;
  return (
    <div className="p-5">
      <h1 className="text-3xl">{main.main}</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <p>{main.paraghaf}</p>
      <div>
          <div>
          {isCreating ? (
            <button onClick={cancelForm}>Cancel</button>
          ) : (
            <button onClick={handleCreate}>Create new post</button>
          )}
        </div>
        <h1>Posts</h1>
        {isCreating && <PostForm {...(selectedPost || {})} {...cancelForm} />}
        <tbody>{posts?.map(showPosts)}</tbody>
      </div>
    </div>
  );
}
