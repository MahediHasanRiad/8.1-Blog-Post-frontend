import DashBoardLayout from "@/Layout/DashBoard-Layout";
import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAsyncThunk } from "../redux/update-user-Info.asyncThunk";

function EditProfile() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      avatar: "",
      coverImage: "",
    },
  });

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const updateProfile = async (data) => {
    try {
      await dispatch(updateUserAsyncThunk(data))
        .unwrap()
        reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashBoardLayout>
      <section className="grid md:grid-cols-2 gap-4">
        <form onSubmit={handleSubmit(updateProfile)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <InputField labelText={"Name"} {...field} />}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <InputField labelText={"Mobile"} {...field} />
            )}
          />
          <Controller
            name="avatar"
            control={control}
            render={({ field: { onChange, ref } }) => (
              <InputField
                type="file"
                labelText={"Profile Image"}
                onChange={(e) => onChange(e.target.files[0])}
                ref={ref}
              />
            )}
          />
          <Controller
            name="coverImage"
            control={control}
            render={({ field: { onChange, ref } }) => (
              <InputField
                type="file"
                labelText={"Cover Image"}
                onChange={(e) => onChange(e.target.files[0])}
                ref={ref}
              />
            )}
          />
          {error && <p className="text-red-400">{error}</p>}
          {/* save button  */}
          <section className="float-right">
            {loading ? (
              <ButtonField text="Loading..." />
            ) : (
              <ButtonField text="Save" />
            )}
          </section>
        </form>
      </section>
    </DashBoardLayout>
  );
}

export default EditProfile;
