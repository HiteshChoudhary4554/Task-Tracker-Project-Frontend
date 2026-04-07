import React, { useState } from "react";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import Column from "../../../common/components/Column.jsx";
import { useForm, Controller } from "react-hook-form";
import User from "../services/user.service.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { rawData } from "../authSlice.js";

function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const user = await User.register(data);
    if (user) {
      dispatch(rawData({ email: data.email, password: data.password }));
      navigate("/auth/verify-email", { replace: true });
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className=" flex-1 flex justify-center items-center">
        <h2>..loading</h2>
      </div>
    );
  } else
    return (
      <div className="h-full">
        <Column heading={"Register"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div>
                <Controller
                  name="name"
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 5,
                      message: "Name must be at least 5 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name must be less than 20 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.name ? true : false}
                        placeholder="Enter your name"
                        type="text"
                        {...field}
                      />
                    );
                  }}
                />
              </div>
              <div>
                <Controller
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.email ? true : false}
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                      />
                    );
                  }}
                />
              </div>
              <div>
                <Controller
                  name="password"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 8,
                      message: "Password must be less than 8 characters",
                    },
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.password ? true : false}
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    );
                  }}
                />
              </div>
              <div>
                <Input
                  isErr={errors.avatar ? true : false}
                  placeholder="Enter your avatar"
                  type="file"
                  {...register("avatar", {
                    required: "Avatar is required",
                  })}
                />
              </div>
              <div className="text-center">
                <Button text={"Submit"} color={"blue"} />
              </div>
            </div>
          </form>
        </Column>
      </div>
    );
}

export default Register;
