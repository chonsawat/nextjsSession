"use client";

import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const ProtectRoute = (props) => {
  const { component: SettingPage } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth_token = Cookies.get("auth");

    if (auth_token) {
      const { name, role } = jwt.verify(
        auth_token,
        process.env.NEXT_PUBLIC_JWT_SECRET
      );

      setUser({
        name,
        role,
      });
    }
  }, []);

  return (
    <>
      <div>
        <p>
          this is protected with role:{" "}
          {user?.role === "Admin" ? "Admin" : "User"}
        </p>
        {user?.role === "Admin" ? (
          <>
            <SettingPage />
          </>
        ) : (
          <h2 className="text-2xl text-red-500 animate-pulse font-bold">
            Your are not Admin
          </h2>
        )}
      </div>
    </>
  );
};

export default ProtectRoute;
