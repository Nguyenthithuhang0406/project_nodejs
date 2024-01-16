import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { request, requestWithToken } from "../shared/utils/axios-http";
import { useContext } from "react";
import { AppContext } from "../App";

function useAuth() {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const login = async (data) => {
    const { username, password } = data;

    const res = await request({
      data: {
        username,
        password,
      },
      method: "post",
      url: "/auth/login",
    });
    const token = res.data;
    //local storage
    localStorage.setItem("access_token", token);

    toast.success("login success");
    navigate("/");
    getMe();
  };

  const register = async (data) => {
    const { username, password } = data;

    await request({
      data: {
        username,
        password,
      },
      url: "/auth/register",
      method: "post",
    });
    toast.success("create account success");
    navigate("/login");
  };

  const getMe = async () => {
    const res = await requestWithToken({
      url: "/user/me",
    });
    setUser(res.data);
  };

  const logOut = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return { login, register, getMe, logOut };
}

export default useAuth;