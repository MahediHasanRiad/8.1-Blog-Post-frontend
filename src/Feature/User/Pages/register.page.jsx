import ButtonField from "@/Shared/Components/button";
import InputField from "@/Shared/Components/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router";

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
      password: "",
      mobile: "",
      role: "",
      status: "",
    },
  });

  const onSub = (data) => {
    console.log(data);
    reset();
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
                message: "Invalid mobile number...",
              },
            }}
            render={({ field }) => (
              <InputField
                labelText={"Mobile No."}
                placeholder={"015*********"}
                {...field}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-400">Mobile No Required</p>
          )}
          

          <ButtonField text="Register" className="w-full" />

          {/* login  */}
          <p className="text-gray-400 text-sm text-center">already registered ? <Link className="text-secondary-0" to={'/login'}>log-in</Link></p>
        </form>
      </section>
    </section>
  );
}

export default Register;
