import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerAsyncThunk } from "../register.asychThunk";


function Register() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      avatar: "",
      coverImage: "",
      password: "",
      mobile: "",
      role: "",
      status: "",
    },
  });

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSub = (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("avatar", data.avatar);
      formData.append("coverImage", data.coverImage);
      formData.append("password", data.password);
      formData.append("mobile", data.mobile);
      formData.append("role", data.role ? data.role : "USER");
      formData.append("status", data.status ? data.status : "Pending");

      dispatch(registerAsyncThunk(formData))
        .unwrap()
        .then(() => {
          reset();
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-1/4 flex min-h-screen mx-auto items-center">
      <section className="w-full border rounded px-4 py-6">
        <form className="space-y-4" onSubmit={handleSubmit(onSub)}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Name are required !!!",
            }}
            render={({ field }) => (
              <InputField
                labelText={"Name"}
                placeholder={"Enter your name..."}
                {...field}
              />
            )}
          />
          {errors.name && <p className="text-red-400">Name are required !</p>}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email are required !!!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email !!!",
              },
            }}
            render={({ field }) => (
              <InputField
                labelText={"Email"}
                placeholder={"Enter your email..."}
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          {errors.email && <p className="text-red-400">Email are required !</p>}
          <Controller
            name="avatar"
            control={control}
            rules={{
              required: "Profile Image are required !!!",
            }}
            // we should distructure {field}, file doesnot have value,
            // and we should  modify onChange
            render={({ field: { onChange, ref } }) => (
              <InputField
                labelText={"Profile Image"}
                type="file"
                ref={ref}
                onChange={(e) => onChange(e.target.files[0])}
                error={errors.avatar?.message}
              />
            )}
          />
          {errors.avatar && (
            <p className="text-red-400">Profile Image are required !</p>
          )}
          <Controller
            name="coverImage"
            control={control}
            render={({ field: { onChange, ref } }) => (
              <InputField
                labelText={"Cover Image"}
                type="file"
                ref={ref}
                onChange={(e) => onChange(e.target.files[0])}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password Required !!!",
            }}
            render={({ field }) => (
              <InputField
                labelText={"Password"}
                placeholder={"******"}
                {...field}
              />
            )}
          />
          {errors.password && <p className="text-red-400">Password Required</p>}
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "Mobile No. Required !!!",
              pattern: {
                value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                message: "Invalid mobile number... must add 88 before number",
              },
            }}
            render={({ field }) => (
              <InputField
                labelText={"Mobile No."}
                placeholder={"88015*********"}
                value={88}
                {...field}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-400">Mobile No Required</p>
          )}

          {loading ? (
            <ButtonField text="Loading..." className="w-full" />
          ) : (
            <ButtonField text="Register" className="w-full" />
          )}
          {error && <p className="text-red-400">{error}</p>}

          {/* login  */}
          <p className="text-gray-400 text-sm text-center">
            already registered ?{" "}
            <Link className="text-secondary-0" to={"/login"}>
              log-in
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Register;
