import React from "react";
import styles from "./Admin.module.scss";
import { useAppDispatch } from "@/store";
import type { DeletePostDto, Post } from "@/shared/types/post.interface";
import { deletePostThunk } from "@/store/postSlice";

export function PostRow({_id,name,title,description,createdAt}: Post) {
  const dispatch = useAppDispatch();

  const handleDelete = async (id: string) => {
    try {
      const deleteDto: DeletePostDto = { id };
      await dispatch(deletePostThunk(deleteDto)).unwrap();
      <h1>Успішно!</h1>;
    } catch (error) {
      <h1>Помилка при видаленні поста'!</h1>;
    }
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{new Date(createdAt).toLocaleDateString()}</td>
      <td>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
        ></button>
      </td>
    </tr>
  );
}

export default PostRow;
