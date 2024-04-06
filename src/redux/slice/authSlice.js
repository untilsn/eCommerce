import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebaseConfigure";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      uid: null,
      username: null,
    },
    error: null,
    isLoading: false,
    authModal: false,
  },
  reducers: {
    // open modal
    openModalAuth: (state, action) => {
      return {
        ...state,
        authModal: action.payload,
      };
    },
    // login reducer
    loginStart: (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          email: action.payload.email,
          uid: action.payload.uid,
          username: action.payload.displayName,
        },
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    // register rudecer
    registerStart: (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    registerSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          email: action.payload.email,
          uid: action.payload.uid,
          username: action.payload.displayName,
        },
      };
    },
    registerFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    // logout
    logout: (state, action) => {
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const registerUser = (email, password, fullname) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: fullname,
    });
    dispatch(
      registerSuccess({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: fullname,
      })
    );
    // Đăng nhập người dùng sau khi đăng ký thành công
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const {
  openModalAuth,
  registerFailure,
  registerSuccess,
  registerStart,
  logout,
  loginSuccess,
  loginFailure,
  loginStart,
} = authSlice.actions;

export default authSlice.reducer;
