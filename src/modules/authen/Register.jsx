import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../components/input/InputForm";
import InputContaint from "../../components/input/InputContaint";
import Label from "../../components/label/Label";
import ButtonForm from "../../components/button/ButtonForm";
import { useDispatch } from "react-redux";
import { openModalAuth, registerStart } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../config/firebaseConfigure";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
const Register = () => {
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup
      .string()
      .email("Your email is invalid")
      .required("Please enter your emailaddress"),
    username: yup.string().required("Please fill your username"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 character or greater"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const handleRegister = async (values, e) => {
    if (!values) return;
    try {
      dispatch(registerStart());
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values?.email,
        values?.password
      );
      await updateProfile(auth.currentUser, {
        displayName: values.username,
      });
      await setDoc(doc(db, "users", userCredential.user.uid), {
        displayName: values?.username,
        email: values?.email,
        role: "user",
        createAt: serverTimestamp(),
      });

      dispatch(openModalAuth(false));
      toast.success("Create account success");
    } catch (error) {
      toast.error("Create account error");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="flex flex-col gap-5 py-5">
        <InputContaint>
          <Label id="email">email address *</Label>
          <InputForm
            name="email"
            control={control}
            placeholder="enter you emaildress"
          ></InputForm>
          {errors ? (
            <span className="text-redLite">{errors?.email?.message}</span>
          ) : (
            ""
          )}
        </InputContaint>
        <InputContaint>
          <Label id="username">username *</Label>
          <InputForm
            name="username"
            control={control}
            placeholder="enter you username"
          ></InputForm>
        </InputContaint>
        {errors ? (
          <span className="text-redLite">{errors?.username?.message}</span>
        ) : (
          ""
        )}
        <InputContaint>
          <Label id="password">password *</Label>
          <InputForm
            type="password"
            name="password"
            control={control}
            placeholder="enter you password"
          ></InputForm>
          {errors ? (
            <span className="text-redLite">{errors?.password?.message}</span>
          ) : (
            ""
          )}
        </InputContaint>
      </div>
      {/* button submit */}
      <div className="flex items-center justify-between my-5">
        <ButtonForm type="submit">SIGN UP</ButtonForm>
        <span className="text-sm capitalize hover:text-yellow">
          I agree to the privacy policy *
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 text-sm text-center">or sign in with</div>
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
