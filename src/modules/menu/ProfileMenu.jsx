import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { auth } from "../../config/firebaseConfigure";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
    navigate("/");
    toast.success("logout done");
  };

  return (
    <div className=" h-[500xp] bg-white shadow-md absolute top-[100%] p-10 left-0 w-[300px]">
      <div className="flex flex-col w-full gap-3">
        <Link
          to="/dashboard"
          className="flex items-center justify-between w-full text-lg hover:text-yellow text-gray text-opacity-90"
        >
          <span>dashboard</span>
          <span>
            <FaAngleRight className="text-sm" />
          </span>
        </Link>
        <div
          onClick={handleLogout}
          className="flex items-center justify-between w-full text-lg hover:text-yellow text-gray text-opacity-90"
        >
          <span>logout</span>
          <span>
            <FaAngleRight className="text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
