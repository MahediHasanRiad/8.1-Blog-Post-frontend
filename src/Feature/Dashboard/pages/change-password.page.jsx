import DashBoardLayout from "@/Layout/DashBoard-Layout";
import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAsyncThunk } from "../redux/changePassword.asyncThunk";

function ChangePassword() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      oldPass: "",
      newPass: "",
    },
  });

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const updatePassword = (data) => {
    try {
      dispatch(changePasswordAsyncThunk(data));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashBoardLayout>
      <section>
        <form onSubmit={handleSubmit(updatePassword)}>
          <Controller
            name="oldPass"
            control={control}
            rules={{
              required: "old password required",
            }}
            render={({ field }) => (
              <InputField
                labelText={"Old Password"}
                placeholder={"*********"}
                {...field}
              />
            )}
          />
          <Controller
            name="newPass"
            control={control}
            rules={{
              required: "new password required",
            }}
            render={({ field }) => (
              <InputField
                labelText={"New Password"}
                placeholder={"*********"}
                {...field}
              />
            )}
          />

          {loading ? (
            <ButtonField text="Loading..." className="float-right" />
          ) : (
            <ButtonField text="Save" className="float-right" />
          )}

          {error && <p className="text-red-400">{error}</p>}
        </form>
      </section>
    </DashBoardLayout>
  );
}

export default ChangePassword;
