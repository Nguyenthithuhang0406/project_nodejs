import { useNavigate } from "react-router-dom";
import { request } from "../shared/utils/axios-http";
import { toast } from "react-toastify";

function useAuth() {
  const navigate = useNavigate();

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
    navigate("/profile");
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

  return { login, register };
}

export default useAuth;
