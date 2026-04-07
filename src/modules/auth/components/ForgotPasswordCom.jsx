import Button from "../../../common/components/Button.jsx";
import Input from "../../../common/components/Input.jsx";
import Column from "../../../common/components/Column.jsx";
import { useForm, Controller } from "react-hook-form";
import User from "../services/user.service.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPasswordCom() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const form1 = useForm();
  const form2 = useForm();

  const onForgot = async (data) => {
    setLoading(true);
    const msg = await User.forgotPassword(data);
    setLoading(false);
    if (msg) {
      alert("OTP send your email...")
    }
  };

  const onNewPassword = async (data) => {
    setLoading(true);
    const isPasswordUpdated = await User.newPassword(data);
    if (isPasswordUpdated) {
      navigate("/auth/sign-in");
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
        <Column heading={"Forgot Password"}>
          <div className="flex flex-col py-5 gap-10">
            <div className="border border-gray-700 rounded p-2">
              <form
                className="flex justify-between gap-2 "
                onSubmit={form1.handleSubmit(onForgot)}
              >
                <div className="w-full">
                  <Controller
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    }}
                    control={form1.control}
                    render={({ field }) => {
                      return (
                        <Input
                          isErr={form1.formState.errors.email ? true : false}
                          placeholder="Enter your email"
                          type="email"
                          {...field}
                        />
                      );
                    }}
                  />
                </div>
                <div className="text-center w-36.25">
                  <Button text={"Send OTP"} color={"blue"} />
                </div>
              </form>
            </div>
            <div className="border border-gray-700 rounded p-2">
              <form
                className="grid gap-4"
                onSubmit={form2.handleSubmit(onNewPassword)}
              >
                <div className="w-full">
                  <Controller
                    name="resetToken"
                    rules={{
                      required: "OTP is required",
                    }}
                    control={form2.control}
                    render={({ field }) => {
                      return (
                        <Input
                          isErr={form2.formState.errors.resetToken ? true : false}
                          placeholder="Enter OTP "
                          type="text"
                          {...field}
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  <Controller
                    name="newPassword"
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
                    control={form2.control}
                    render={({ field }) => {
                      return (
                        <Input
                          isErr={form2.formState.errors.newPassword ? true : false}
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      );
                    }}
                  />
                </div>

                <div className="text-center">
                  <Button text={"Verify OTP"} color={"green"} />
                </div>
              </form>
            </div>
          </div>
        </Column>
      </div>
    );
}

export default ForgotPasswordCom;
