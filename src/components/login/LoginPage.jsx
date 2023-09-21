import axios from "axios";
import React from "react";

import Cookies from "js-cookie";

export const LoginPage = () => {
  const onClickHander = async () => {
    const { data } = await axios.post("/api/auth/login");
    const { token } = data;
    console.log("token: ", token);

    Cookies.set("auth", token, { sameSite: "Lax" });
    console.log("Login Success");
  };

  const onClickLogoutHander = async () => {
    Cookies.remove("auth");
    console.log("Logout Success");
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">LoginPage</h2>
      
      <button
        onClick={onClickHander}
        className="bg-cyan-600 rounded font-semibold hover:bg-transparent hover:border hover:border-cyan-500 hover:text-cyan-500 py-4 px-6 mt-10"
      >
        Click Me to Login
      </button>

      <button
        onClick={onClickLogoutHander}
        className="mx-5 bg-red-600 rounded font-semibold hover:bg-transparent hover:border hover:border-red-500 hover:text-red-500 py-4 px-6 mt-10"
      >
        Logout
      </button>

    </div>
  );
};
