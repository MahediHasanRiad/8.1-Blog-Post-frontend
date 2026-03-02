import DashBoardLayout from "@/Layout/DashBoard-Layout";
import React from "react";
import ArticleBody from "../components/tinyMCE.editor";
import InputField from "@/Shared/Components/input";
import { useForm, Controller } from "react-hook-form";
import ButtonField from "@/Shared/Components/button";
import { useDispatch, useSelector } from "react-redux";
import { addArticleAsyncThunk } from "../redux/add-article.asyncThunk";


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


  const { isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const onSubmitData = async (data) => {
  try {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("coverImage", data.coverImage); 

    await dispatch(addArticleAsyncThunk(formData)).unwrap();
    reset();

  } catch (e) {
    console.log(e)
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
            render={({ field: {onChange, ref} }) => (
              <InputField
                type="file"
                ref={ref}
                onChange={(e) => onChange(e.target.files[0])}
                labelText={"Cover Image"}
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

          {isLoading ? (
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
