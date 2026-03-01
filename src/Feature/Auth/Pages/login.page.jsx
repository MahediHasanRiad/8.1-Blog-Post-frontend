import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginAsyncThunk } from "../login.asyncThunk";

function LogIn() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, error, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSub = (data) => {
    dispatch(loginAsyncThunk(data))
    reset();
  };

  // navigate in home page 
  useEffect(() => {
    if(user && token){
      navigate('/')
    }
  }, [user, token, navigate])

  return (
    <section className="w-1/4 flex min-h-screen mx-auto items-center">
      <section className="w-full border rounded px-4 py-6">
        <form className="space-y-4" onSubmit={handleSubmit(onSub)}>
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

          {loading ? (
            <ButtonField text="Loading..." className="w-full" />
          ) : (
            <ButtonField text="Login" className="w-full" />
          )}
          {/* error message  */}
          {error && <p className="text-red-400">{error}</p>}

          {/* login  */}
          <p className="text-gray-400 text-sm text-center">
            new user ?{" "}
            <Link className="text-secondary-0" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default LogIn;
