import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebaseConfigure";
import { loginSuccess } from "../redux/slice/authSlice";

export function useDataUser(user) {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginSuccess(null));
      }
    });
    return () => unsubscribe();
  }, [user]);
}
