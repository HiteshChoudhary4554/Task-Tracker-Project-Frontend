import Button from "../../../common/components/Button.jsx";
import Input from "../../../common/components/Input.jsx";
import Column from "../../../common/components/Column.jsx";
import { useForm, Controller } from "react-hook-form";
import User from "../services/user.service.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rawNull } from "../authSlice.js";

function VerifyEmailCom() {
  const dispatch = useDispatch();
  const rawUserData = useSelector((state) => state.auth.rawUser);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onEmailVerify = async (data) => {
    setLoading(true);
    const verifiedUser = await User.verifyEmail(data);
    if (verifiedUser) {
      const user = await User.login(rawUserData);
      if (user) {
        dispatch(rawNull());
        navigate("/", { replace: true });
      } else {
        navigate("/auth/sign-in");
      }
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
        <Column heading={"Verify Email"}>
          <div className="border border-gray-700 rounded p-2">
            <form className="grid gap-4" onSubmit={handleSubmit(onEmailVerify)}>
              <div className="w-full">
                <Controller
                  name="verificationToken"
                  rules={{
                    required: "OTP is required",
                  }}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        isErr={errors.resetToken ? true : false}
                        placeholder="Enter OTP "
                        type="text"
                        {...field}
                      />
                    );
                  }}
                />
              </div>

              <div className="text-center">
                <Button text={"Verify Email"} color={"green"} />
              </div>
            </form>
          </div>
        </Column>
      </div>
    );
}

export default VerifyEmailCom;
