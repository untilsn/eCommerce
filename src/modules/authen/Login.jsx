import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../components/input/InputForm";
import InputContaint from "../../components/input/InputContaint";
import Label from "../../components/label/Label";
import ButtonForm from "../../components/button/ButtonForm";
import { auth, db, provider } from "../../config/firebaseConfigure";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  openModalAuth,
} from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useNavigation } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { error } = useSelector((state) => state.auth);
  // console.log(error);
  // if (error) toast.error("wrong email or password");
  const schema = yup.object({
    email: yup
      .string()
      .email("Your email is invalid")
      .required("Please enter your emailaddress"),
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
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const handleLogin = async (values) => {
    if (!values) return;
    dispatch(loginStart());
    try {
      await signInWithEmailAndPassword(auth, values?.email, values?.password);
      toast.success("Login success");
      navigate("/");
      dispatch(openModalAuth(false));
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);

      const userRef = collection(db, "users");
      await addDoc(userRef, {
        displayName: user.user.displayName,
        email: user.user.email,
        role: "user",
        createAt: serverTimestamp(),
      });
      // window.location.href = "/";
      dispatch(openModalAuth(false));
      toast.success("login with google success!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-5 py-5">
        <InputContaint>
          <Label id="email">email *</Label>
          <InputForm
            name="email"
            control={control}
            placeholder="enter you username"
          ></InputForm>
          {errors ? (
            <span className="mt-2 text-redColor">{errors?.email?.message}</span>
          ) : (
            ""
          )}
        </InputContaint>
        <InputContaint>
          <Label id="password">password *</Label>
          <InputForm
            type="password"
            name="password"
            control={control}
            placeholder="enter you password"
          ></InputForm>
          {errors ? (
            <span className="mt-2 text-redColor">
              {errors?.password?.message}
            </span>
          ) : (
            ""
          )}
        </InputContaint>
      </div>
      {/* button submit */}
      <div className="flex items-center justify-between my-5">
        <ButtonForm type="submit">LOG IN</ButtonForm>
        <span className="text-sm capitalize hover:text-yellowColor">
          forget password
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-300"></div>
      <div className="p-4 text-sm text-center">or sign in with</div>
      <div className="flex items-center justify-center gap-20">
        <button
          onClick={() => handleLoginGoogle()}
          className="flex items-center justify-center mt-5 max-w-[300px] w-full rounded-3xl hover:border-opacity-30 gap-3 p-3 border hover:bg-gray hover:bg-opacity-5 border-gray border-opacity-20"
        >
          <span>
            <img
              src="./google.png"
              className="object-cover w-6 h-6"
              alt="google"
            />
          </span>
          <span>Login with Google</span>
        </button>
      </div>
    </form>
  );
};

export default Login;
