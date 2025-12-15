import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from "@/store";
import { createPostThunk } from "@/store/postSlice";
import { type PostForm } from "@/shared/types/post.interface";

export function PostForm() {
  const dispatch = useAppDispatch();

  const initialValues: PostForm = {
    name: "",
    title: "",
    description: "",
  };

  const onSubmit = (values: PostForm) => {
    const data = {
      //   name: values.name,
      //   title: values.title,
      //   description: values.description,
      ...values,
      createdAt: new Date(),
    };
    dispatch(createPostThunk(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      //   validationSchema={createPostSchema}
    >
      {() => (
        <Form>
          <label>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" />
          </label>
          <label>
            <Field name="title" placeholder="Title" />
            <ErrorMessage name="title" />
          </label>

          <label>
            <Field as="textarea" name="description" placeholder="Description" />
            <ErrorMessage name="description" />
          </label>

          <label>
            <h3>Release Date</h3>
            <Field name="createdAt" type="date" />
            <ErrorMessage name="createdAt" />
          </label>
          <div>
            <button type="submit">Create </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PostForm;
