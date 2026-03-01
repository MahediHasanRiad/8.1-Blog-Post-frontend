import DashBoardLayout from "@/Layout/DashBoard-Layout";
import React from "react";
import ArticleBody from "../components/article-body";
import InputField from "@/Shared/Components/input";
import { useForm, Controller } from "react-hook-form";
import ButtonField from "@/Shared/Components/button";
import { useDispatch, useSelector } from "react-redux";
import { addArticleAsyncThunk } from "../redux/add-article.asyncThunk";
import { toast } from "sonner";

function AddNewArticle() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      coverImage: "",
      body: "",
    },
  });

  const { user } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const onSubmitData = async (data) => {
  try {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("coverImage", data.coverImage); // file

    await dispatch(addArticleAsyncThunk(formData)).unwrap();

    toast.success("Successfully created!!!");
    reset();

  } catch (e) {
    toast.error(e);
  }
};

  return (
    <DashBoardLayout>
      <section>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title are required !!!",
            }}
            render={({ field }) => (
              <InputField
                labelText={"Title"}
                placeholder={"Title name..."}
                {...field}
              />
            )}
          />
          {errors.title && <p className="text-red-400">Title are required !</p>}
          <Controller
            name="coverImage"
            control={control}
            rules={{
              required: "CoverImage are required !",
            }}
            render={({ field }) => (
              <InputField
                type="file"
                onChange={(e) => e.target.files[0]}
                labelText={"Cover Image"}
                {...field}
              />
            )}
          />
          {errors.coverImage && (
            <p className="text-red-400">Cover Image are required !!!</p>
          )}

          <Controller
            name="body"
            control={control}
            rules={{
              required: "article body required !!!",
            }}
            render={({ field }) => <ArticleBody {...field} />}
          />

          {loading ? (
            <ButtonField text="Loading..." className="float-right mt-6" />
          ) : (
            <ButtonField text="Publish" className="float-right mt-6" />
          )}
        </form>
      </section>
    </DashBoardLayout>
  );
}

export default AddNewArticle;
