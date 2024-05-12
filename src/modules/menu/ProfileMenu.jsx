import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { auth } from "../../config/firebaseConfigure";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { displayCart, displayWishlist } from "../../redux/slice/storeSlice";
import { signOut } from "firebase/auth";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    console.log("logout");
    dispatch(logout(null));
    dispatch(displayCart([]));
    dispatch(displayWishlist([]));
    navigate("/");
    toast.success("logout done");
  };

  return (
    <div className=" h-[500xp] bg-white shadow-md absolute top-[100%] p-10 left-0 w-[300px]">
      <div className="flex flex-col w-full gap-3">
        <Link
          to="/manage"
          className="flex items-center justify-between w-full text-sm hover:text-yellowColor text-gray text-opacity-90"
        >
          <span>manage</span>
          <span>
            <FaAngleRight className="text-sm" />
          </span>
        </Link>
        <div
          onClick={handleLogout}
          className="flex items-center justify-between w-full text-sm hover:text-yellowColor text-grayDark "
        >
          <span>logout</span>
          <span>
            <FaAngleRight className="text-sm" />
          </span>
        </div>
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default ProfileMenu;
