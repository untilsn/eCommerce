import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../components/input/InputForm";
import InputContaint from "../../components/input/InputContaint";
import Label from "../../components/label/Label";
import ButtonForm from "../../components/button/ButtonForm";

const Register = () => {
  // const schema = yup.object({
  //   email: yup
  //     .string()
  //     .email("Your email is invalid")
  //     .required("Please enter your emailaddress"),
  //   password: yup
  //     .string()
  //     .min(8, "Your password must be at least 8 character or greater"),
  // });

  const { control, handleSubmit } = useForm({
    defaultValues: "",
    mode: "onSubmit",
  });
  const handleLogin = (values) => {
    // if (!isValid) return;
    // try {
    //   signInWithEmailAndPassword(auth, values.email, values.password);
    //   toast.success(`welcome back ${userInfo.fullname}`);
    //   onClose();
    // } catch (error) {
    //   error ? toast.error("Invalid email or password") : "";
    // }
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-5 py-5">
        <InputContaint>
          <Label id="email">username or emailaddress *</Label>
          <InputForm
            name="email"
            control={control}
            placeholder="enter you username"
          ></InputForm>
        </InputContaint>
        <InputContaint>
          <Label id="password">password *</Label>
          <InputForm
            type="password"
            name="password"
            control={control}
            placeholder="enter you password"
          ></InputForm>
        </InputContaint>
      </div>
      {/* button submit */}
      <div className="flex items-center justify-between mb-5">
        <ButtonForm>SIGN UP</ButtonForm>
        <span className="text-lg capitalize hover:text-yellow">
          I agree to the privacy policy *
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 text-lg text-center">or sign in with</div>
      <div className="flex items-center justify-between gap-20">
        <div className="flex items-center justify-center w-full gap-3 p-3 border hover:bg-gray hover:bg-opacity-10 border-gray">
          <span>
            <img
              src="./google.png"
              className="object-cover w-6 h-6"
              alt="google"
            />
          </span>
          <span>Login with Google</span>
        </div>
        <div className="flex items-center justify-center w-full gap-3 p-3 border hover:bg-gray hover:bg-opacity-10 border-gray">
          <span>
            <img
              src="./google.png"
              className="object-cover w-6 h-6"
              alt="google"
            />
          </span>
          <span>Login with Google</span>
        </div>
      </div>
    </form>
  );
};

export default Register;
